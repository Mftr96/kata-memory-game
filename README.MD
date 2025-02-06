# kata-memory-game
Questa repo prevede la realizzazione di un memory game come consegna del Coding training, un appuntamento posto corso di Boolean per tenersi sempre allenati anche dopo il corso intensivo.

## Indice

1. [consegna](#consegna)
2. [considerazioni_pre-progetto](#considerazioni-pre-progetto)
3. [strumenti-aggiuntivi](#strumenti-aggiuntivi )
3. [esecuzione](#esecuzione-milestone)
5. [prossimamente-sul-piccolo-schermo](#roadmap)



## Consegna

<aside>
📚 esercizio di oggi: Arcade: Memory Game
nome repo: **kata-memory-game**

Il gioco Memory è un classico passatempo che mette alla prova la memoria visiva dei giocatori. L'obiettivo è trovare tutte le coppie di carte identiche facendo meno errori o nel minor tempo possibile.

Sviluppiamo interfaccia e logica di gioco usando solo HTML, CSS e JS.

**Regole del gioco:**

- le card di gioco sono mescolate in maniera casuale a ogni caricamento di pagina (ogni gioco in pratica è sempre diverso)
- a inizio gioco tutte le carte sono coperte
- clicca su una carta per scoprirla
- ogni volta che una coppia di carte viene scoperta, controlla se sono uguali:
- se lo sono, le carte restano scoperte
- se non lo sono, le carte tornano a nascondersi
- c’è un counter per contare gli errori commessi
- il gioco finisce quando tutte le carte sono state scoperte

Rimetti “in gioco” tutto quello che sai sulle basi di HTML, CSS e JS. 

Ti servirà!

Buon divertimento 👾

</aside>

 Suggerimenti

- Ci sono varie tecniche per implementare la logica di gioco; scegli quella che ritieni opportuna purché sia in grado di spiegarla :)
- Ragiona per stati e dati di gioco (ad es. le card potrebbero essere rappresentate da un array…)
- Non è necessario che il gioco sia responsive, limitiamoci alla versione desktop.

## considerazioni pre-progetto
Per la strutturazione del progetto prevedo come primo passaggio la realizzazione della struttura fissa in html: da foto posso immaginare un enorme contenitore che racchiude a sinistra la parte di gioco con le carte (che saranno spazializzate tramite flex) e a destra la parte con il titolo e il conteggio degli errori.
![foto](/assets/images/output.gif)

Ragionando in codice le regole del gioco avremo :
- il primo punto verrà effettuato caricando in modo dinamico le carte di gioco ad ogni ricarica della pagina per poterle mettere ogni volta in ordine casuale.
- per il secondo punto le carte dovranno avere solo l'immagine del retro della carta e svelare l'immagine solo al click(questo perchè sennò un utente può vedere le immagini che ci sono dietro alle carte con l'ispettore).
- il terzo punto prevede che le carte vengano scoperte al click della carta (on click o eventlistener('click',etc...))
- per il quarto punto devo chiedermi come controllare la coppia di carte appena scoperte: potrebbe essere utile avere una variabile che tenga salvate le carte cliccate per fare così poi il controllo
- per il quinto punto se il controllo fatto nell'array che contiene le carte cliccate non va a buon fine, le carte tornano ad essere coperte e viene incrementato il contatore degli errori.
- il sesto punto prevede una variabile che conti gli errori di gioco.
- il settimo punto verrà implementato ponendo come condizione che tutte le carte siano scoperte (probabilmente lo si controllerà mettendo una classe per definire lo stato della carta) per andare a concludere la partita.  



Voglio provare ad usare javascript plain per la parte di logica del gioco per non dovermi sentire dipendente dai framework.
Lascio Bootstrap come libreria per gestire in modo semplice la divisione degli spazi, Fontawesome per eventuale icone e Axios perchè ho il template di javascript plain (non si sa mai).

## Esecuzione milestone
Vado a realizzare un impalcatura di progetto delineando le parti principali: la parte delle carte e la parte con le info del gioco. 


## Roadmap
🔨:in corso d'opera
☑️:fatto
- impalcatura macrostruttura(div grande, contenitore carte, contenitore scritte di gioco) ☑️
- realizzazione dinamica carte (scrittura ciclo js) 🔨
spaziatura card ☑️
scrivere ciclo carte ☑️
scrivere array coppie di carte ☑️
- scrittura variabili contatore errori, variabile array carte per controllo 