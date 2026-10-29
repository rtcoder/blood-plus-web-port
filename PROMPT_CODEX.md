Masz przygotowaną paczkę projektu Blood+ z oryginalnym JAR/JAD, analizą i odzyskanymi zasobami. Pracuj w katalogu, w którym leżą README.md i AGENTS.md.

Przeczytaj AGENTS.md, README.md, reference/ORIGINAL_AUDIT.md, docs/PORTING_PLAN.md i docs/ASSET_PIPELINE.md. Następnie rozpocznij realizację pełnego portu gry do HTML, CSS i JavaScript. Wykonuj pracę samodzielnie; nie zatrzymuj się na planie, szkielecie ani pierwszym grywalnym ekranie.

Źródłem prawdy jest original/blood-plus-320x240.jar. Zachowaj go i JAD bez zmian. Sprawdź sumy kontrolne i uruchom tools/extract_resources.py zgodnie z README. W paczce są już 73 oryginalne PNG, 5 MIDI oraz wydzielone dane RP; ich ekstrakcja nie oznacza jeszcze rozpoznania klatek, map i animacji.

Najpierw ustal z kodu i uruchomionej gry rzeczywistą rozdzielczość logiczną, timing, sterowanie, loader zasobów, budowę animacji i poziomów. Nazwa wariantu 320×240 sugeruje układ poziomy — zweryfikuj to, nie zamieniaj automatycznie na 240×320. Następnie odtwórz całą zawartość i mechanikę w JavaScript. Emulator może służyć do porównań, ale nie może być finalnym runtime.

Grafiki przygotuj w rozdzielczości dokładnie 4× w obu wymiarach i popraw za pomocą AI, zachowując postacie, pozy, styl, przezroczystość, anchory i spójność wszystkich klatek. Rozdziel oryginały, bazę nearest-neighbor 4× i finalne wyniki AI. Nie skaluj fizyki ani współrzędnych świata. Zwykłego powiększenia nie opisuj jako obróbki AI. Jeśli narzędzie AI jest niedostępne, oznacz ten etap jako zablokowany i kontynuuj pozostałe prace.

Odtwórz również AI przeciwników i bossów z oryginału: stany, zasięgi, timery i wzorce ataków. Nie dodawaj usług LLM do działającej gry.

Zacznij od krótkiego stanu faktycznego i konkretnych kroków, potem od razu przejdź do analizy i implementacji. Prowadź PROGRESS.md, PARITY_MATRIX.md i ASSET_STATUS.md w docs/. Weryfikuj zgodność z oryginałem i zapisuj dowody. Pierwszy grywalny fragment jest etapem pośrednim; celem pozostaje pełna gra z grafiką 4×/AI. Na końcu dostarcz polecenie uruchomienia, sterowanie, wyniki testów i uczciwą listę różnic lub braków.
