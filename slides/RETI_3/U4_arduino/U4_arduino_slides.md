---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /cover.jpg
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: "16_/9"
routerMode: "hash"
materia: "RETI"
as: "2024/2025"
version: "2.0.2"
---

# SISTEMI & RETI

Scheda a microcontrollore Arduino

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

--- #slide 1

# Arduino

Materiale Aggiuntivo

- [Arduino Book](/support/3/arduino/arduino_book.pdf)
- [Arduino Programming](/support/3/arduino/ARDUINOPROGRAMMING24.pdf)
- [Beginning C for Arduino](/support/3/arduino/Beginning_C_for_Arduino.epub)
- [Guida Arduino](/support/3/arduino/Guida_Arduino.pdf)
- [Manuale Arduino](/support/3/arduino/Manuale_Arduino.pdf)
- [Home Automation with Arduino](/support/3/arduino/Home_Automation_with_Arduino.pdf)
- [Arduino Sensors Guide](/support/3/arduino/Ultimate_Guide_Arduino_Sensors_Modules.pdf)

--- #slide 1

# Arduino

Link Utili

- https://www.html.it/pag/382804/allarme-laser-con-arduino-lcd-16x2-parte-1/
- https://www.html.it/pag/382805/allarme-laser-con-arduino-lcd-16x2-parte-2/
- https://mancusoa74.blogspot.com/
- https://www.arduino.cc/
- https://www.youtube.com/channel/UCUV7BwyOFRQfrCdF3xww_DA
- https://github.com/zmaker/?fbclid=IwAR2OkV2xRBTFgazttC_EHx0bh1B_rEAqpg4hXdt-pLtvIws1XlBWvBQ1Diw

--- #slide 2

![/media/Diapositiva2.jpg](/media/Diapositiva2.jpg)

--- #slide 3

![/media/Diapositiva3.jpg](/media/Diapositiva3.jpg)

--- #slide 4

![/media/Diapositiva4.jpg](/media/Diapositiva4.jpg)

--- #slide 5

![/media/Diapositiva5.jpg](/media/Diapositiva5.jpg)

--- #slide 6

![/media/Diapositiva6.jpg](/media/Diapositiva6.jpg)

--- #slide 7

![/media/Diapositiva7.jpg](/media/Diapositiva7.jpg)

--- #slide 8

![/media/Diapositiva8.jpg](/media/Diapositiva8.jpg)

--- #slide 9

![/media/Diapositiva9.jpg](/media/Diapositiva9.jpg)

--- #slide 10

![/media/Diapositiva10.jpg](/media/Diapositiva10.jpg)

--- #slide 11

![/media/Diapositiva11.jpg](/media/Diapositiva11.jpg)

--- #slide 12

![/media/Diapositiva12.jpg](/media/Diapositiva12.jpg)

--- #slide 13

![/media/Diapositiva13.jpg](/media/Diapositiva13.jpg)

--- #slide 14

![/media/Diapositiva14.jpg](/media/Diapositiva14.jpg)

---

# Tinkercad

Ambiente di simulazione software e hardware

- Tinkercad è una piattaforma gratuita per lo sviluppo di diversi tipi di progetti

  - 3d design
  - elettronica
  - coding

- Noi utilizzeremo la sezione circuits per lo sviluppo di progetti con la scheda Arduino
- Tinkecad fornisce un eccellente simulatore di Arduino che permette di crere qualsiasi circuito elettronico e di scrivere il codice in linguaggio C
- Tinkercad è così evoluto che per i nostri scopi l'uso di Arduino reale e Tinkercad è perfettamente interscambiabile
- Pertanto utilizzeremo Tinkercad circuits per lo sviluppo delle competenze legate alla programmazione di microcontrollori attraverso la scheda Ardino

---

# Tinkercad

Creazione Account

- Vai su [https://www.tinkercad.com](https://www.tinkercad.com)
- Clicca su `Signup`

<img src="/media/ardu01.png" style="position:relative;top:50px;left:0px">

---

# Tinkercad

Creazione Account

- Crea un account personale

<img src="/media/ardu02.png" style="width: 350px; position:relative;top:-100px;left:300px">

---

# Tinkercad

Creazione Account

- Utilizza le tue credenziali istituzionali
- Segui le istruzioni

<img src="/media/ardu03.png" style="width:400px;position:relative;top:-100px;left:350px">

---

# Tinkercad

Creazione Account

<img src="/media/ardu04.png" style="width:800px;position:relative;top:0px;left:0px">

---

# Tinkercad

Hello World Arduino

- Crea il tuo primo circuito

<img src="/media/ardu05.png" style="width:800px;position:relative;top:20px;left:0px">

---

# Tinkercad

Hello World Arduino

- I circuiti Arduini sono sempre caratterizzata dalla presenza di:
  - scheda arduino per l'esecuzione del codice di controllo
  - breadboard per la realizzazione del circuito elettrico

<img src="/media/ardu06.png" style="width:800px;position:relative;top:50px;left:0px">

---

# Tinkercad

Hello World Arduino

- Seleziona la scheda Arduino R3 e posizionala nell'area di lavoro
- Seleziona la breadboard e posizionala sotto la scheda Arduino (usa il campo cerca per cercare i componenti necessari)

<img src="/media/ardu07.png" style="width:550px;position:relative;top:0px;left:100px">

---

# Tinkercad

Hello World Arduino

- La breadboard è una basetta che consente di inserire a pressione componenti elettronici per sperimentare temporaneamente il funzionamento di circuiti, senza ricorrere a saldature.
- I fori superiori e inferiori sono elettricamente collegati orizzontalmente e servono normalmente per l'alimentazione. I fori centrali sono elettricamente collegati verticalmente.

<img src="/media/ardu08.png" style="width:450px;position:relative;top:50px;left:0px"> 
<img src="/media/ardu09.png" style="width:400px;position:relative;top:-100px;left:450px">

---

# Tinkercad

Hello World Arduino

<img src="/media/breadboard.jpg" style="width:500px;position:relative;top:20px;left:200px">

---

# Tinkercad

Hello World Arduino

- Portiamo le linee di alimentazione (+5V e GND) da Arduino alla breadboard
- Ciò è necessario per alimentare i circuiti in modo corretto
- Filo <span style="color:red;">**ROSSO**</span>: +5V
- Filo **NERO**: GND

<img src="/media/ardu10.png" style="width:500px;position:relative;top:-50px;left:200px">

---

# Tinkercad

Hello World Arduino

- Ora selezioniamo e posizioniamo (facendo attenzione alla polarità)

  - Un led rosso
  - Un resistore da 220 Ohm

- **Anodo**: polo positivo (+5V)
- **Catodo**: polo negativo (GND)
  <img src="/media/ardu11.png" style="width:600px;position:relative;top:-150px;left:250px">

---

# Tinkercad

Hello World Arduino

- Colleghiamo l'anodo del led al GPIO #2 di Arduino
- Facciamo un routing ordinato e logico. Non usiamo fili dritti

<img src="/media/ardu12.png" style="width:500px;position:relative;top:0px;left:200px">

---

# Tinkercad

Hello World Arduino

- Ora scriviamo il software di controllo

<img src="/media/ardu13.png" style="width:500px;position:relative;top:50px;left:0px">

---

# Tinkercad

Hello World Arduino

- Per eseguire il codice premere `Start Simulation`
- Se tutto è andato bene il led lampeggierà con periodo 1000 ms o 1s

<img src="/media/ardu14.png" style="width:450px;position:relative;top:0px;left:200px">

--- #slide 15

![/media/Diapositiva15.jpg](/media/Diapositiva15.jpg)

--- #slide 16

![/media/Diapositiva16.jpg](/media/Diapositiva16.jpg)

--- #slide 17

![/media/Diapositiva17.jpg](/media/Diapositiva17.jpg)

--- #slide 18

![/media/Diapositiva18.jpg](/media/Diapositiva18.jpg)

--- #slide 19

![/media/Diapositiva19.jpg](/media/Diapositiva19.jpg)

--- #slide 20

![/media/Diapositiva20.jpg](/media/Diapositiva20.jpg)

--- #slide 21

![/media/Diapositiva21.jpg](/media/Diapositiva21.jpg)

--- #slide 22

![/media/Diapositiva22.jpg](/media/Diapositiva22.jpg)

--- #slide 23

![/media/Diapositiva23.jpg](/media/Diapositiva23.jpg)

--- #slide 24

![/media/Diapositiva24.jpg](/media/Diapositiva24.jpg)

--- #slide 25

![/media/Diapositiva25.jpg](/media/Diapositiva25.jpg)

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

---

# Digital Input

Pull-Up & Pull-Down

- https://www.html.it/pag/367518/input-digitale-pull-up-e-pull-down/

<img src="/media/pullup_down.png" style="width:400px;position:relative;top:100px;left:200px;">

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

---

# Esercizio arduino_01

&nbsp;

- Si richiede di realizzare un circuito con Arduino, che controlli l'accensione separata di 2 led(L1 e L2) tramite la pressione di due pulsanti distinti(P1 e P2).
- Il pulsante P1 deve essere collegato ad arduino tramite una resistenza di pull-down e controlla l'accesnione del led L1.
- Il pulsante P2 deve essere collegato ad arduino tramite una resistenza di pull-up e controlla l'accesnione del led L2.
- Se P1 è premuto allora L1 si accende. Se P1 è rilasciato allora L1 si spegne.
- Se P2 è premuto allora L2 si accende. Se P2 è rilasciato allora L2 si spegne.
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
  - codice funzionante (deve almeno compilare correttamente)

---

# Esercizio arduino_02

&nbsp;

- Si richiede di realizzare un circuito con Arduino, che controlli l'accensione di 1 led(L1) tramite la pressione di un pulsante(P1).
- Il pulsante P1 deve essere collegato ad arduino tramite una resistenza di pull-down e controlla l'accesnione del led L1.
- Alla prima pressione di P1 L1 si accende. Alla seconda pressione di P1 L1 si spegne e così via.
- In altre parole si richiede che il pulsante P1 funzioni come un interruttore.
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
  - codice funzionante (deve almeno compilare correttamente)

---

# Esercizio arduino_03

&nbsp;

- Si richiede di realizzare un circuito con Arduino, che controlli l'accensione separata di 1 led(L1) tramite la pressione di tre interruttori distinti(I1,I2 e I3), realizzati tramite dei pulsanti.
- Gli interruttori I1 e I3 devono essere collegati ad arduino tramite una resistenza di pull-down.
- L'interruttore I2 deve essere collegato ad arduino tramite una resistenza di pull-up.
- Se almeno uno degli interruttori I1 e I2 è attivo(ON) e l'interruttoreI3 è attivo(ON) allora il led L1 si accende.
- In caso contrario L1 deve essere spento.
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
  - codice funzionante (deve almeno compilare correttamente)

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

---

# Esercizio arduino_03a

&nbsp;

- Si richiede di realizzare un circuito con Arduino, che controlli il blink di 3 led (L1, L2, L3)
- L1 ha un periodo di lampeggiamento di 3 secondi, L2 di 2 secondi, L3 di 1 secondo
- Non è possibili utilizzare la funzione delay
- Se svolti a Informatica, obbligatorio utilizzare gli array
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
  - codice funzionante (deve almeno compilare correttamente)

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

--- #slide 62

![/media/Diapositiva62.jpg](/media/Diapositiva62.jpg)

--- #slide 63

![/media/Diapositiva63.jpg](/media/Diapositiva63.jpg)

---

# Esercizio arduino_04

&nbsp;

- Nell'ambito di un sistema di riscaldamento industriale, si richiede lo sviluppo di una soluzione a microcontrollore, che permetta ad un operatore l'incremento e il decremento della temperatura
  di riscaldamento tramite due pulsanti.
- Tale temperatura potrà assumere valori compresi nel range 0-255 C. Il sistema di regolazione manuale della temperatura, prevede il feedback luminoso tramite un led, che assumerà valori di luminosità
  proporzionali alla temperatura impostata.
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
  - codice di controllo funzionante (deve almeno compilare correttamente)

---

# Esercizio arduino_05

&nbsp;

- Si richiede di realizzare un circuito con Arduino, che controlli l'accensione di un Led con valori di luminosità variabile.
- I valori di luminosità sono definiti da un stringa binaria (su 3 bit) impostata dall'utente tramite 3 pulsanti.
- Un quarto pulsante ha la funzione di "Invio" o conferma del numero.
- Pertanto l'utente può impostare 8 valori (3 bit), e quando il pulsante "invio" viene premuto il led si deve accendere con un valore di luminosità proporzionale al numero inserito, dove
  - Numero 0 -> Equivale a led spento
  - Numero 7 -> Equivale a led con massima luminosità
  - Numero >0 e < 7 -> equivale ad una luminosità proporzionale tra completamente spento e completamente acceso
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
  - codice di controllo funzionante (deve almeno compilare correttamente)

---

# Esercizio arduino_05a

&nbsp;

- Uguale allo 05
- Visualizzare all'utente anche il numero inserito tramite un semplice display a 4 led (3 per il numero 1 per indicare la pressione di invio)
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
  - codice di controllo funzionante (deve almeno compilare correttamente)

---

# Esercizio arduino_06

&nbsp;

- E' richiesta la realizzazione di un sistema che permetta il controllo manuale della posizione di un utensile industriale.
- Tale utensile può assumere 16 posizioni differenti, comprese tra la posizione 0 e la posizione 15 incluse.
- Si richiede di realizzare un sistema che permetta all'operatore, tramite due pulsanti di selezionare la posizione dell'utensile, e di visualizzare su un display a 4 led, usando la numerazione binaria, la posizione selezionata.
- L'operatore può passare solo ad una posizione superiore o ad una inferiore.
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
  - codice di controllo funzionante (deve almeno compilare correttamente)

--- #slide 64

![/media/Diapositiva64.jpg](/media/Diapositiva64.jpg)

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

---

# Esercizio arduino_06a

&nbsp;

- E' richiesta la realizzazione di un sistema che permetta il controllo manuale della posizione di un utensile industriale.
- Tale utensile può assumere 16 posizioni differenti, comprese tra la posizione 0 e la posizione 15 incluse.
- Si richiede di realizzare un sistema che permetta all'operatore, tramite due pulsanti di selezionare la posizione dell'utensile, e di visualizzare su un display a 4 led, usando la numerazione binaria, la posizione selezionata.
- Il committente richiede di gestire i pulsanti in interrupt e non polling
- L'operatore può passare solo ad una posizione superiore o ad una inferiore.
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
  - codice di controllo funzionante (deve almeno compilare correttamente)

---

# Esercizio arduino_07

&nbsp;

- Si richiede di realizzare un deviatore tramite due pulsanti. Questo deviatore deve permettere l'accensione e lo spegnimento di 3 led in base alla seguente logica:
  se almeno uno dei due interruttori è acceso allora i 3 led sono accesi.
- Le richieste progettuali prevedono che i pulsanti siano gestiti in interrupt e non in polling.
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
  - codice di controllo funzionante (deve almeno compilare correttamente)

---

# Esercizio arduino_07a

&nbsp;

- Si richiede di realizzare un deviatore tramite due pulsanti. Questo deviatore deve permettere l'accensione e lo spegnimento di 3 led in base alla seguente logica:
  se almeno uno dei due interruttori è acceso allora i 3 led sono accesi.
- Le richieste progettuali prevedono che i pulsanti siano gestiti in interrupt e non in polling.
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
  - codice di controllo funzionante (deve almeno compilare correttamente)

---

# Esercizio arduino_08

&nbsp;

- Si richiede di realizzare un deviatore tramite due pulsanti. Questo deviatore deve permettere l'accensione e lo spegnimento di 3 led in base alla seguente logica:
  se tutti e due gli interruttori sono accesi allora i 3 led sono accesi.
- Le richieste progettuali prevedono che i pulsanti siano gestiti in interrupt e non in polling.
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
  - codice di controllo funzionante (deve almeno compilare correttamente)

--- #slide 73

![/media/Diapositiva73.jpg](/media/Diapositiva73.jpg)

--- #slide 74

![/media/Diapositiva74.jpg](/media/Diapositiva74.jpg)

--- #slide 75

![/media/Diapositiva75.jpg](/media/Diapositiva75.jpg)

---

# Bitwise operators

- Link utili

- [Funzione printBW](https://gist.github.com/mancusoa74/f2de35775d73a2b07d2dda6c69478fa4)
- [Funzione printB](https://gist.github.com/mancusoa74/3e3b742dc45c3c9a7f7136cb0c1d1d9f)

--- #slide 76

![/media/Diapositiva76.jpg](/media/Diapositiva76.jpg)

--- #slide 77

![/media/Diapositiva77.jpg](/media/Diapositiva77.jpg)

--- #slide 78

![/media/Diapositiva78.jpg](/media/Diapositiva78.jpg)

--- #slide 79

![/media/Diapositiva79.jpg](/media/Diapositiva79.jpg)

--- #slide 80

![/media/Diapositiva80.jpg](/media/Diapositiva80.jpg)

--- #slide 81

![/media/Diapositiva81.jpg](/media/Diapositiva81.jpg)

--- #slide 82

![/media/Diapositiva82.jpg](/media/Diapositiva82.jpg)

--- #slide 83

![/media/Diapositiva83.jpg](/media/Diapositiva83.jpg)

--- #slide 84

![/media/Diapositiva84.jpg](/media/Diapositiva84.jpg)

--- #slide 85

![/media/Diapositiva85.jpg](/media/Diapositiva85.jpg)

--- #slide 86

![/media/Diapositiva86.jpg](/media/Diapositiva86.jpg)

--- #slide 87

![/media/Diapositiva87.jpg](/media/Diapositiva87.jpg)

--- #slide 88

![/media/Diapositiva88.jpg](/media/Diapositiva88.jpg)

--- #slide 89

![/media/Diapositiva89.jpg](/media/Diapositiva89.jpg)

--- #slide 90

![/media/Diapositiva90.jpg](/media/Diapositiva90.jpg)

--- #slide 91

![/media/Diapositiva91.jpg](/media/Diapositiva91.jpg)

--- #slide 92

![/media/Diapositiva92.jpg](/media/Diapositiva92.jpg)

--- #slide 93

![/media/Diapositiva93.jpg](/media/Diapositiva93.jpg)

--- #slide 94

![/media/Diapositiva94.jpg](/media/Diapositiva94.jpg)

--- #slide 95

![/media/Diapositiva95.jpg](/media/Diapositiva95.jpg)

--- #slide 96

![/media/Diapositiva96.jpg](/media/Diapositiva96.jpg)

--- #slide 97

![/media/Diapositiva97.jpg](/media/Diapositiva97.jpg)

--- #slide 98

![/media/Diapositiva98.jpg](/media/Diapositiva98.jpg)

--- #slide 99

![/media/Diapositiva99.jpg](/media/Diapositiva99.jpg)

--- #slide 100

![/media/Diapositiva100.jpg](/media/Diapositiva100.jpg)

---

# Esercizio arduino_09

&nbsp;

- E' richiesta la realizzazione di una funzione dec2bin che dato in ingresso un numero tra 0 e 255 stampi sul monitor seriale tale numero in binario su 8 bit.
- Tale funzione non potrà usare il parametro BIN della funzione println.
- Pertanto costrutti di questo tipo:

```bash
Serial.println(analogValue, BIN);
```

non sono accettati.

- Per realizzare la funzione si può usare solo uno dei seguenti bitwise operator (|, &, ^)

Esempio:

- bin2dec(119)

```bash
Output atteso:
01110111
```

---

# Esercizio arduino_09

&nbsp;

Basandosi su questa funzione, stampare la conversione da decimale a binario di tutti i numeri da 0 a 255 inclusi

```bash
Output atteso:
0 = 00000000
1 = 00000001
...
...
255 = 11111111
```

Si richiede di consegnare un link di tinkercad, che include:

- circuito con solo Arduino
- codice di controllo funzionante (deve almeno compilare correttamente)

**_AIUTO:
Dato che la funzione pow di arduino non funziona bene, si suggerisce di scriversi una propria funzione di elevamento a potenza._**

---

# Esercizio arduino_10

&nbsp;

- Basandosi sullo svolgimento del compito 9, svolgere il compito 6 senza usare lo switch/case o la serie di if.

**NOTA** <br>
**ad ogni variazione della posizione dello strumento, per accendere i 4 led bastano 2 linee di codice C.**

- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
  - codice di controllo funzionante (deve almeno compilare correttamente) `implementato senza switch/case o if ma con uso di operatori bitwise`

---

# Esercizio arduino_11

&nbsp;

- Partendo dalla funzione **myDigitalWrite**, scriverne una nuova versione che gestisca anche i bit dal 8 al 13 governati dal PORTB
- In conclusione la nuova funzione mydigitalWrite dovrà essere in grado di impostare lo stato logico per ogni singolo GPIO dal 2 al 13 inclusi.
- Con questa funzione scrivere uno sketch di test con 3 led rossi sui pin 4,5,6 e 3 led verdi sui pin 10,11,12.
- Il loop deve implementare il blick ogni 500ms di tutti i led e deve usare la funzione myDigitalWrite sviluppata nella prima parte dell'esercizio
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
- codice di controllo funzionante (deve almeno compilare correttamente) `implementato senza uso di digitalWrite`

---

# Esercizio arduino_12

&nbsp;

- Implementare una funzione **myDigitalRead** che restituisco lo stato logico di un GPIO passato come parametro.
- La funzione deve limitarsi alla gestion del PIND.
- Con questa funzione scrivere uno sketch che alla pressione di un pulsante accende un led e al suo rilascio lo spegne.
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
  - codice di controllo funzionante (deve almeno compilare correttamente) implementato senza l'uso di digitalRead

---

# Esercizio arduino_13

- Realizzare un circuito con Arduino e relativo sketch che dati 4 led (L1, L2, L3, L4) e 4 pulsanti (P1, P2, P3, P4) si comporti in questo modo:
  - alla pressione del pulsante P1 il L1 si accende e rimane accesso fino alla successiva pressione del pulsante P1
  - alla pressione del pulsante P2 il L2 si accende e rimane accesso fino alla successiva pressione del pulsante P2
  - alla pressione del pulsante P3 il L3 si accende e rimane accesso fino alla successiva pressione del pulsante P3
  - alla pressione del pulsante P4 il L4 si accende e rimane accesso fino alla successiva pressione del pulsante P4
- La gestione dei pulsanti P1 e P2 deve essere effettuata in interrupt e non in polling.
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
  - codice di controllo funzionante (deve almeno compilare correttamente)

---

# Esercizio arduino_13a

- Realizzare un circuito con Arduino e sketch che dati 4 led (L1, L2, L3, L4) e 4 pulsanti (P1, P2, P3, P4) si comporti in questo modo:
  - alla pressione del pulsante P1 il L1 si accende e rimane accesso fino alla successiva pressione del pulsante P1
  - alla pressione del pulsante P2 il L2 si accende e rimane accesso fino alla successiva pressione del pulsante P2
  - alla pressione del pulsante P3 il L3 si accende e rimane accesso fino alla successiva pressione del pulsante P3
  - alla pressione del pulsante P4 il L4 si accende e rimane accesso fino alla successiva pressione del pulsante P4
- La gestione dei pulsanti P1 e P2 deve essere effettuata in interrupt e non in polling.
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno
  - codice di controllo funzionante (deve almeno compilare correttamente) implementato senza l'uso di digitalRead

---

# Esercizio arduino_14

&nbsp;

- Realizzare un circuito con Arduino e relativo sketch che dati due led (L1 e L2) ed un potenziometro analogico (POT) si comporti in questo modo:
  -I led si accendono e si spengono in successione secondo il seguente schema:

<br>

```bash
L1 ON -> L1 OFF -> L2 ON -> L2 OFF
```

<br>

- Il tempo di blink di ogni led è specificato tramite un define nel codice
- Il tempo che intercorre tra L1 OFF e L2 ON è determinato dal potenziometro su una scala di 3 livelli (lento, medio, veloce)
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno e basetta mille fori
  - codice di controllo funzionante (deve almeno compilare correttamente)

---

# Esercizio arduino_14a

&nbsp;

- Realizzare un circuito con Arduino e relativo sketch che dati due led (L1 e L2) ed un potenziometro analogico (POT) si comporti in questo modo:
- I led si accendono e si spengono in successione secondo il seguente schema:

<br>

```bash
L1 ON -> L1 OFF -> L2 ON -> L2 OFF
```

<br>

- Il tempo di blink di ogni led è specificato tramite un define nel codice
- Il tempo che intercorre tra L1 OFF e L2 ON è determinato dal potenziometro su una scala di 3 livelli (lento, medio, veloce)
- I led devono essere pilotati tramite il PORT B
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno e basetta mille fori
  - codice di controllo funzionante (deve almeno compilare correttamente)

---

# Esercizio arduino_15

- Realizzare un circuito con Arduino e relativo sketch che implementa i seguenti requisiti ed attività:
- gestisca 3 pulsanti P1, P2, P3 gestiti come interruttori
- P1 deve essere in configurazione PULL-DOWN e gestito in interrupt
- P2 deve essere in configurazione PULL-UP e gestito in interrupt e deve avere la resistenza esterna
- P3 deve essere gestito in configurazione PULL-UP e gestito in polling e deve avere la resistenza interna
- gestisca un potenziometro POT0
- gestisca 3 LED (L1 Ross, L2 Bianco, L3 Verde)
- se P1 è chiuso L1 lampeggia (blink) con una velocità decisa dallo sviluppatore
- se P2 è chiuso L2 lampeggia (blink) con una velocità impostata tramite il potenziometro POT0
- se P3 è chiuso L3 si accende con una luminosità proporzionale al potenziometro POT0
- tutte le operazioni di read e write digitale NON possono essere implementate tramite le funzioni di libreria digitalRead e digitalWrite
- Si richiede di consegnare un link di tinkercad, che include:
  - circuito con Arduino uno e basetta mille fori
  - codice di controllo funzionante (deve almeno compilare correttamente)
