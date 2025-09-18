# x Sasa

--
controlla che hai git `git --version`
altrimenti:
Installati git: https://git-scm.com/downloads/mac
controlla che hai node `node --version`
altrimenti Installati node: https://nodejs.org/en/download

--


installa bun: https://bun.com/docs/installation

--

clona il repo:

```
git clone https://github.com/sanabel-per-Gaza/sanabel.git
```
--

entra nella cartella del progetto:

```
cd sanabel
```

avvia pocketbase:

```
./pocketbase serve
```

apri un altro terminale, entra nella cartella del frontend:

```
cd webapp
```

installa le dipendenze:

```
bun install
```


avvia il frontend:

```
bun dev
```
apri il browser a questo indirizzo: http://localhost:5173
dovresti vedere la homepage

per accedere al pannello di amministrazione di pocketbase apri il browser a questo indirizzo: http://localhost:8090/_/


