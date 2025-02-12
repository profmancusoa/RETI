---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: cover.webp
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: "16_/9"
routerMode: "hash"
as: "2024/2025"
version: "1.0.0"
---  


# SISTEMI & RETI

Problemi del Distance Vector

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# Distance Vector   

Problemi

I protocolli di routing di tipo Distance Vector sono soggetti ad una serie di problemi, tra cui:

<br>

**Routing Loop**

- Un routing loop si verifica quando i pacchetti di rete continuano a circolare indefinitamente tra i router a causa di informazioni di instradamento non aggiornate o incoerenti.

<br>

**Count to Infinity**

- Il count to infinity è una conseguenza dei routing loop nei protocolli Distance Vector. Quando un router perde l'accesso a una destinazione, i suoi vicini continuano ad aumentare progressivamente il costo fino a raggiungere un valore massimo (in RIP è 15, considerato infinito).


---

# Distance Vector   

Problemi

<img src="/media/dv_01.png" width="550" style="margin:auto;position:relative;top:-50px;">

---

# Distance Vector   

Problemi

<img src="/media/dv_02.png" width="530" style="margin:auto;position:relative;top:-50px;">

---

# Distance Vector   

Problemi

<img src="/media/dv_03.png" width="530" style="margin:auto;position:relative;top:-30px;">

---

# Distance Vector   

Soluzioni

Per prevenire questo problema, esistono diverse tecniche nei protocolli di routing:

- **Split Horizon**
  - Un router non pubblicizza un percorso a un vicino se lo ha appreso da quel vicino stesso.
  - Esempio: R3 non dice a R2 che può raggiungere X, se R3 ha appreso il percorso da R2.

<img src="/media/dv_04.png" width="350" style="margin:auto;position:relative;top:50px;">

---

# Distance Vector   

Soluzioni

Per prevenire questo problema, esistono diverse tecniche nei protocolli di routing:

- **Route Poisoning**
  - Appena un router perde un percorso, lo annuncia con un costo infinito a tutti i vicini.
  - Esempio: R4 annuncia subito a R3 che X ha un costo 16.

<img src="/media/dv_05.png" width="550" style="margin:auto;position:relative;top:50px;">


---

# Distance Vector   

Soluzioni

Per prevenire questo problema, esistono diverse tecniche nei protocolli di routing:

- **Holddown Timer**
  - Quando un percorso diventa irraggiungibile, il router attende prima di accettare nuovi aggiornamenti per quella destinazione.
  - Esempio: Se R2 riceve una nuova informazione da R3 su X, aspetta prima di aggiornare la tabella.

<img src="/media/dv_06.png" width="550" style="margin:auto;position:relative;top:20px;">

