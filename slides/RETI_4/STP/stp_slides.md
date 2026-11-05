---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /cover.png
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: "16_/9"
routerMode: "hash"
materia: RETI 4
as: 2026/2027
version: "1.2.0"
# devo definire:
# 1- bridge id (mac + priority)
# 2- costo dei link
# 3- root bridge
# 4- root port
# 5- designated port

# 1) find root bridge (bridge with lowest bridge id)
# 2) find root port
#     a- percorso minor costo (100Mbps = 19, 1Gbps=4 10Mbps=100)
#     b- minor bridge id received on a port
#     c- lowest port number
# 3) find designated port (1 per segment) (tutte per il root bridge)
# 4) block all other ports

---  

<style>
  .alto {
    width: 50%;
    position: absolute;
    margin: auto;
    top: -40%;
    left: 50%;
    right: 0%;
    bottom: 0%;
  }

  .centro {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 30%;
    position: absolute;
    margin: auto;
    top: 0%;
    left: 45%;
    right: 0%;
    bottom: 0%;
  }

  .centro.w {
    width: 40%;
  }
</style>


# SISTEMI & RETI

Spanning Tree Protocol

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

--- #slide 1

# STP

definizioni

<div style="background-color:green; color:white;padding:3rem;font-size: 1.8rem;line-height:3rem;">
Lo Spanning Tree Protocol (STP) è un protocollo di rete di livello 2 che ha il compito di ricavare, da una rete magliata e con presenza di loop, una topologia logica ad albero priva di loop, bloccando alcune porte. La topologia fisica non cambia: in caso di guasto di un collegamento l'albero viene ricalcolato riattivando i collegamenti di riserva
</div>

---

# STP

definizioni

- **priorità**: valori più bassi indicano priorità maggiore
  - **bridge priority**: priorità dello switch, per default pari a 32768 (configurabile a multipli di 4096)
  - **port priority**: priorità di ogni porta, per default pari a 128
- **bridge ID**: Identificativo univoco di uno switch composto da: `priorità + MAC address`
  - sugli switch Cisco alla priorità viene sommato il numero di VLAN: sulla VLAN 1 si legge 32769
- **port ID**: Identificativo di una porta composto da: `port priority + numero di porta`

---

# STP

definizioni

- **costo di un link**: costo assegnato ad ogni link in funzione della sua velocità
  - link a maggior velocità hanno un costo minore

| Tipo                | Velocità   | Costo |
| ------------------- | ---------- | ----- |
| Ethernet            | 10 Mbps    | 100   |
| Fast Ethernet       | 100 Mbps   | 19    |
| Gigabit Ethernet    | 1000 Mbps  | 4     |
| 10 Gigabit Ethernet | 10000 Mbps | 2     |


--- #slide 1

# STP

definizioni

- **root bridge**: switch alla radice della topologia ad albero
- **root port**: la porta più "conveniente" che interconnette uno switch al root bridge. Questa porta è in forwarding mode
- **designated port**: per ogni segmento si determina una sola porta (designated) che connette il segmento al root bridge. Questa porta è in forwarding mode
- **blocked port**: porta che non effettua il forwarding del traffico e non apprende indirizzi MAC, ma continua a ricevere le BPDU per potersi riattivare in caso di guasto


--- #slide 1

# STP

Algoritmo di risoluzione

- Il protocollo di Spanning Tree compie i seguenti passi per determinare lo stato di ogni porta di ogni switch della rete

1. **elezione del root bridge**: siccome ci deve essere un solo switch root per un albero, si determina come root bridge lo switch che ha bridgeID minore di tutti

    ***Da notare che il root bridge ha TUTTE le porte di tipo designated***


2. **selezione della root port**: per ogni switch, diverso dal root bridge, si identifica una sola porta che è più "conveniente" nell'interconnettere lo switch al root bridge
    
   La maggior "convenienza" si determina in base a:
   1. percorso a minor costo
   2. minor bridgeID ricevuto su una data porta
   3. minor port ID ricevuto su una data porta (serve con due collegamenti paralleli verso lo stesso switch)

--- #slide 1

# STP

Algoritmo di risoluzione

3. **selezione delle designated port**: per ogni segmento o rete si elegge una sola designated port che ha il compito di connettere il segmento al root bridge. Su un dato segmento è la porta che è più "vicina" al root bridge

La maggior "vicinanza" al root bridge si determina in base a:
1. percorso a minor costo verso il root bridge
2. in caso di parità, si determina in base al minor Bridge ID



Al termine dei 3 passi

<div style="background-color:green; color:white;padding:2rem;font-size: 2rem;line-height:2.5rem;">
TUTTE LE PORTE CHE NON SONO ROOT O DESIGNATED VENGONO MESSE IN BLOCKING MODE
</div>

---

# STP

Come funziona STP (Youtube)


<iframe width="560" height="315" src="https://www.youtube.com/embed/1RPMCnJStec?si=JSE_pmKjovWMesGr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="margin: auto; position:relative;top:50px;"></iframe>

---

# STP

Esempio 1

<img src="/media/stp_esempio1.png" style="max-height:330px;margin:0.5rem auto 0;">

<div style="text-align:center;margin-top:1rem;font-size:1.1rem;">
Vedi simulatore: <a href="https://reti.mancusoa.it/4/stp_simulatore.html" target="_blank">https://reti.mancusoa.it/4/stp_simulatore.html</a> (pulsante <b>Esempio 1</b>)
</div>

---

# STP

Esempio 2

<img src="/media/stp_esempio2.png" style="max-height:330px;margin:0.5rem auto 0;">

<div style="text-align:center;margin-top:1rem;font-size:1.1rem;">
Vedi simulatore: <a href="https://reti.mancusoa.it/4/stp_simulatore.html" target="_blank">https://reti.mancusoa.it/4/stp_simulatore.html</a> (pulsante <b>Esempio 2</b>)
</div>

---

# STP

Esempio 3

<img src="/media/stp_esempio3.png" style="max-height:330px;margin:0.5rem auto 0;">

<div style="text-align:center;margin-top:1rem;font-size:1.1rem;">
Vedi simulatore: <a href="https://reti.mancusoa.it/4/stp_simulatore.html" target="_blank">https://reti.mancusoa.it/4/stp_simulatore.html</a> (pulsante <b>Esempio 3</b>)
</div>
