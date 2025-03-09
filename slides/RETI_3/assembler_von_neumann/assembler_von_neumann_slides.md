---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /cover.jpg
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: "16_/9"
routerMode: 'hash'
version: "1.1.0"
materia: RETI 3
as: 2024/2025
---  

# SISTEMI E RETI

L'Assembler di Von Neumann

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

Flowgorithm

- Per utilizzare Flowgorithm su Linux seguire i seguenti passi:

<br>

1. scaricare il seguente file docker-compose.yml

```bash

wget https://gist.githubusercontent.com/profmancusoa/d6158b27255bd5af586cddefa6aadfad/raw/c703b9f564b046facd358acfae324212e5ac5ec7/docker-compose.yml
```

<br>

2. xhost +

3. docker compose up



--- #slide 26

![/media/Diapositiva26.jpg](/media/Diapositiva26.jpg)

--- #slide 27

![/media/Diapositiva27.jpg](/media/Diapositiva27.jpg)

--- #slide 28

![/media/Diapositiva28.jpg](/media/Diapositiva28.jpg)

--- #slide 29

![/media/Diapositiva29.jpg](/media/Diapositiva29.jpg)

--- #slide 30

![/media/Diapositiva30.jpg](/media/Diapositiva30.jpg)

--- #slide 31

![/media/Diapositiva31.jpg](/media/Diapositiva31.jpg)

--- #slide 32

![/media/Diapositiva32.jpg](/media/Diapositiva32.jpg)

--- #slide 33

![/media/Diapositiva33.jpg](/media/Diapositiva33.jpg)

--- #slide 34

![/media/Diapositiva34.jpg](/media/Diapositiva34.jpg)

--- #slide 35

![/media/Diapositiva35.jpg](/media/Diapositiva35.jpg)

--- #slide 36

![/media/Diapositiva36.jpg](/media/Diapositiva36.jpg)

--- #slide 37

![/media/Diapositiva37.jpg](/media/Diapositiva37.jpg)

--- #slide 38

![/media/Diapositiva38.jpg](/media/Diapositiva38.jpg)

--- #slide 39

![/media/Diapositiva39.jpg](/media/Diapositiva39.jpg)

--- #slide 40

![/media/Diapositiva40.jpg](/media/Diapositiva40.jpg)

--- #slide 41

![/media/Diapositiva41.jpg](/media/Diapositiva41.jpg)

--- #slide 42

![/media/Diapositiva42.jpg](/media/Diapositiva42.jpg)

--- #slide 43

![/media/Diapositiva43.jpg](/media/Diapositiva43.jpg)

--- #slide 44

![/media/Diapositiva44.jpg](/media/Diapositiva44.jpg)

--- #slide 45

![/media/Diapositiva45.jpg](/media/Diapositiva45.jpg)

--- #slide 46

![/media/Diapositiva46.jpg](/media/Diapositiva46.jpg)

--- #slide 47

![/media/Diapositiva47.jpg](/media/Diapositiva47.jpg)

--- #slide 48

![/media/Diapositiva48.jpg](/media/Diapositiva48.jpg)

--- #slide 62

![/media/Diapositiva62.jpg](/media/Diapositiva62.jpg)


--- 

Costrutto Condizionale

<img src="/media/if.png" style="width:400px;margin:auto;">

--- 

Costrutto Condizionale

<img src="/media/if.png" style="width:400px;">

<div style="width:400px; position:relative;top:-450px;right:-450px;">
<img src="/media/if01.png" style="width:300px;">
</div>



--- #slide 49

![/media/Diapositiva49.jpg](/media/Diapositiva49.jpg)

--- #slide 50

![/media/Diapositiva50.jpg](/media/Diapositiva50.jpg)

--- #slide 51

![/media/Diapositiva51.jpg](/media/Diapositiva51.jpg)

--- #slide 52

![/media/Diapositiva52.jpg](/media/Diapositiva52.jpg)

--- #slide 53

![/media/Diapositiva53.jpg](/media/Diapositiva53.jpg)

--- #slide 54

![/media/Diapositiva54.jpg](/media/Diapositiva54.jpg)

--- #slide 55

![/media/Diapositiva55.jpg](/media/Diapositiva55.jpg)

--- #slide 56

![/media/Diapositiva56.jpg](/media/Diapositiva56.jpg)

--- #slide 57

![/media/Diapositiva57.jpg](/media/Diapositiva57.jpg)

--- #slide 58

![/media/Diapositiva58.jpg](/media/Diapositiva58.jpg)

--- #slide 59

![/media/Diapositiva59.jpg](/media/Diapositiva59.jpg)

--- #slide 60

![/media/Diapositiva60.jpg](/media/Diapositiva60.jpg)

--- #slide 61

![/media/Diapositiva61.jpg](/media/Diapositiva61.jpg)

---

ESERCIZIO ASSEMBLER 01


- Realizzare un programma, in assembler di von Neumann, che dati 3 numeri interi (A,B,C) e memorizzati, rispettivamente, nelle locazioni RAM all'indirizzo 100,101 e 102, ne esegua la somma e la memorizzi nella locazione di memoria 103.

- Realizzare il flowchart che descrive l'algoritmo che risolve il seguente problema e la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es01.fprg
- |cognome|_assembler_es01.vnsp


---

ESERCIZIO ASSEMBLER 02

- Realizzare un programma, in assembler di von Neumann, che dati 3 numeri interi (A,B,C) memorizzati, rispettivamente, nelle locazioni RAM all'indirizzo 100,101 e 102, memorizzi nella locazione di memoria 103 il risultato della seguente operazione: 2*A + 3*B - C

- Realizzare il flowchart che descrive l'algoritmo che risolve il seguente problema e la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es02.fprg
- |cognome|_assembler_es02.vnsp


---

ESERCIZIO ASSEMBLER 03

- Realizzare un programma, in assembler di von Neumann, che date le lunghezze dei cateti di un triangolo rettanogolo, memorizzati in RAM alle locazione 100 e 101, calcoli il valore dell'area del quadrato costruito sull'ipotenusa. Tale valore dovrà essere memorizzato nella RAM alla locazione 103

- Realizzare il flowchart che descrive l'algoritmo che risolve il seguente problema e la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es03.fprg
- |cognome|_assembler_es03.vnsp


---

ESERCIZIO ASSEMBLER 04

- Realizzare un programma, in assembler di von Neumann, che dati due numeri A e B (RAM[100] e RAM[101]), verifichi se i due numeri sono uguali.
- In caso affermativo dovrà calcolare il prodotto dei due numeri. 
- In caso negativo dovrà calcolare la somma dei due numeri.
- Il risultato sarà memorizzato nella cella RAM[102]

- Realizzare il flowchart che descrive l'algoritmo di risoluzione la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es04.fprg
- |cognome|_assembler_es04.vnsp


---

Il Ciclo For

<img src="/media/for.jpg" style="width:350px;">

<img src="/media/for1.png" style="width:350px;position:relative; top:-500px;right:-450px;">

---

Esempio 3

Scrivere un programma che calcoli la somma dei primi N numeri, con N nella cella di indirizzo 100 e memorizzi il risultato in 101


---

Esempio 3

<img src="/media/es3.png" style="width:300px;position:relative; top:-20px;right:-50px;">

<img src="/media/es3a.png" style="width:400px;position:relative; top:-520px;right:-450px;">




--- #slide 65

![/media/Diapositiva65.jpg](/media/Diapositiva65.jpg)

--- #slide 66

![/media/Diapositiva66.jpg](/media/Diapositiva66.jpg)

--- #slide 67

![/media/Diapositiva67.jpg](/media/Diapositiva67.jpg)

--- #slide 68

![/media/Diapositiva68.jpg](/media/Diapositiva68.jpg)

--- #slide 69

![/media/Diapositiva69.jpg](/media/Diapositiva69.jpg)

--- #slide 70

![/media/Diapositiva70.jpg](/media/Diapositiva70.jpg)

--- #slide 71

![/media/Diapositiva71.jpg](/media/Diapositiva71.jpg)

--- #slide 72

![/media/Diapositiva72.jpg](/media/Diapositiva72.jpg)

--- #slide 73

![/media/Diapositiva73.jpg](/media/Diapositiva73.jpg)

--- #slide 74

![/media/Diapositiva74.jpg](/media/Diapositiva74.jpg)

--- #slide 75

![/media/Diapositiva75.jpg](/media/Diapositiva75.jpg)

--- #slide 76

![/media/Diapositiva76.jpg](/media/Diapositiva76.jpg)

--- #slide 77

![/media/Diapositiva77.jpg](/media/Diapositiva77.jpg)

--- #slide 78

![/media/Diapositiva78.jpg](/media/Diapositiva78.jpg)



---

ESERCIZIO ASSEMBLER 05

- Realizzare un programma, in assembler di von Neumann, che dati un numero N (RAM[100]), scriva i valori da 1 a N nella locazione di memoria RAM[101], realizzando così un'iterazione definita (o comunemente conosciuta come ciclo for).
- Realizzare il flowchart che descrive l'algoritmo di risoluzione la codifica in assembler di von Neumann.


<br>

Consegnare i seguenti file:
- |cognome|_assembler_es05.fprg
- |cognome|_assembler_es05.vnsp


---

ESERCIZIO ASSEMBLER 06

- Realizzare un programma, in assembler di von Neumann, che dati un numero A (RAM[100]), determini la somma dei numeri da 1 a A inclusi.
- Il risultato sarà memorizzato nella cella RAM[101]

- Realizzare il flowchart che descrive l'algoritmo di risoluzione la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es06.pdf
- |cognome|_assembler_es06.vnsp


---

ESERCIZIO ASSEMBLER 07

- Realizzare un programma, in assembler di von Neumann, che dati due numeri A e B (RAM[100] e RAM[101]) maggiori di zero,determini il prodotto A * B utilizzando solo somme (l'operazione di moltiplicazione MUL non è ammessa).
- Il risultato sarà memorizzato nella cella RAM[102]

- Realizzare il flowchart che descrive l'algoritmo di risoluzione la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es07.pdf
- |cognome|_assembler_es07.vnsp




---

ESERCIZIO ASSEMBLER 08

- Realizzare un programma, in assembler di von Neumann, che converta la temperatura espressa in °C specificata nella locazione di memoria di indirizzo 100 in una temperatura espressa in °F nella locazione di memoria di indirizzo 101.

- (per convertire °C in °F occorre moltiplicare per 9, dividere per 5 e sommare 32; esempio:

100 °C = 100 × 9 : 5 + 32 = 900 : 5 + 32 = = 180 + 32 = 212°F).


- Realizzare il flowchart che descrive l'algoritmo di risoluzione la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es08.pdf
- |cognome|_assembler_es08.vnsp



---

ESERCIZIO ASSEMBLER 09

- Realizzare un programma, in assembler di von Neumann, che converta la temperatura espressa in °F specificata nella locazione di memoria di indirizzo 100 in una temperatura espressa in °C nella locazione di memoria di indirizzo 101.


- Realizzare il flowchart che descrive l'algoritmo di risoluzione la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es09.fprg
- |cognome|_assembler_es09.vnsp


---

ESERCIZIO ASSEMBLER 10

- Realizzare un programma, in assembler di von Neumann che calcoli il fattoriale di un numero N inizialmente contenuto nella locazione di memoria di indirizzo 100.
- Il risultato dovrà essere memorizzando nella locazione di memoria di indirizzo 101.

- Si ricorda la formula del fattoriale: 

N! = N * (N-1) * (N-2) * ..... * 1

quindi: 5! = 120 -- 4!= 24

- Realizzare il flowchart che descrive l'algoritmo di risoluzione la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es10.fprg
- |cognome|_assembler_es10.vnsp




---

ESERCIZIO ASSEMBLER 11

- Realizzare un programma, in assembler di von Neumann che calcoli  la potenza  X^Y  inizialmente contenuti rispettivamente nelle locazioni di memoria di indirizzi 100 e 101.
- Il risultato dovrà essere memorizzantonella locazione di indirizzo 102.

- Realizzare il flowchart che descrive l'algoritmo di risoluzione la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es11.fprg
- |cognome|_assembler_es11.vnsp




---

ESERCIZIO ASSEMBLER 12

- Realizzare un programma, in assembler di von Neumann che verifichi se un numero N inizialmente contenuto nella locazione di memoria 100 è un multiplo di 11.
- In caso affermativo dovrà inserire il valore 1 («vero») nella locazione di memoria di indirizzo 101, in caso negativo dovrà inserirvi il valore 0 («falso»).

- Realizzare il flowchart che descrive l'algoritmo di risoluzione la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es12.fprg
- |cognome|_assembler_es12.vnsp




---

ESERCIZIO ASSEMBLER 13

- Realizzare un programma, in assembler di von Neumann che verifichi se un numero N  inizialmente contenuto nella locazione di memoria 100 sia divisibile per uno dei seguenti numeri: 2, 3, 5 o 7
- In caso affermativo dovrà inserire il valore 1 («vero») nella locazione di memoria di indirizzo 101, in caso negativo dovrà inserirvi il valore 0 («falso»).

- Realizzare il flowchart che descrive l'algoritmo di risoluzione la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es13.fprg
- |cognome|_assembler_es13.vnsp



---

ESERCIZIO ASSEMBLER 14

- Realizzare un programma, in assembler di von Neumann che verifichi se un numero N inizialmente contenuto nella locazione di memoria 100 è o meno primo.
- In caso affermativo dovrà inserire il valore 1 («vero») nella locazione di memoria di indirizzo 101, in caso negativo dovrà inserirvi il valore 0 («falso»).

- Realizzare il flowchart che descrive l'algoritmo di risoluzione la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es14.fprg
- |cognome|_assembler_es14.vnsp




---

ESERCIZIO ASSEMBLER 15

- Realizzare un programma, in assembler di von Neumann che verifichi se un numero  N inizialmente contenuto nella locazione di memoria 100 è o meno una potenza di 2.
- In caso affermativo dovrà inserire il valore 1 («vero») nella locazione di memoria di indirizzo 101, in caso negativo dovrà inserirvi il valore 0 («falso»)


- Realizzare il flowchart che descrive l'algoritmo di risoluzione la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es15.fprg
- |cognome|_assembler_es15.vnsp




---

ESERCIZIO ASSEMBLER 16

- Realizzare un programma, per la CPU di Von Neumann, che dato un numero N naturale maggiore di due, nella locazioni di RAM 100, calcoli la somma dei primi N-1 numeri e la media aritmetica, ponendo i risultati rispettivamente nella locazione di memoria 101 e 102.

- Realizzare il flowchart che descrive l'algoritmo di risoluzione la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es16.fprg
- |cognome|_assembler_es16.vnsp

---

ESERCIZIO ASSEMBLER 17

- Realizzare un programma, per la CPU di Von Neumann, che dato un numero N naturale maggiore di 5, memorizzato nella cella di memoria 100, calcoli la somma dei cubi dei primi N numeri e memorizzi il risultato nella cella di memoria 101

- Realizzare il flowchart che descrive l'algoritmo di risoluzione la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es17.fprg
- |cognome|_assembler_es17.vnsp


---

ESERCIZIO ASSEMBLER 18

- Realizzare un programma, per la CPU di Von Neumann, che dati due numeri N e M, naturali positivi con M > N+2 e memorizzati rispettivamente nelle celle di memoria 100 e 101, calcoli la somma dei numeri pari compresi tra N e M, estremi inclusi e memorizzi il risultato nella cella di memoria 103

- Realizzare il flowchart che descrive l'algoritmo di risoluzione la codifica in assembler di von Neumann.

<br>

Consegnare i seguenti file:
- |cognome|_assembler_es18.fprg
- |cognome|_assembler_es18.vnsp



--- #slide 80

![/media/Diapositiva80.jpg](/media/Diapositiva80.jpg)

