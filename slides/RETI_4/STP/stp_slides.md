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
as: 2024/2025
version: "1.1.0"
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

<div style="background-color:green; color:white;padding:3rem;font-size: 2rem;line-height:3rem;">
Lo Spanning Tree Protocol (STP) è un protocollo di rete di livello 2 che ha il compito di riconfigurare una rete magliata e con presenza di loop in una rete con topologia ad albero priva di loop
</div>

---

# STP

definizioni

- **priorità**: valore di priorità assegnata ad uno switch e ad ogni porta
  - valori più bassi indicano priorità maggiore
  - gli switch hanno per default priorità pari a 32768 
- **bridge ID**: Identificativo univoco di uno switch composto da: `priorità + MAC address`
- **costo di un link**: costo assegnato ad ogni link in funzione della sua velocità
  - link a maggior velocità hanno un costo minore

| Tipo             | Velocità  | Costo |
| ---------------- | --------- | ----- |
| Ethernet         | 10 Mbps   | 100   |
| Fast Ethernet    | 100 Mbps  | 19    |
| Gigabit Ethernet | 1000 Mbps | 4     |


--- #slide 1

# STP

definizioni

- **root bridge**: switch alla radice della topologia ad albero
- **root port**: la porta più "conveniente" che interconnette uno switch al root bridge. Questa porta è in forwarding mode
- **designated port**: per ogni segmento si determina una sola porta (designated) che connette il segmento al root bridge. Questa porta è in forwarding mode
- **blocked port**: porta che non partecipa attivamente alla topologia e non effettua il forwarding del traffico


--- #slide 1

# STP

Algoritmo di risoluzione

- Il protocollo di Spanning Tree compie i seguenti passi per determinare lo stato di ogno porta di ogni switch della rete

1. **elezione del root bridge**: siccome ci deve essere un solo switch root per un albero, si determina come root bridge lo switch che ha bridgeID minore di tutti

    ***Da notare che il root bridge ha TUTTE porte di tipo designated***


2. **selezione della root port**: per ogni switch, diverso dal root bridge, si identifica una sola porta che è più "conveniente" nell'interconnettere lo switch al root bridge
    
   La maggior "convenienza" si determina in base a:
   1. percorso a minor costo
   2. minor bridgeID ricevuto su una data porta
   <!-- 3. minor numero di porta -->

--- #slide 1

# STP

Algoritmo di risoluzione

3. **selezione delle designated port**: per ogni segmento o rete si elegge una sola designated port che ha il compito di connettere il segmento al root bridge. Su un dato segmento è la porta che è più "vicina" al root bridge

La maggior "vicinanza" al root bridge si determina in base a:
1. percorso più preve verso il root bridge
2. in caso di parità, si determina in base la minor Bridge ID



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

<img src="/media/stp_01.jpg" width=550 style="margin:auto;position:relative;top:-100px;">

---

# STP

Esempio 1

<img src="/media/stp_02.jpg" width=550 style="margin:auto;position:relative;top:-100px;">


---

# STP

Esempio 1

<img src="/media/stp_03.jpg" width=550 style="margin:auto;position:relative;top:-100px;">

---

# STP

Esempio 1

<img src="/media/stp_04.jpg" width=550 style="margin:auto;position:relative;top:-100px;">


---

# STP

Esempio 1

<img src="/media/stp_05.jpg" width=550 style="margin:auto;position:relative;top:-100px;">


---

# STP

Esempio 1

<img src="/media/stp_06.jpg" width=550 style="margin:auto;position:relative;top:-100px;">


---

# STP

Esempio 1

<img src="/media/stp_07.jpg" width=550 style="margin:auto;position:relative;top:-100px;">

---

# STP

Esempio 2

<img src="/media/stp_08.jpg" width=550 style="margin:auto;position:relative;top:-100px;">


---

# STP

Esempio 2

<img src="/media/stp_09.jpg" width=550 style="margin:auto;position:relative;top:-100px;">


---

# STP

Esempio 2

<img src="/media/stp_10.jpg" width=550 style="margin:auto;position:relative;top:-100px;">


---

# STP

Esempio 2

<img src="/media/stp_11.jpg" width=550 style="margin:auto;position:relative;top:-100px;">


---

# STP

Esempio 2

<img src="/media/stp_12.jpg" width=550 style="margin:auto;position:relative;top:-100px;">


---

# STP

Esempio 2

<img src="/media/stp_13.jpg" width=550 style="margin:auto;position:relative;top:-100px;">



---

# STP

Esempio 3

<img src="/media/stp_14.jpg" width=550 style="margin:auto;position:relative;top:-100px;">

---

# STP

Esempio 3

<img src="/media/stp_15.jpg" width=550 style="margin:auto;position:relative;top:-100px;">


---

# STP

Esempio 3

<img src="/media/stp_16.jpg" width=550 style="margin:auto;position:relative;top:-100px;">



---

# STP

Esempio 3

<img src="/media/stp_17.jpg" width=550 style="margin:auto;position:relative;top:-100px;">



---

# STP

Esempio 3

<img src="/media/stp_18.jpg" width=550 style="margin:auto;position:relative;top:-100px;">



---

# STP

Esempio 3

<img src="/media/stp_19.jpg" width=550 style="margin:auto;position:relative;top:-100px;">



---

# STP

Esempio 3

<img src="/media/stp_20.jpg" width=550 style="margin:auto;position:relative;top:-100px;">



---

# STP

Esempio 3

<img src="/media/stp_21.jpg" width=550 style="margin:auto;position:relative;top:-100px;">

