# TNT Blog — template statico

- `index.html`: elenco degli articoli, con un articolo in evidenza.
- `style.css`: stile condiviso per homepage e articoli.
- `articoli/TEMPLATE-articolo.html`: modello da duplicare quando scrivi un nuovo articolo.
- `articoli/orientarsi-nel-territorio.html`: articolo dimostrativo completo.
- `assets/`: inserisci qui logo e immagini locali.

## Aggiungere un articolo
1. Duplica `articoli/TEMPLATE-articolo.html` e rinomina il file, per esempio `nuova-attivita.html`.
2. Modifica titolo, descrizione, categoria, data, sottotitolo, immagine e testo.
3. Aggiungi una scheda nella griglia di `index.html` e collegala al nuovo file.

## Pubblicare
Carica tutti i file nel repository GitHub, poi vai in **Settings → Pages** e scegli `Deploy from a branch`, branch `main`, cartella `/ (root)`. Configura il dominio personalizzato solo dopo aver verificato che il sito funzioni sull'indirizzo GitHub Pages.

Le immagini di esempio sono caricate da URL Unsplash e richiedono connessione Internet. Sostituiscile con foto dell'associazione per la versione definitiva. La homepage HTML non aggiorna automaticamente l'elenco: per pochi articoli è sufficiente aggiungere manualmente una scheda.
