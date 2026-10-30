# Blood+ — HTML / JavaScript

Port dostarczonego Blood+ 1.0.0: 10 etapów kampanii, sześć bossów i Arena. Logika działa w JavaScript, obraz w Canvas 2D, dźwięk przez Web Audio, zapis w localStorage. Rozdzielczość logiczna **320×240**, krok symulacji **20 ms**, grafika **4×**. Bez JVM, emulatora, backendu i zewnętrznych API.

## Uruchomienie

```sh
python3 -m http.server 8080 --bind 127.0.0.1 --directory web
```

Otwórz [localhost:8080](http://localhost:8080). Nie używaj `file://`. Nie potrzeba npm, kompilacji ani generowania grafik. Po aktualizacji wcześniej otwartej strony użyj **Cmd+Shift+R / Ctrl+Shift+R**.

## Sterowanie

| Wejście | Działanie |
|---|---|
| ← / A, → / D | Ruch, pchanie/przeciąganie skrzyni |
| ↑ / W / Space | Skok, drugi skok, wspinanie |
| ↓ / S | Blok, akcje kontekstowe |
| J / Enter / LPM | Atak, combo, potwierdzanie |
| PPM przytrzymany nad grą | Blok |
| Q | Lewy softkey, Bloodlust przy pełnym mierniku |
| E / Esc | Prawy softkey, pauza, powrót, pominięcie fabuły |
| LPM w menu | Dolne opcje, środkowa pozycja i strzałki |
| Kółko / touchpad | Przewijanie ekranów ze scrollbarem |
| 0–9 | Oryginalna klawiatura telefonu |

Trzymany kierunek pozostaje aktywny po skoku/ataku, a trzymany blok po puszczeniu ataku. Utrata fokusu lub ukrycie karty zatrzymuje grę i audio; powrót wymaga **Resume**. Zapis zachowuje odblokowane rozdziały i rekord Areny, nie dowolną pozycję w mapie.

Interfejs strony jest angielski. Nowy zapis proponuje polski w grze; język można zmienić przez **Opcje → Język**. Pozostałe języki źródłowe zachowano.

## Pliki i grafika

- `web/index.html`, `web/styles.css`, `web/src/`, `web/assets/` — działająca gra.
- `web/package.json` — konfiguracja modułów JavaScript używana przez weryfikację CI; bez zależności npm.
- `.github/workflows/pages.yml` — kontrola plików i publikacja GitHub Pages po pushu do `main`.
- `original/` — zachowany, niezmieniony JAR/JAD; nie jest pobierany przez grę.
- `AGENTS.md`, `LICENSE`, konfiguracja Git i ten README — instrukcje projektu i informacje licencyjne.

Usunięto strony i skrypty deweloperskie, testy, raporty, zrzuty, pliki robocze oraz eksport analizy `game-data.json`. Żaden z nich nie jest potrzebny podczas gry. Manifesty runtime zachowano: loader potrzebuje tożsamości obrazów, palet, geometrii i odwołań do tekstur.

Finalna grafika: **398 bezstratnych WebP, 194 266 412 bajtów** — 371 plansz animacji i 27 atlasów regionów. Manifest obejmuje **3626 źródłowych ID w 56 grupach**. Animacje pobierają wybrane sekwencje; wspólne ruchy Sayi są przygotowywane z wyprzedzeniem. Regiony pobierają teksturę przy pierwszym widocznym rysowaniu. Pozostało siedem map indeksów palety `.bin` (180 048 bajtów), używanych tylko przy odpowiedniej zmianie kolorów. Nie są pobierane z góry. Plansza atlasu może zawierać sąsiednie klatki tej samej sekwencji.

Cztery wcześniej pikselowe klatki potwora `19456:113–116` poprawiono za pomocą AI. **Różnica wizualna: poza Sayi `25600:87` używa grafiki sąsiedniej klatki 88 po odmowie narzędzia AI.** Źródłowe kolizje i timing pozostały bez zmian. Pasek miecza ma wspólny obrys dla wszystkich stanów; naładowanie zmienia kolor jego wnętrza.

## GitHub Pages

W repozytorium wybierz **Settings → Pages → Build and deployment → Source: GitHub Actions**. Workflow uruchamia się po pushu do `main` lub ręcznie przez **Actions → Deploy GitHub Pages**.

Przed publikacją sprawdza składnię i zależności wszystkich modułów, geometrię klatek, odwołania do stron, SHA-256 grafik i kompletność zasobów. Odrzuca nieużywane pliki w `web/assets/`. Kontrola jest zawarta bezpośrednio w workflow i nie wymaga usuniętego katalogu testów. Publikowane są tylko HTML, CSS, `src/` i `assets/`. Ścieżki obsługują też adres projektu `/blood-plus-web-port/`.

## Weryfikacja i ograniczenia

Po końcowym czyszczeniu ponownie sprawdzono 43 moduły JavaScript, 453 pliki zasobów, wszystkie odwołania do plansz i sumy grafik. Gra uruchomiła menu i pierwszy poziom w Chrome bez błędów konsoli. Workflow przeszedł kontrolę lokalnie; nie uruchamiano publikacji.

Odbiór przed usunięciem narzędzi: **36/36 testów Node, 6/6 Python i 38/38 kontroli Chrome**. Pełny przebieg przez wejście klawiatury: **188619 kroków, etapy 0–9, sześć bossów ze zgodnymi fazami i animacjami, 18/18 udanych QTE**, zgodny końcowy zapis. Zweryfikowano 3626 klatek pod czterema odbiciami i hashe RGBA 3528 unikalnych wycinków. Nie było brakujących klatek, starego renderera awaryjnego ani żądań do wycofanych grafik. Testy i raporty usunięto zgodnie z poleceniem pozostawienia paczki gry.

Safari i Firefox nie mają potwierdzonego odbioru. MIDI odtwarza lokalny syntezator o przybliżonych barwach. Brakującą właściwość `Glu-Wap-Type` port interpretuje jako `0`; oryginału nie zmieniano. Historyczne odnośniki promocyjne są wyłączone. Wewnętrzny kod zachowuje obfuskowane nazwy z dostarczonej gry.

JAR ma 671603 bajty, SHA-256 `c50a5a85d37f5386e01fb0de678357a3d96c1c9f15e9b113122b8e8f29167111`. JAD ma 547 bajtów, SHA-256 `9a3b1d19abae82e10bfb963603a640e79f6f36be5f51888c1a6901c474400bd1`. Manifest zawiera `[ANDREW-LVIV] / Glu Mobile`; port opiera się na tym konkretnym pliku. Prawa do gry i zasobów pozostają u ich właścicieli.
