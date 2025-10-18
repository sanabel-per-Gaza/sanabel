# Sanabel - Spighe di solidarietà per Gaza

Questo è il repository per il sito web di Sanabel, un'iniziativa di solidarietà e scambio con Gaza.

> Sanabel non è un aiuto che parte da qui per arrivare là: è uno scambio profondo, un cammino comune che unisce le nostre esperienze, competenze e desideri di giustizia. Ci accompagniamo a vicenda, ogni giorno, come spighe che si piegano insieme al vento senza spezzarsi.

## 🚀 Per gli sviluppatori

Questa sezione fornisce le istruzioni per configurare e avviare il progetto in un ambiente di sviluppo locale.

### 📋 Prerequisiti

Assicurati di avere installato i seguenti strumenti sulla tua macchina:

*   [**Go**](https://go.dev/doc/install) (versione 1.20 o successiva)
*   [**Node.js**](https://nodejs.org/en) (versione 18 o successiva)

### ⚙️ Installazione

1.  **Clona il repository:**
    ```bash
    git clone https://github.com/sanabel-per-Gaza/sanabel.git
    cd sanabel
    ```

2.  **Installa le dipendenze del frontend:**
    Il frontend è costruito con SvelteKit. Naviga nella directory `webapp` e installa le dipendenze necessarie.
    ```bash
    cd webapp
    npm install
    ```

### ▶️ Avvio dei server di sviluppo

Per lavorare sul progetto, è necessario avviare sia il backend (PocketBase) che il frontend (SvelteKit).

Puoi utilizzare lo script `start.sh` per avviare entrambi i server con un unico comando dalla root del progetto.

```bash
./start.sh
```

Oppure, puoi avviarli manualmente in due terminali separati:

1.  **Avvia il server PocketBase:**
    In un terminale, naviga nella directory `admin` e avvia il server Go. Questo avvierà il backend sulla porta 8090.
    ```bash
    cd admin
    go run main.go serve
    ```
    L'interfaccia di amministrazione di PocketBase sarà accessibile all'indirizzo [http://127.0.0.1:8090/_/](http://127.0.0.1:8090/_/).

2.  **Avvia il server SvelteKit:**
    In un altro terminale, naviga nella directory `webapp` e avvia il server di sviluppo di SvelteKit.
    ```bash
    cd webapp
    npm run dev
    ```
    Il sito web sarà visibile all'indirizzo [http://localhost:5173](http://localhost:5173).

## Project Structure

*   `/admin`: Contiene il codice sorgente Go per l'applicazione personalizzata di PocketBase.
*   `/pocketbase`: Eseguibile di PocketBase.
*   `/pb_data`: Dati di PocketBase (database SQLite, file, etc.).
*   `/pb_migrations`: Script di migrazione per lo schema del database di PocketBase.
*   `/webapp`: Il frontend SvelteKit.
    *   `/webapp/src/lib`: Componenti e librerie Svelte.
    *   `/webapp/src/routes`: Pagine del sito.
*   `start.sh`: Script per avviare l'ambiente di sviluppo.

---

Grazie per il tuo contributo! ❤️
