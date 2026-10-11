# TNT Blog — Jekyll + GitHub Pages

## File principali
- `index.md`: elenco automatico degli articoli.
- `_posts/`: un file Markdown per ogni articolo.
- `_layouts/`: layout condivisi per sito e articoli.
- `style.css`: grafica comune.
- `_config.yml`: configurazione Jekyll.

## Aggiungere un articolo
Crea un file in `_posts/` con nome `AAAA-MM-GG-titolo-breve.md`, copia il front matter dell'articolo di esempio e scrivi il contenuto in Markdown. La homepage raccoglie automaticamente i file pubblicati in `_posts/`.

## Pubblicare
Carica tutti i file nella root del repository. In Settings → Pages, seleziona `Deploy from a branch`, branch `main`, cartella `/ (root)`. GitHub Pages usa Jekyll per generare il sito.

Nota: se usi un repository di progetto, imposta correttamente `baseurl` in `_config.yml` (ad esempio `/nome-repository`). Per il sito finale con dominio personalizzato, `baseurl: ""` è appropriato.
