# Migrazione PocketBase (da fare a mano sull'istanza sanabel.pockethost.io)

Il sito funziona anche **prima** della migrazione: finché le collection non esistono mostra i
testi predefiniti (in `webapp/src/lib/content/defaults.ts`) e il modulo Contatti mostra un errore
con l'indirizzo email da usare in alternativa.

## 1. Importare le due nuove collection

Dashboard → **Settings → Import collections**:

1. incolla il contenuto di [`sanabel_collections.json`](./sanabel_collections.json) nel riquadro;
2. **attiva l'interruttore "Merge with the existing collections"** ⚠️ — senza questo PocketBase
   proporrebbe di eliminare tutte le altre collection (`users`, `sanabel_posts`, `sanabel_projects`…)
   con i loro dati;
3. **Review** → controlla che compaiano solo le due collection nuove (nessuna voce "Deleted") →
   **Confirm and import**. Se appare una finestra "Do you really want to delete…", rispondi **No**.

| Collection          | A cosa serve | Regole |
|---------------------|--------------|--------|
| `sanabel_content`   | Singleton (un solo record) con tutti i testi e le foto modificabili da `/admin/contenuti`. Il record viene creato dal pannello al primo salvataggio. | list/view: pubblico · create/update: utenti loggati · delete: solo superuser |
| `sanabel_messages`  | Messaggi inviati dal modulo di `/contatti`, si leggono in `/admin/messaggi`. | create: pubblico (non può impostare `read`) · list/view/update/delete: utenti loggati |

Nessun invio email: i messaggi restano solo nella collection.

## 2. Aggiungere il campo `date` a `sanabel_posts`

Collection `sanabel_posts` → **+ New field** → tipo **Date**, nome `date`, non obbligatorio → Save.

Serve per mostrare la data reale dell'evento/articolo (oggi tutti gli articoli risultano
"14 settembre 2026" perché è la data in cui sono stati caricati). Poi, da `/admin/blog`, apri
ogni articolo e compila "Data dell'evento / articolo". Se il campo è vuoto si usa la data di creazione.

## 3. (Consigliato) Anteprime delle immagini più leggere

Nei campi `image` di `sanabel_posts` e `sanabel_projects` → opzioni del campo → **Thumb sizes**:
aggiungi `800x0` e `600x0`. Il sito le usa già; senza questa impostazione scarica le immagini originali.

## 4. (Consigliato) Limite anti-spam sul modulo contatti

**Settings → Rate limits** → abilita e aggiungi una regola
`sanabel_messages:create` · max `5` richieste · intervallo `60` secondi.
