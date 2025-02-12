---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
#background: https://source.unsplash.com/collection/94734566/1920x1080
background: /media/intro01.jpg
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
materia: RETI 4
as: 2024/2025
version: '1.0.0'

---  

# SISTEMI & RETI

Gli algoritmi di routing

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# Routing Dinamico

Routing overview

- Al fine di realizzare il routing dinamico ci sono due principali algoriti
  1. Distance Vector (*RIP*, *IGRP*)
  2. Link State (*OSPF*, *IS-IS*)

---

# Distance Vector

Algoritmo

- Questo metodo di routing dinamico è basato sull' algoritmo di Bellman-Ford, segue i seguenti passi:
  1. All'inizio ogni router manda un pacchetto ***ECHO*** ai suoi router adiacenti in modo da calcolarne la distanza
  2. I router aggiornano la propia route table in base alle informazioni ottenute
  3. I router inviano ai propri router adiacenti la loro tabella di routing
  4. Si ripetono le operazioni 2 e 4 finchè si verificano modifiche alle tabelle di routing

<img src="/media/bell_ford.jpg" width="250" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# Distance Vector

Esempio

- In questo esempio verranno create le tabelle do routing del router A e D
- I cambiamenti alle routing tabels verranno evidenziati in blu

<img src="/media/graph.jpg" width="400" style="margin:auto;position:relative; left: 0px; top: 50px;">

---

# Distance Vector

Esempio

- Al primo passo A manda un pacchetto ***ECHO*** a B e C e genera la seguente tabella di routing

$$
\begin{array}{|c|c|c|c|c|}
\hline
 & A & B & C & D \\
\hline
A & 0 \, (A) & 10 \, (B) & 3 \, (C) & \infty \\
\hline
B & \infty & \infty & \infty & \infty \\
\hline
C & \infty & \infty & \infty & \infty \\
\hline
\end{array}
$$

- A può raggiungere B con costo 10 attraverso B
- A può raggiungere C con costo 3 attraverso C
- A non può raggiungere D

---

# Distance Vector

Esempio

- In modo analogo D manda un ***ECHO*** e B e C e genera la tabella di routing
$$
\begin{array}{|c|c|c|c|c|}
\hline
 & A & B & C & D \\
\hline
D & \infty & 1 \, (B) & 5 \, (C) & 0 \, (D)\\
\hline
C & \infty & \infty & \infty & \infty \\
\hline
B & \infty & \infty & \infty & \infty \\
\hline
\end{array}
$$
- D può raggiungere B con costo 1 attraverso B
- D può raggiungere C con costo 5 attraverso C
- D non può raggiungere A

---

# Distance Vector

Esempio

- Al secondo passo B e C condividono le loro tabelle di routing con A e D e viceversa

&nbsp;
&nbsp;

$$
\begin{array}{|c|c|c|c|c|}
& & A & & \\
\hline
 & A & B & C & D \\
\hline
A & 0 \, (A) & 10 \, (B) & 3 \, (C) & \infty \\
\hline
B & \textcolor{blue}{10 \, (A)} & \textcolor{blue}{0 \, (B)} & \infty & \textcolor{blue}{1 \, (D)} \\
\hline
C & \textcolor{blue}{3 \, (A)} & \infty & \textcolor{blue}{0 \, (C)} & \textcolor{blue}{5 \, (D)} \\
\hline
\end{array}
\hspace{50pt}
\begin{array}{|c|c|c|c|c|}
& & D & & \\
\hline
 & A & B & C & D \\
\hline
D & \infty & 1 \, (B) & 5 \, (C) & 0 \, (D)\\
\hline
C & \textcolor{blue}{3 \, (A)} & \infty & \textcolor{blue}{0 \, (C)} & \textcolor{blue}{5 \, (D)} \\
\hline
B & \textcolor{blue}{10 \, (A)} & \textcolor{blue}{0 \, (B)} & \infty & \textcolor{blue}{1 \, (D)} \\
\hline
\end{array}
$$

---

# Distance Vector

Esempio

- Al terzo passo A e D confrontano le distanze con quelle delle tabelle ottenute al passo precedente, in caso di percorso a peso minore aggiornano le loro rout table

$$
\begin{array}{|c|c|c|c|c|}
& & A & & \\
\hline
 & A & B & C & D \\
\hline
A & 0 \, (A) & 10 \, (B) & 3 \, (C) & \textcolor{blue}{8 \, (C)} \\
\hline
B & 10 \, (A) & 0 \, (B) & \infty & 1 \, (D) \\
\hline
C & 3 \, (A) & \infty 0 \, (C) & 5 \, (D) \\
\hline
\end{array}
\hspace{50pt}
\begin{array}{|c|c|c|c|c|}
& & D & & \\
\hline
 & A & B & C & D \\
\hline
D & \textcolor{blue}{8 \, (C)} & 1 \, (B) & 5 \, (C) & 0 \, (D)\\
\hline
C & 3 \, (A) & \infty & 0 \, (C) & 5 \, (D) \\
\hline
B & 10 \, (A) & 0 \, (B) & \infty & 1 \, (D) \\
\hline
\end{array}
$$

- A ora può raggiungere D attraverso C con costo 8
- D ora può raggiungere A attraverso C con costo 8
- Ovviamente anche B e C fanno questo passo

---

# Distance Vector

Esempio

- Al quarto passo C e B condividono le loro routing tables ad A e D e viceversa
$$
\begin{array}{|c|c|c|c|c|}
& & A & & \\
\hline
 & A & B & C & D \\
\hline
A & 0 \, (A) & 10 \, (B) & 3 \, (C) & 8 \, (C) \\
\hline
B & 10 \, (A) & 0 \, (B) & \textcolor{blue}{6 \, (D)} & 1 \, (D) \\
\hline
C & 3 \, (A) & \textcolor{blue}{6 \, (D)} & 0 \, (C) & 5 \, (D) \\
\hline
\end{array}
\hspace{50pt}
\begin{array}{|c|c|c|c|c|}
& & D & & \\
\hline
 & A & B & C & D \\
\hline
D & 8 \, (C) & 1 \, (B) & 5 \, (C) & 0 \, (D)\\
\hline
C & 3 \, (A) & \textcolor{blue}{6 \, (D)} & 0 \, (C) & 5 \, (D) \\
\hline
B & 10 \, (A) & 0 \, (B) & \textcolor{blue}{6 \, (D)} & 1 \, (D) \\
\hline
\end{array}
$$
- In questo caso:
  - C scopre di poter raggiungere B con costo 6 attraverso D
  - B scopre di poter raggiungere B con costo 6 attraverso D

---

# Distance Vector

Esempio

- Al quinto passo A e D confrontano le distanze con quelle delle tabelle ottenute al passo precedente, in caso di percorso a peso minore aggiornano le loro rout table

$$
\begin{array}{|c|c|c|c|c|}
& & A & & \\
\hline
 & A & B & C & D \\
\hline
A & 0 \, (A) & \textcolor{blue}{9 \, (C)} & 3 \, (C) & 8 \, (C) \\
\hline
B & 9 \, (D) & 0 \, (B) & 6 \, (D) & 1 \, (D) \\
\hline
C & 3 \, (A) & 6 \, (D) & 0 \, (C) & 5 \, (D) \\
\hline
\end{array}
\hspace{50pt}
\begin{array}{|c|c|c|c|c|}
& & D & & \\
\hline
 & A & B & C & D \\
\hline
D & 8 \, (C) & 1 \, (B) & 5 \, (C) & 0 \, (D)\\
\hline
C & 3 \, (A) & 6 \, (D) & 0 \, (C) & 5 \, (D) \\
\hline
B & 9 \, (D) & 0 \, (B) & 6 \, (D) & 1 \, (D) \\
\hline
\end{array}
$$

- A può ora raggiungere B con costo 9 attraverso C
- D non ha apportato modifiche

---

# Distance Vector

Esempio

- Al sesto passo C e B condividono le loro routing tables ad A e D e viceversa

$$
\begin{array}{|c|c|c|c|c|}
& & A & & \\
\hline
 & A & B & C & D \\
\hline
A & 0 \, (A) & 9 \, (C) & 3 \, (C) & 8 \, (C) \\
\hline
B & 9 \, (D) & 0 \, (B) & 6 \, (D) & 1 \, (D) \\
\hline
C & 3 \, (A) & 6 \, (D) & 0 \, (C) & 5 \, (D) \\
\hline
\end{array}
\hspace{50pt}
\begin{array}{|c|c|c|c|c|}
& & D & & \\
\hline
 & A & B & C & D \\
\hline
D & 8 \, (C) & 1 \, (B) & 5 \, (C) & 0 \, (D)\\
\hline
C & 3 \, (A) & 6 \, (D) & 0 \, (C) & 5 \, (D) \\
\hline
B & 9 \, (D) & 0 \, (B) & 6 \, (D) & 1 \, (D) \\
\hline
\end{array}
$$
- B non ha avuto cambiamenti
- C non ha avuto cambiamenti
---

# Distance Vector

Esempio

- Al settimo passo A e D confrontano le distanze con quelle delle tabelle ottenute al passo precedente, in caso di percorso a peso minore aggiornano le loro rout table

$$
\begin{array}{|c|c|c|c|c|}
& & A & & \\
\hline
 & A & B & C & D \\
\hline
A & 0 \, (A) & 9 \, (C) & 3 \, (C) & 8 \, (C) \\
\hline
B & 9 \, (D) & 0 \, (B) & 6 \, (D) & 1 \, (D) \\
\hline
C & 3 \, (A) & 6 \, (D) & 0 \, (C) & 5 \, (D) \\
\hline
\end{array}
\hspace{50pt}
\begin{array}{|c|c|c|c|c|}
& & D & & \\
\hline
 & A & B & C & D \\
\hline
D & 8 \, (C) & 1 \, (B) & 5 \, (C) & 0 \, (D)\\
\hline
C & 3 \, (A) & 6 \, (D) & 0 \, (C) & 5 \, (D) \\
\hline
B & 9 \, (D) & 0 \, (B) & 6 \, (D) & 1 \, (D) \\
\hline
\end{array}
$$
- Dato che non ci sono state modifice l'algoritmo è terminato

---

# Distance Vector

Svantaggi

- Il Distance Vector presenta quattro problemi principali:
  1. **Count to infinity**: problematica che avviene quando il costo per raggiungere un destinazione viene progressivamente incrementato
  2. **Routing Loop**: problematica presente quando un pacchetto viene inotrato su un ciclo che gli impedice di raggiungere la sua destinazione, risolvibile implementato un ***Time To Live*** (**TTL**) sui pacchetti, dopo un certo numero di salti vengono droppati se non sono arrivati a destinazione 
  3. Necessita di inviare ***ECHO*** ai router vicini ad intervalli regolari anche dopo aver costruito la tabella di routing
  4. Lunghi tempi di conergenza
- Questi problemi derivano dalla non conoscenza della topologia di rete

---

# Distance Vector

Modifiche

- Per mitigare i problemi del Distance Vector vengono implementate le seguenti modifice:
  - **Split Horizon**: previene un loop tra due nodi adiacenti. Se un router riceve informazioni su una destinazione da un router adiacente non può spedire indietro informazioni sulla stessa destinazione
  - **Poison Reverse**: Aggiunta allo Split Horizon. Al posto di inpedire il reinvio di informazioni gli attribuisce un costo infinito rendendole irraggiungibili
  - **Route Poisoning**: Blocca le route che incrementano di costo supponendo la presenza di un loop
  - **Hold Down**: limita il count to infinity. Quando un link è rimosso dalla routing table il router rifiuta aggiornamenti su di esso per un periodo di tempo
  - **Triggered Updates**: Non invia aggiornamenti a intervalli regolari, ma quando si verifica un cambiamento della rete

---

# Link State

Algoritmo

- L'algoritmo Link State permette di superare le limitaziomi del Distance Vector sfruttando la completa conoscenza della topologia di rete
- Per conoscere la topologia della rete ogni router in via un pacchetto ***LSP*** (**L**ink **S**tate **P**acket) in ***Flooding***, ovvero viene inoltrato su tutte le linee tranne quella da cui è arrivato
- Grazie a questi pacchetti ogni router riescie a costruire un grafo che rappresenta la topologia di rete
- Ogni router dopo aver creato il grafo applica l'algoritmo di Dijkstra sul grafo e ottiene la tabella di routing completa

<img src="/media/dijkstra.jpg" width="150" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# Link State

Esempio

- In questo esempio si genererà la tabella di routing del router A
- L'algoritmo di Dijkstra lavora con una coda a priorità, in questo esempio si utilizzerà l'ordine alfabetico
- I cambiamenti verranno marchiati in blue

<img src="/media/graph.jpg" width="400" style="margin:auto;position:relative; left: 0px; top: 50px;">

---

# Link State

Esempio

- Allo stato iniziale tutti i nodi sono irraggiungibili tranne la sorgente (***A***)

$$
\begin{array}{|c|c|c|c|}
\hline
A & B & C & D \\
\hline
0 \, (A) & \infty & \infty & \infty \\
\hline
\end{array}
$$

- Viene considerato il collegamento A-B, dato che il suo peso (*10*) è minore di quello in tabella ($\infty$) quest'ultimo viene aggiornano

$$
\begin{array}{|c|c|c|c|}
\hline
A & B & C & D \\
\hline
0 \, (A) & \textcolor{blue}{10 \, (B)} & \infty & \infty \\
\hline
\end{array}
$$

---

# Link State

Esempio

- Viene considerato il collegamento A-C, dato che il suo peso (*3*) è minore di quello in tabella ($\infty$) quest'ultimo viene aggiornano

$$
\begin{array}{|c|c|c|c|}
\hline
A & B & C & D \\
\hline
0 \, (A) & 10 \, (B) & \textcolor{blue}{3 \, (C)} & \infty \\
\hline
\end{array}
$$

- Viene considerato il collegamento C-D, il suo peso sommato a quello per raggiungere C (*3 + 5 = 8*) è inferiore a quello registrato in tabella ($\infty$) per raggiungere D, quindi quest'ultimo viene aggiornato

$$
\begin{array}{|c|c|c|c|}
\hline
A & B & C & D \\
\hline
0 \, (A) & 10 \, (B) & 3 \, (C) & \textcolor{blue}{8 \, (C)} \\
\hline
\end{array}
$$

---

# Link State

Esempio

- Infine viene considerato il collegamento D-B, il suo peso sommato al peso necessario per arrivare a C (*8+1=9*) è inferiore a quello registrato in tabella (*10*), quindi quest'ultimo viene aggiornato

$$
\begin{array}{|c|c|c|c|}
\hline
A & B & C & D \\
\hline
0 \, (A) & \textcolor{blue}{9 \, (C)} & 3 \, (B) & 8 \, (C) \\
\hline
\end{array}
$$

- L'algoritmo di Dijkstra è terminato, il router ora dispone della tabella do routing corretta
- É importatne osservare che tutte le operazini sulla tabella sono interne al router e non richiedono mandare o ricevere informazioni sulla rete

---

# Algoritmi di Routing

Confronto

<img src="/media/diff.jpg" width="700" style="margin:auto;position:relative; left: 0px; top: 0px;">
