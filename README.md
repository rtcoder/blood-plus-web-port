# Blood+ — port HTML / JavaScript

Pełna logika dostarczonego Blood+ 1.0.0 działa w JavaScript: 10 etapów kampanii, sześć bossów i Arena. Canvas 2D, Web Audio i localStorage; bez JVM, emulatora, backendu ani zewnętrznego API. Widok logiczny **320×240, poziomo**, krok symulacji **20 ms**, grafika **4×**.

Na życzenie użytkownika usunięto stare warianty grafik, kopie, surowe generacje AI i porównania. Gra korzysta wyłącznie z finalnego remasteru w `web/assets/remaster-v3/`. Nie ma już przełącznika oryginał/NN/v2. Aktualna paczka zawiera oryginalny JAR/JAD i gotowy katalog `web/`. Historyczne raporty, testy i narzędzia produkcyjne zostały usunięte na życzenie użytkownika.

## Uruchomienie

```sh
python3 -m http.server 8080 --bind 127.0.0.1 --directory web
```

Otwórz [localhost:8080](http://localhost:8080). Nie używaj `file://`. Gotowe `web/` nie wymaga npm, generowania grafik ani sieci zewnętrznej.

## GitHub Pages

Workflow `.github/workflows/pages.yml` po każdym pushu do `main` przygotowuje i publikuje statyczną grę. Można go również uruchomić ręcznie przez **Actions → Deploy GitHub Pages → Run workflow** na `main`.

Jednorazowo ustaw w repozytorium **Settings → Pages → Build and deployment → Source: GitHub Actions**, zgodnie z [dokumentacją GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). Do commita muszą wejść workflow oraz cały katalog `web/`, łącznie z grafikami.

Publikowany pakiet obejmuje `index.html`, `styles.css`, `src/` i `assets/`. Nie wymaga npm ani generowania AI. Katalog `original/` oraz pomocniczy `web/dev/` nie są publikowane. Względne ścieżki obsługują adres projektu `/blood-plus-web-port/`; rzeczywisty URL pojawi się w środowisku **github-pages** po udanym wdrożeniu. Zapis gry na domenie Pages jest niezależny od zapisu na localhost.

Interfejs strony (przyciski, sterowanie i komunikaty zapisu) jest po angielsku. Język wewnątrz gry wybiera się oddzielnie; spolszczenie pozostaje dostępne.

## Sterowanie

| Wejście | Działanie |
|---|---|
| ← / A, → / D | Ruch, pchanie/przeciąganie skrzyni |
| ↑ / W / Space | Skok, drugi skok, wspinanie; akcja kontekstowa |
| ↓ / S | Blok, kufry/przełączniki, puszczenie krawędzi; akcja kontekstowa |
| J / Enter | Atak/combo, atak w powietrzu, potwierdzanie |
| LPM w rozgrywce | Atak; kolejne kliknięcia uruchamiają combo |
| PPM przytrzymany nad grą | Blok / źródłowe Down |
| LPM w menu | Dolne opcje, aktywne strzałki i środkowa pozycja |
| Kółko / touchpad | Przewijanie Pomocy i O grze nad obrazem ze scrollbarem |
| Q | Lewy softkey; wybór, Bloodlust przy pełnym mierniku |
| E / Esc | Prawy softkey; pauza, powrót, pominięcie fabuły |
| 0–9 | Oryginalna klawiatura telefonu |

Trzymany kierunek pozostaje aktywny po skoku/ataku; trzymany blok po puszczeniu ataku również. To zamierzone poprawki remasteru względem źródłowego `s.keyReleased()`, który czyści całą klawiaturę. `Actions` zachowuje domyślny tryb źródłowy dla testów porównawczych. Fizyka i czas animacji nie zostały zmienione.

Utrata fokusu lub ukrycie karty czyści wejście, zatrzymuje grę i audio. Powrót wymaga **Resume**. PPM nie otwiera menu kontekstowego wyłącznie nad ekranem gry; kółko poza dokumentami ze scrollbarem zachowuje działanie przeglądarki. Ctrl/Cmd+kółko nadal powiększa stronę.

## Polski i zapis

Nowy zapis proponuje polski. Język można zmienić przez **Opcje → Język → Polski**. Spolszczenie obejmuje menu, pomoc, fabułę, dialogi i przedmioty; pozostałe sześć języków zachowano.

Zapis w localStorage zachowuje źródłową progresję, odblokowane rozdziały, język i rekord Areny. Kontynuacja: **Graj**, następnie wybór odblokowanego rozdziału strzałkami. Nie zapisuje dowolnej pozycji w mapie. `localhost` i `127.0.0.1` mają osobne magazyny. Uszkodzony zapis wraca do pustego stanu; odmowa zapisu pokazuje ostrzeżenie. Reset jest w szczegółach pod grą i wymaga potwierdzenia.

## Finalna grafika

Jeden zestaw: `web/assets/remaster-v3/`, **3661 bezstratnych WebP** — 73 gotowe atlasy i 3588 unikalnych plików klatek. Manifest obejmuje 3604 źródłowe ID, w tym aliasy/puste klatki. Tła, efekty, HUD, fonty i animacje używają finalnych tekstur. Anchory, palety, składanie regionów i współrzędne logiczne pozostają źródłowe.

Przed usunięciem wejść porównano w Chrome wszystkie bajty RGBA 73 spakowanych atlasów z dotychczasowym finalnym rendererem: **zero różnic**. Zapisano wyłącznie wynik już wykonanego remasteru; porządkowanie nie było nową generacją AI.

Pięć klatek nadal zawiera poprzedni remaster po odmowie narzędzia AI: `19456:113–116` i `25600:87`. To istniejące wyjątki, zachowane w finalnych atlasach.

## Szybki start i ładowanie grafik

Gra pobiera na start tylko metadane, zasoby interfejsu i intro. Grafiki poziomów są dogrywane, gdy otwiera je źródłowy loader. Zwykłe ruchy i ataki Sayi są przygotowywane przy wejściu do gry; dłuższe sekwencje fabularne/QTE przy rozpoczęciu konkretnej animacji. Nieużywane klatki poprzedniego poziomu są zwalniane; wspólne ruchy i interfejs pozostają w pamięci.

- Obrazy PNG → WebP: **290,45 → 205,09 MB**, bezstratnie (`cwebp -lossless -exact`). Każdy z 3661 wyników porównano bajt po bajcie po dekodowaniu RGBA, także przezroczyste piksele. Rozmiary 4×, anchory, palety i odbicia nie zostały zmienione.
- Indeks klatek: **8,54 MB → 657 KB**; zawiera tylko dane potrzebne do rysowania i przygotowania animacji.
- Menu w Chrome na lokalnym serwerze: **5,53 MB zasobów, 13 klatek i 8 atlasów**, zamiast całej kampanii. To suma `encodedBodySize` zasobów strony, bez narzuconego ograniczenia łącza; nie deklaracja czasu startu na konkretnym połączeniu.
- Pierwszy poziom: około **46,3 MB łącznie od startu**. Pozostała część grafiki dogrywa się w dalszej grze. Bezstratny WebP nie zmniejsza całej gry do kilku MB.

Podczas dogrywania pojawia się pasek postępu, a symulacja czeka. Czas pobierania nie jest nadrabiany po wznowieniu. Błąd pobierania pokazuje **Retry loading**. Nie dodano usług zewnętrznych, backendu ani generowania AI podczas startu.

Testy loadera i zgodności logiki uruchomisz bez npm:

```sh
node --test web/dev/asset-loading.test.mjs web/dev/campaign-streaming.test.mjs
```

Drugi test odtwarza 188619 kroków dwukrotnie i porównuje 9430 próbek stanu źródłowego, RNG oraz końcowy zapis z włączonymi i wyłączonymi hookami ładowania. Nie wymaga Javy ani skasowanego katalogu `reference/`. [Próba w przeglądarce](http://localhost:8080/dev/loading-review.html) sprawdza start, poziomy 0/4/6/9, zasoby bossów, zegar, pamięć, pauzę oraz błąd i ponowienie pobierania. Pomocniczy `?eager=1` pozwala starym synchronicznym fixture QA przygotować cały zestaw z góry; zwykła strona używa ładowania na żądanie.

Obrazy są już przygotowane w repozytorium. Workflow Pages wyłącznie je kopiuje; nie wymaga konwertera. `web/dev/encode-webp.py` to zapis jednorazowej konwersji z PNG; Pillow i `cwebp` są potrzebne tylko do tej operacji. Skrótowe dowody: `web/dev/performance-results.json`; hashe wyników i pikseli: `web/assets/remaster-v3/encoding-proof.json`.

## Weryfikacja

Przed usunięciem narzędzi i raportów przeszło 94/94 testów Node i 32/32 Python. Historyczny odbiór kampanii obejmował 188619 kroków zwykłego wejścia, wszystkie mapy 0–9, sześć walk bossów, 18/18 QTE i zgodny końcowy RMS. Ruch obejmował wszystkie 975 sekwencji. Te wyniki opisują wcześniejszą walidację; usuniętych testów i dowodów nie dołączamy do obecnej paczki.

Przy dodawaniu Pages lokalnie sprawdzono składnię workflow, rzeczywiste pakowanie oraz wszystkie 3823 ścieżki strony pod prefiksem `/blood-plus-web-port/`, łącznie z SHA-256 grafik. Angielski interfejs, pauzę i wznowienie sprawdzono w Chrome. Safari i Firefox nie mają potwierdzonego odbioru.

Pomocnicze strony regresji w `web/dev/` działają lokalnie i nie wchodzą do publikacji Pages: [ruch](http://localhost:8080/dev/movement-review.html), [mysz](http://localhost:8080/dev/mouse-review.html), [klikalne menu](http://localhost:8080/dev/canvas-ui-review.html), [kółko](http://localhost:8080/dev/wheel-review.html). Używają jawnych fixture i odłączonego zapisu użytkownika.

## Źródło i ograniczenia

JAR: 671603 bajty, SHA-256 `c50a5a85d37f5386e01fb0de678357a3d96c1c9f15e9b113122b8e8f29167111`. JAD: 547 bajtów. Oba pozostały bez zmian. Manifest zawiera `[ANDREW-LVIV] / Glu Mobile`; port opiera się na konkretnym dostarczonym pliku. Prawa do gry i zasobów pozostają u ich właścicieli.

- MIDI odtwarza lokalny syntezator o przybliżonych barwach.
- Dostarczony JAD/manifest nie zawiera `Glu-Wap-Type`. Port przyjmuje `0`, tak jak robocza referencja JAR; oryginału nie modyfikowano.
- Historyczne odnośniki promocyjne wyłączono. Scheduler przeglądarki używa stałego kroku 20 ms.
- Kod logiki zachowuje obfuskowane nazwy i deskryptory ułatwiające porównania.
- Surowe generacje, stare rastry, prompty i raporty pochodzenia zostały usunięte. Obecna paczka zawiera gotowe wyniki; nie pozwala odtworzyć identycznych generacji AI.

Oryginały pozostają w `original/`; gra nie potrzebuje ich podczas działania. `CONTENTS.sha256` opisuje otrzymaną paczkę i wymienia również pliki później usunięte — nie jest listą plików obecnego portu.
