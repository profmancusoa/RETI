---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
materia: "RETI"
as: "2023/2024"
version: '1.0.0'

---  


# SISTEMI & RETI

DeMilitarized Zone a.k.a. DMZ

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

--- 

# DMZ

DeMilitarized Zone

- Nell’ambito delle reti informatiche e della sicurezza informatica, una demilitarized zone o DMZ (in italiano zona demilitarizzata) è una sottorete fisica o logica che contiene ed espone dei servizi ad una rete esterna non ritenuta sicura, come ad esempio Internet. 
- Lo scopo di una DMZ è di proteggere la rete LAN di un'organizzazione.
  
<br>

<img src="/media/DMZ_02.png" style="width:400px;margin:auto; margin-top: 0px;"/>



--- 

# DMZ

Esercitazione_01 

- [Eserciatzione_01 - DMZ](../DMZ_01_studenti.pkt)

<br>

<img src="/media/DMZ_01.png" style="width:900px;margin:auto;"/>

--- 

# DMZ

Esercitazione_01 

Partendo dalla rete rappresenttatta nella figura, si richiede di configurare il router **EDGE ROUTER** e il **FIREWALL** in modo che:
- PC2 possa accedere al web server WS GOOGLE
- PC1 possa accedere al web server WS1
- Il web server WS1 possa accedere al DB locale sulle porte 3306 e 33060
- Tutti gli altri scambi di traffico ttra LAN diverse deve essere proibito

- Si suggerisce di verificare in partenza lo statto della rete e di apportare le eventuali modifiche prima di procedere alla configurazione della DMZ
- Si ricorda che gli indirizzi privati NON possono essere annunciati su Inetrnet
  
Consegnare su github il file |cognome|_01_dmz.pkt
