/** Local SMF decoder and Web Audio synthesizer. No network, soundfonts or JVM. */
export const PLAYER_STATE = Object.freeze({ CLOSED: 0, UNREALIZED: 100, REALIZED: 200, PREFETCHED: 300, STARTED: 400 });

export function parseMidi(input) {
  const bytes = input instanceof ArrayBuffer ? new Uint8Array(input) : Uint8Array.from(input);
  let p = 0, limit = bytes.length;
  const need = n => { if (p + n > limit) throw new Error(`Truncated MIDI at ${p}`); };
  const u8 = () => { need(1); return bytes[p++]; };
  const u16 = () => u8() * 256 + u8();
  const u32 = () => u16() * 65536 + u16();
  const tag = () => String.fromCharCode(u8(), u8(), u8(), u8());
  const vlq = () => { let n = 0; for (let i = 0; i < 4; i++) { const b = u8(); n = n * 128 + (b & 127); if (!(b & 128)) return n; } throw new Error('Invalid MIDI variable-length integer'); };
  if (tag() !== 'MThd') throw new Error('Missing MIDI header');
  const headerSize = u32();
  if (headerSize < 6) throw new Error('Invalid MIDI header size');
  need(headerSize);
  const format = u16(), trackCount = u16(), division = u16();
  if (format > 1 || !trackCount || (format === 0 && trackCount !== 1)) throw new Error('Only synchronous MIDI formats 0 and 1 are supported');
  if (!division || (division & 0x8000)) throw new Error('Only MIDI PPQN time division is supported');
  p += headerSize - 6;
  const events = [];
  let endTick = 0;
  for (let track = 0; track < trackCount; track++) {
    if (tag() !== 'MTrk') throw new Error('Missing MIDI track');
    const length = u32(); need(length); const end = p + length; limit = end;
    let tick = 0, running = 0, order = 0, ended = false;
    while (p < end) {
      tick += vlq();
      let status = u8();
      if (status < 128) { if (!running) throw new Error('MIDI running status without status'); p--; status = running; }
      const event = { tick, track, order: order++ };
      if (status === 0xff) {
        const meta = u8(), size = vlq(); need(size);
        const data = bytes.slice(p, p + size); p += size;
        events.push({ ...event, type: 'meta', meta, data });
        running = 0; // SMF meta events cancel channel running status.
        if (meta === 0x2f) { if (size !== 0) throw new Error('Invalid end-of-track'); ended = true; break; }
        if (meta === 0x51 && (size !== 3 || !data.some(v => v))) throw new Error('Invalid MIDI tempo');
      } else if (status === 0xf0 || status === 0xf7) {
        running = 0; const size = vlq(); need(size);
        events.push({ ...event, type: 'sysex', status, data: bytes.slice(p, p + size) }); p += size;
      } else if (status >= 0x80 && status <= 0xef) {
        running = status;
        const kind = status >> 4, a = u8(), b = kind === 12 || kind === 13 ? 0 : u8();
        if (a > 127 || b > 127) throw new Error('Invalid MIDI channel data');
        events.push({ ...event, type: 'channel', kind, channel: status & 15, a, b });
      } else throw new Error(`Unsupported MIDI status ${status}`);
    }
    if (!ended || p !== end) throw new Error('Missing end-of-track or trailing MIDI track data');
    endTick = Math.max(endTick, tick); limit = bytes.length;
  }
  if (p !== bytes.length) throw new Error('Trailing MIDI file data');
  events.sort((a, b) => a.tick - b.tick || a.track - b.track || a.order - b.order);
  let tick = 0, seconds = 0, tempo = 500000;
  for (const e of events) {
    seconds += (e.tick - tick) * tempo / (division * 1000000); tick = e.tick; e.time = seconds;
    if (e.type === 'meta' && e.meta === 0x51) tempo = e.data[0] * 65536 + e.data[1] * 256 + e.data[2];
  }
  const duration = seconds + (endTick - tick) * tempo / (division * 1000000);
  return { format, trackCount, division, duration, endTick, events, notes: compileNotes(events, duration) };
}

function compileNotes(events, duration) {
  const channels = Array.from({ length: 16 }, () => ({ program: 0, volume: 100, expression: 127, pan: 64, bend: 8192, sustain: false, active: [] }));
  const notes = [];
  const gain = c => (c.volume / 127) * (c.expression / 127);
  const finish = (c, n, time) => { n.end = time; c.active.splice(c.active.indexOf(n), 1); };
  for (const e of events) {
    if (e.type !== 'channel') continue;
    const c = channels[e.channel], time = e.time;
    if (e.kind === 9 && e.b) {
      const n = { channel: e.channel, key: e.a, velocity: e.b, program: c.program, start: time, end: duration, held: true,
        gains: [[time, gain(c)]], bends: [[time, (c.bend - 8192) / 8192 * 2]], pans: [[time, (c.pan - 64) / 64]] };
      c.active.push(n); notes.push(n);
    } else if (e.kind === 8 || (e.kind === 9 && !e.b)) {
      const n = c.active.find(n => n.key === e.a && n.held);
      if (n) { n.held = false; if (!c.sustain) finish(c, n, time); }
    } else if (e.kind === 12) c.program = e.a;
    else if (e.kind === 14) {
      c.bend = e.a + e.b * 128;
      for (const n of c.active) n.bends.push([time, (c.bend - 8192) / 8192 * 2]);
    } else if (e.kind === 11) {
      if (e.a === 7 || e.a === 11) {
        c[e.a === 7 ? 'volume' : 'expression'] = e.b;
        for (const n of c.active) n.gains.push([time, gain(c)]);
      } else if (e.a === 10) { c.pan = e.b; for (const n of c.active) n.pans.push([time, (c.pan - 64) / 64]); }
      else if (e.a === 64) { c.sustain = e.b >= 64; if (!c.sustain) for (const n of [...c.active]) if (!n.held) finish(c, n, time); }
      else if (e.a === 120 || e.a === 123) {
        for (const n of [...c.active]) { n.held = false; if (e.a === 120 || !c.sustain) finish(c, n, time); }
      } else if (e.a === 121) {
        c.expression = 127; c.bend = 8192; c.sustain = false;
        for (const n of [...c.active]) { n.gains.push([time, gain(c)]); n.bends.push([time, 0]); if (!n.held) finish(c, n, time); }
      }
    }
  }
  for (const n of notes) delete n.held;
  return notes;
}

let sharedContext;
const players = new Set();
/** Call directly from a trusted pointer/key gesture. Resolves false if Web Audio is unavailable. */
export async function unlockAudio() {
  const Context = globalThis.AudioContext || globalThis.webkitAudioContext;
  if (!sharedContext && Context) sharedContext = new Context();
  const contexts = new Set([sharedContext, ...[...players].map(p => p.context)].filter(Boolean));
  await Promise.all([...contexts].map(c => c.state === 'suspended' ? c.resume() : undefined));
  for (const p of players) p.activate();
  return contexts.size > 0;
}
export function stopAllAudio() { for (const p of players) p.stop(); }
if (typeof document !== 'undefined') document.addEventListener('visibilitychange', () => { if (document.hidden) stopAllAudio(); });
if (typeof window !== 'undefined') window.addEventListener('blur', stopAllAudio);

const patch = program => {
  const family = program >> 3;
  return { wave: ['triangle', 'sine', 'square', 'triangle', 'triangle', 'sawtooth', 'sawtooth', 'sawtooth', 'square', 'sine', 'sawtooth', 'sine', 'triangle', 'sine', 'sine', 'triangle'][family],
    attack: [0, 5, 6, 11, 12].includes(family) ? 0.025 : 0.005, release: [5, 6, 11, 12].includes(family) ? 0.12 : 0.05 };
};
function automate(param, events, mediaFrom, origin, convert = v => v) {
  let value = events[0][1];
  for (const [t, v] of events) { if (t <= mediaFrom) value = v; else param.setValueAtTime(convert(v), origin + t); }
  param.setValueAtTime(convert(value), origin + mediaFrom);
}
function voice(context, master, note, origin, mediaFrom) {
  const start = origin + mediaFrom, drum = note.channel === 9, timbre = patch(note.program);
  const duration = drum ? Math.min(note.end - mediaFrom, note.key === 42 || note.key === 44 ? 0.08 : 0.24) : note.end - mediaFrom;
  if (duration <= 0) return null;
  const end = start + duration, release = drum ? 0.025 : timbre.release;
  const envelope = context.createGain(), volume = context.createGain();
  const pan = context.createStereoPanner();
  envelope.connect(volume); volume.connect(pan); pan.connect(master);
  automate(volume.gain, note.gains, mediaFrom, origin);
  automate(pan.pan, note.pans, mediaFrom, origin);
  const loudness = note.velocity / 127 * (drum ? 0.18 : 0.08);
  envelope.gain.setValueAtTime(0, start);
  envelope.gain.linearRampToValueAtTime(loudness, Math.min(end, start + timbre.attack));
  envelope.gain.setValueAtTime(loudness, end);
  envelope.gain.linearRampToValueAtTime(0, end + release);
  let source;
  if (drum && note.key !== 35 && note.key !== 36 && !(note.key >= 41 && note.key <= 50 && note.key % 2 === 1)) {
    const size = Math.ceil(context.sampleRate * (duration + release));
    const buffer = context.createBuffer(1, size, context.sampleRate), data = buffer.getChannelData(0);
    let seed = 12345 + note.key;
    for (let i = 0; i < size; i++) { seed = (Math.imul(seed, 1664525) + 1013904223) | 0; data[i] = (seed / 2147483648) * Math.exp(-i / (context.sampleRate * (note.key >= 42 ? 0.045 : 0.09))); }
    source = context.createBufferSource(); source.buffer = buffer;
  } else {
    source = context.createOscillator(); source.type = drum ? 'sine' : timbre.wave;
    if (drum) { source.frequency.setValueAtTime(note.key < 40 ? 130 : 180, start); source.frequency.exponentialRampToValueAtTime(note.key < 40 ? 45 : 70, end); }
    else automate(source.frequency, note.bends, mediaFrom, origin, bend => 440 * 2 ** ((note.key - 69 + bend) / 12));
  }
  source.connect(envelope); source.start(start); source.stop(end + release);
  const result = { end: end + release, stop() { try { source.stop(); } catch {} source.disconnect(); envelope.disconnect(); volume.disconnect(); pan.disconnect(); } };
  source.onended = () => { source.disconnect(); envelope.disconnect(); volume.disconnect(); pan.disconnect(); };
  return result;
}

export function createMidiPlayer(bytes, { audioContext } = {}) {
  const midi = parseMidi(bytes);
  let state = PLAYER_STATE.UNREALIZED, loops = 1, remaining = 1, level = 100, position = 0;
  let context = audioContext, master, timer, origin = 0, nextNote = 0, cycle = 0, activated = false;
  const voices = new Set();
  const ensureOpen = () => { if (!state) throw new Error('Player is closed'); };
  const clear = () => { clearInterval(timer); timer = undefined; for (const v of voices) v.stop(); voices.clear(); activated = false; };
  function pump() {
    if (state !== 400 || !activated) return;
    const now = context.currentTime;
    for (const v of voices) if (v.end < now) voices.delete(v);
    const elapsed = Math.max(0, now - origin);
    if (midi.duration === 0 || (remaining !== -1 && elapsed >= midi.duration * remaining)) {
      clear(); position = 0; state = 300; return;
    }
    const currentCycle = Math.floor(elapsed / midi.duration);
    if (cycle < currentCycle) { cycle = currentCycle; nextNote = 0; }
    // Schedule across the loop boundary ahead of time, avoiding timer-sized gaps.
    while (midi.notes.length && (remaining === -1 || cycle < remaining)) {
      const cycleOrigin = origin + cycle * midi.duration, note = midi.notes[nextNote];
      if (cycleOrigin + note.start >= now + 0.12) break;
      const from = Math.max(note.start, cycle === 0 ? position : 0, now - cycleOrigin);
      if (note.end > from) { const v = voice(context, master, note, cycleOrigin, from); if (v) voices.add(v); }
      if (++nextNote === midi.notes.length) { cycle++; nextNote = 0; }
    }
  }
  const mediaPosition = () => {
    if (!midi.duration) return 0;
    const elapsed = Math.max(0, context.currentTime - origin);
    return elapsed < midi.duration ? Math.max(position, elapsed) : elapsed % midi.duration;
  };
  const player = {
    get context() { return context; },
    midi,
    realize() { ensureOpen(); if (state === 100) state = 200; },
    getControl(name) { ensureOpen(); return name === 'VolumeControl' ? { setLevel(value) { ensureOpen(); level = Math.max(0, Math.min(100, Math.trunc(Number(value) || 0))); if (master) master.gain.setValueAtTime(level / 100, context.currentTime); return level; }, getLevel() { return level; } } : null; },
    setLoopCount(value) { ensureOpen(); if (!Number.isInteger(value) || value === 0 || value < -1) throw new RangeError('Loop count must be -1 or a positive integer'); if (state === 400) throw new Error('Cannot change loop count while started'); loops = value; },
    start() { ensureOpen(); if (state === 400) return; state = 400; remaining = loops; player.activate(); },
    activate() {
      if (state !== 400 || activated || (typeof document !== 'undefined' && document.hidden)) return;
      context ||= sharedContext;
      if (!context || context.state !== 'running') return;
      if (!master) { master = context.createGain(); master.gain.value = level / 100; master.connect(context.destination); }
      origin = context.currentTime + 0.015 - position; nextNote = 0; cycle = 0; activated = true;
      while (nextNote < midi.notes.length && midi.notes[nextNote].end <= position) nextNote++;
      pump(); if (activated) timer = setInterval(pump, 25);
    },
    stop() { ensureOpen(); if (state !== 400) return; if (activated) position = mediaPosition(); clear(); state = 300; },
    close() { if (!state) return; clear(); master?.disconnect(); master = undefined; state = 0; players.delete(player); },
    getState() { return state; },
    getMediaTime() { return Math.round((state === 400 && activated ? mediaPosition() : position) * 1000000); }
  };
  players.add(player);
  return player;
}
