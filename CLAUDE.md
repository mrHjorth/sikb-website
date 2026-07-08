# CLAUDE.md – sikb.dk

Kontekst for arbejde på hjemmesiden for Sorø Idræts- & Kulturby.

## Om projektet

Sorø Idræts- & Kulturby (SIKB) er et foreningsdrevet non-profit halprojekt i Dyhrs Park, Sorø, startet af frivillige i LBI i samarbejde med Sorø Kommune. Projektet omfatter:

- Fase 1: Sportshal, 1.551 m² (5 padelbaner, lounge 240 m², foreningsfitness)
- Fase 2: Multihal, 980 m² (op til håndboldbanestørrelse)
- Fase 3: Klub-/kulturhus, 400 m² (café 189 m², mødelokale, omklædning)

Nøglefacts der må bruges: Frederiksberg bydel står for ca. 80 % af kommunens befolkningstilvækst; 63 % voksne / 86 % børn er idrætsaktive; Sorø ligger nr. 89 af 93 i DIF's kommuneanalyse.

## Tone og indhold

- Dansk, varmt og visionsdrevet. Målgrupper: fonde, kommune/politikere og borgere.
- IKKE budgetdrevet: ingen anlægspriser, driftsbudgetter eller finansieringsdetaljer på sitet.
- Ingen pay & play-omtale. Narrativet er foreningsdrevet og non-profit.
- Politisk proces og forhandlingsdetaljer holdes ude.
- Brug aldrig tankestreger (em-dash) i tekster. Skriv naturligt med kommaer og punktummer.

## Teknik

- Ren statisk HTML + CSS. Intet build-step, ingen frameworks.
- Alt design ligger i `css/styles.css`. Genbrug eksisterende klasser frem for at opfinde nye.
- Header, nav og footer er duplikeret i alle 7 HTML-filer. Ændres de, skal ALLE filer opdateres konsistent.
- Aktiv side markeres med `class="active"` på nav-linket.
- Billeder lægges i `img/` og erstatter `<div class="img-placeholder">`-elementer.

## Vigtige regler

- Citaterne fra DGI, DIF, Dansk Padel Forbund, Ældre Sagen m.fl. er FIKTIVE pladsholdere, og navnene "Peter Hansen" (DGI) og "Gudrun Pedersen" (Ældre Sagen) er OPDIGTEDE. Alt skal erstattes med rigtige, godkendte citater og navne før lancering. Sitet må ikke offentliggøres med de fiktive citater/navne.
- Udkast-banneret (`.draft-banner`) må først fjernes, når citater og billeder er på plads.
- Kildemateriale (tegninger, referater, præsentationer) ligger i mappen over dette repo.
