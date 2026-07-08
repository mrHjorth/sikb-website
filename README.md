# sikb.dk – Sorø Idræts- & Kulturby

Hjemmeside for Sorø Idræts- & Kulturby. Statisk site uden build-step: ren HTML og CSS.

## Struktur

```
sikb-website/
├── index.html          Forside
├── vision.html         Visionen
├── udfordringen.html   Hvorfor nu? (behov og facts)
├── faciliteter.html    Faciliteter og visualiseringer
├── aktiviteter.html    Aktiviteter for alle målgrupper
├── stemmer.html        Citater og presse
├── om-os.html          Team, organisering, kontakt
├── css/styles.css      Alt design (fælles stylesheet)
└── img/                Billeder (tom endnu, se placeholders i HTML)
```

## Se sitet lokalt

Åbn `index.html` i en browser, eller kør en lokal server:

```bash
cd sikb-website
python3 -m http.server 8000
# åbn http://localhost:8000
```

## Kom på GitHub + gratis hosting (GitHub Pages)

```bash
cd sikb-website
git init
git add .
git commit -m "Første version af sikb.dk"
# Opret repo på github.com (fx sikb-website), derefter:
git remote add origin https://github.com/<brugernavn>/sikb-website.git
git push -u origin main
```

Aktivér derefter GitHub Pages: Repo → Settings → Pages → Source: `main` branch. Sitet ligger så på `https://<brugernavn>.github.io/sikb-website/`.

Domænet **sikb.dk** kobles på under Settings → Pages → Custom domain (kræver at domænet er registreret, fx hos Simply.com eller Punktum.dk, og at DNS peger på GitHub Pages).

## Før lancering (vigtigt!)

1. **Erstat alle citater**: Citaterne på stemmer.html og index.html er FIKTIVE pladsholdere. De skal erstattes med rigtige, godkendte citater fra DGI, DIF, Dansk Padel Forbund, Ældre Sagen m.fl.
2. **Fjern udkast-banneret**: Slet `<div class="draft-banner">...</div>` øverst i alle HTML-filer.
3. **Erstat billed-placeholders**: Alle `<div class="img-placeholder">` erstattes med rigtige billeder/visualiseringer (læg dem i `img/`).
4. **Nyhedsbrev**: Formularen er en attrap. Kobl den til fx Mailchimp eller EmailOctopus.
5. **Kontaktmail**: `kontakt@sikb.dk` skal oprettes, eller erstattes med den rigtige adresse.

## Videre arbejde med Claude Code

Repoet indeholder en `CLAUDE.md` med kontekst og retningslinjer, så Claude Code kender projektet og tone-of-voice. Åbn en terminal i mappen og kør `claude`.
