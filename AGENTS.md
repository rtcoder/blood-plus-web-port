# Instrukcje dla agenta — Blood+ HTML/JavaScript

## Zadanie i priorytety

Masz wykonać pełny, możliwie wierny port **Blood+ z dostarczonego JAR** do HTML, CSS i JavaScript, a grafikę przygotować w rozdzielczości 4× z kontrolowaną poprawą za pomocą AI.

Kolejność priorytetów:

1. Wierność logiki, zawartości i zachowania oryginału.
2. Poprawne wydobycie i interpretacja zasobów oraz metadanych animacji.
3. Spójny remaster grafiki 4×/AI, zachowujący rozpoznawalny wygląd gry.
4. Stabilne działanie w przeglądarce i proste uruchomienie lokalne.
5. Czytelność i możliwość dalszego rozwoju kodu.

Pracuj samodzielnie w ramach tego zakresu. Podejmuj i zapisuj zwykłe, odwracalne decyzje techniczne. Nie kończ zadania po samym audycie, szkielecie, planie, ekranie tytułowym ani pierwszym poziomie. Przy realnej blokadzie opisz dokładnie, czego brakuje, zachowaj stan pracy i wykonaj pozostałe niezależne zadania. Nie przedstawiaj niewykonanych etapów jako ukończonych.

## Obowiązkowa kolejność czytania

1. `README.md`.
2. `reference/ORIGINAL_AUDIT.md`, `reference/resource-audit.json`, `reference/jar-inventory.json`.
3. `docs/PORTING_PLAN.md`.
4. `docs/ASSET_PIPELINE.md`.
5. Kod `tools/extract_resources.py` i `assets/extracted/manifest.json`.

Te dokumenty są przekazanym zakresem pracy. Jeżeli dodatkowe skille są dostępne, używaj ich tam, gdzie pomagają. Brak pluginu lub skilla nie blokuje odczytu plików, ekstrakcji, implementacji ani testów możliwych zwykłymi narzędziami.

## Oryginały i źródła prawdy

- Nie zmieniaj JAR, JAD ani plików w `original/`. Weryfikuj sumy z `reference/SHA256SUMS.txt`.
- Nie pobieraj innego wariantu gry i nie mieszaj jego assetów lub logiki bez wyraźnego powodu i zapisanego pochodzenia.
- Rozdziel fakt z kodu, wynik uruchomienia, wniosek i przyjęte założenie.
- Modyfikacje dystrybutora widoczne w manifeście opisuj uczciwie. Nie nazywaj pliku zweryfikowanym oryginałem producenta.
- Emulator służy do ustalenia zachowania i porównań. Finalny runtime gry ma wykonywać logikę w JavaScript; uruchomienie JAR w przeglądarkowym emulatorze nie realizuje tego zadania.
- Nie odtwarzaj gry z pamięci, opisów marketingowych lub losowych obrazków z internetu.

## Analiza kodu i zasobów

- Zacznij od `GameMIDletBLOOD`, `n.class`, `s.class` i klasy `r.class` wskazanej w audycie. Ich dokładne role ustal z odwołań i kodu, nie wyłącznie z rozmiarów plików.
- Możesz użyć dekompilatora i narzędzi do analizy bytecode; dobierz je do starego formatu klas, sprawdź ich oficjalne źródła i zapisz wersje oraz polecenia. Błąd dekompilatora nie dowodzi braku mechaniki. W takim przypadku sprawdzaj bytecode i wywołania.
- Rozpoznaj loader RP, typy segmentów, tabele obrazów, metadane składania klatek, animacje, kolizje, mapy, skrypty, fonty, teksty i audio w zakresie, w jakim występują.
- Ekstraktor wyodrębnia segmenty i rozpoznane media. Nie rozwiązuje znaczenia wszystkich danych ani nie gwarantuje, że pojedynczy PNG jest gotową klatką.
- Dla każdego nierozpoznanego segmentu zapisz, skąd jest używany i co blokuje. Nie pomijaj go po cichu.
- Zweryfikuj kodowanie tekstów z loaderem. Zostaw ich surowe bajty. Podgląd tekstowy nie upoważnia do zastąpienia oryginalnego dekodowania.
- Zidentyfikuj rzeczywiście używane API J2ME i rozszerzenia producenta. Mapuj ich zachowanie do przeglądarki, a nie do pustych atrap.

## Port logiki

- Użyj JavaScript; nie zmieniaj języka projektu na TypeScript. Domyślnie Canvas 2D + ES modules + HTML/CSS, bez backendu.
- Oddziel symulację, renderowanie, wejście, dźwięk, zapis i dane poziomów. Renderer nie jest właścicielem stanu rozgrywki.
- Wyprowadź częstotliwość aktualizacji i znaczenie liczników z oryginału. `requestAnimationFrame` nie wyznacza prędkości gry.
- Odtwórz całkowitoliczbową/fixed-point semantykę tam, gdzie występuje. Sprawdź dzielenie liczb ujemnych, signed byte, przesunięcia, overflow, endian i mnożenia.
- Dopasuj fizykę, hitboxy, okna trafienia, animacje i cooldowny do źródła. Nie zastępuj ich wartościami typowymi dla innej platformówki.
- Przenieś wszystkie poziomy, menu, fabułę, przeciwników, bossów, przedmioty i zakończenia obecne w JAR. Nie wymyślaj ich liczby przed analizą.
- Odtwórz AI przeciwników: stany, warunki przejść, wzorce ataków, zasięgi, timery i losowość. Nie upraszczaj wszystkich do „idź w stronę gracza”. Nie potrzebujesz LLM w runtime.
- Zachowaj tłumaczenia obecne w źródle. Nie dodawaj nowej lokalizacji jako wymaganego zakresu tego portu.

## Grafika 4× i AI

- Wykonaj pełny pipeline z `docs/ASSET_PIPELINE.md`.
- 4× dotyczy obu wymiarów obrazu. Nie dotyczy fizyki, map, zasięgów walki ani czasu.
- Zachowaj źródłowe proporcje, sylwetki, pozy, liczbę i kolejność klatek, anchory, offsety, maski, odbicia, obroty i istotne kolory.
- Nie podawaj AI atlasu z wieloma niezależnymi klatkami jako jednego obrazu do dowolnego przerysowania. Najpierw rozpoznaj jego strukturę; izoluj elementy i prowadź spójne przetwarzanie całych sekwencji.
- Zachowaj oryginały, bazę nearest-neighbor 4× i wyniki AI w oddzielnych katalogach. Nie nadpisuj źródeł wynikami generacji.
- AI ma poprawiać istniejące obrazy. Nie ma wymyślać nowej protagonistki, wyposażenia, stylu, animacji ani tła tam, gdzie oryginał miał przezroczystość.
- Gdy nie masz narzędzia/modelu AI, zapisz `blocked-no-ai-tool` dla tego etapu i kontynuuj port z dostępnym wariantem. Nie nazywaj nearest-neighbor, filtra wygładzającego lub zwykłej interpolacji „AI”.
- Nie uruchamiaj płatnych zleceń ani nie wysyłaj zasobów do nowej zewnętrznej usługi bez dostępnego uprawnienia/budżetu. Wykorzystaj możliwości już dostępne w środowisku; ich brak nie wstrzymuje reszty pracy.

## Sterowanie i cykl życia

- Rozpoznaj oryginalne przyciski i softkeys, a następnie zmapuj je na nazwane akcje.
- Rekomendowany punkt wyjścia: strzałki/WASD do kierunków, Space do skoku, J do ataku, Enter do zatwierdzania, Esc do pauzy/powrotu. Dodaj klawisze pozostałych akcji tylko jeśli faktycznie występują. Zweryfikuj konflikty i odpowiedniki combosów.
- Rozróżniaj `pressed`, `held`, `released`. Nie opieraj tempa działania na systemowym key repeat.
- Przy `blur`, ukryciu karty i pauzie wyczyść trzymane przyciski, zatrzymaj/wycisz audio zgodnie ze stanem i nie nadrabiaj wielu sekund symulacji po powrocie.
- Obsłuż start dźwięku po interakcji użytkownika. Nie zakładaj, że plik MIDI można niezawodnie przekazać bezpośrednio do elementu audio; zastosuj udokumentowaną konwersję offline albo lokalny syntezator.
- Odtwórz semantykę RMS/zapisu, jeśli używa go ta gra. Zapis ma mieć wersję schematu, obsługę uszkodzonej zawartości i bezpieczny reset.

## Weryfikacja i raportowanie

- Prowadź `docs/PROGRESS.md`: aktualny etap, wykonane kroki, dowody, następny konkretny krok, blokady.
- Prowadź `docs/PARITY_MATRIX.md`: element oryginału → stan implementacji → dowód porównania → pozostała różnica. Nie traktuj ogólnego checkboxa „gameplay działa” jako dowodu.
- W `docs/ASSET_STATUS.md` rozliczaj kategorie i sekwencje: extracted, mapped, baseline-4x, ai-generated, reviewed, integrated, blocked. Ulepszenie dwóch logotypów nie oznacza ukończenia grafiki całej gry.
- Dodaj testy tam, gdzie wychwytują realne ryzyko: dekodery, semantyka arytmetyki, animacje, kolizje, przejścia AI, zapis. Samo sprawdzenie, czy funkcja zwraca wartość, nie wystarcza.
- Porównuj obraz i gameplay z uruchomioną wersją wejściową, najlepiej w powtarzalnych scenariuszach. Jeżeli nie udało się uruchomić oryginału, zaznacz, że zgodność nie została zweryfikowana dynamicznie.
- Sprawdź przeglądarki dostępne w środowisku i wymień je w raporcie. Nie deklaruj testów Safari, Firefox czy innych środowisk, których nie uruchomiono.
- Przetestuj zmianę rozmiaru okna, utratę fokusu, powrót z tła, restart, kontynuację i ukończenie pełnej gry.
- Nie publikuj/deployuj projektu do zewnętrznej usługi; dostarcz lokalnie uruchamialne pliki i instrukcję. Nie dodawaj telemetrii, kont ani backendu.

## Definition of Done

Port jest ukończony dopiero gdy:

- cała ustalona zawartość JAR jest przeniesiona i da się przejść grę od początku do zakończenia;
- logika działa w JavaScript i nie wymaga emulatora/JVM;
- grafika używana przez grę ma wariant 4×, a etap AI jest faktycznie wykonany, przejrzany i rozliczony; każdy uzasadniony wyjątek jest wskazany, a brak AI pozostaje nieukończonym wymaganiem;
- klatki, kolizje, sterowanie, timing, AI przeciwników, audio i zapis zostały zweryfikowane w odpowiednich scenariuszach;
- uruchomienie i build, jeśli istnieje, nie potrzebują generowania grafik ani zewnętrznych API;
- README zawiera działające polecenia, sterowanie, testy, różnice względem oryginału i znane ograniczenia;
- oryginały nadal zgadzają się z zapisanymi sumami kontrolnymi.
