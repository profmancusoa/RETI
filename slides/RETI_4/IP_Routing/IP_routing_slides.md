---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: "16_/9"
routerMode: "hash"
version: "1.0.1"
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

  .alto2 {
    width: 49%;
    position: absolute;
    margin: auto;
    top: 10%;
    left: 51%;
    right: 0%;
    bottom: 0%;
  }

  .centro {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 50%;
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

IP Subnetting and Routing

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

--- #slide 1

# IP Subnetting e Routing

- Come visto a lezione, una subnet IP è l'equivalente a livello 3 di una VLAN di livello 2
- In altre parole la relazione tra VLAN e IP subnet è univoca
- Gli host in una VLAN hanno indirizzi IP appartenenti ad un'unica IP subnet
- Tutti gli host con indirizzo IP appartenente alla stessa IP subnet devono far parte della stessa VLAN

<br> 

<div style="color: yellow; background-color: green;padding: 10px;">
Questo è un principio fondamentale nella progettazione delle reti IP
</div>

<br />
<center>
<img src="/media/ip_00.png" width="300"/>
</center>

--- 

# IP Subnetting e Routing

Esercizio Routing_01

- Creare una rete con queste caratteristiche:
  - due switch
  - 2 PC collegati al primo switch 
    - Assegnare un indirizzo IP valido a ciascun <br> PC collegato allo switch nella rete 172.16.0.0./16
  - 2 PC collegati al secondo switch 
    - Assegnare un indirizzo IP valido a ciascun <br> PC collegato allo switch nella rete 172.26.0.0./16
  - Fare il ping dal PC0 al PC3 e viceversa. Funziona? Perchè?
- *Consegnare il file |cognome|_routing_es_01.pkt*

<img src="/media/ip_01.png" class="alto" />

---

# IP Subnetting e Routing

Il Router

- Il Router è un dispositivo di rete di livello 3 (Network)
- Il Router interconnette reti o IP subnet diverse
- Il Router instrada pacchetti IP tra reti diverse

<img src="/media/ip_03.png" class="alto2" />

--- 

# IP Subnetting e Routing

Esercizio Routing_02

- Effettuiamo la configurazione iniziale del Router Cisco 1841:
- Alla prima apertura del CLI del router viene proposta la configurazione del router tramite un semplice wizard

<center>
<img src="/media/ip_04.png" width="440"/>
</center>

--- 

# IP Subnetting e Routing

Esercizio Routing_02

<center>
<img src="/media/ip_05.png" width="550"/>
</center>


--- 

# IP Subnetting e Routing

Esercizio Routing_02

<center>
<img src="/media/ip_06.png" width="550"/>
</center>


--- 

# IP Subnetting e Routing

Esercizio Routing_02

<center>
<img src="/media/ip_07.png" width="550"/>
</center>


--- 

# IP Subnetting e Routing

Esercizio Routing_02

<center>
<img src="/media/ip_08.png" width="550"/>
</center>

--- 

# IP Subnetting e Routing

Esercizio Routing_03

- Partendo dalla rete dell'esercizio #01 modificare <br> rimuovendo la connessione tra gli switch ed <br> interconnetterli tramite un router
- Per ogni PC, determinare e configurare <br> l'indirizzo IP del default GW
- Fare il ping dal PC0 al PC3 e viceversa. <br> Funziona? Perchè?

<img src="/media/ip_09.png" class="alto" />

--- 

# IP Subnetting e Routing

Esercizio Routing_03

- Configurare l'interfaccia Fa0/0 e Fa0/1 del router <br> con gli indirizzi IP precedentemente determinati

<br><br><br><br><br>

```bash
R1#conf t
Enter configuration commands, one per line.  End with CNTL/Z.

R1(config)#int f0/1
R1(config-if)#ip address <IP address DOTTED QUAD> <IP netmask DOTTED QUAD> 
R1(config-if)#no shutdown
R1(config-if)#end
R1#
```

<img src="/media/ip_09.png" class="alto" />


--- 

# IP Subnetting e Routing

Esercizio Routing_03

- Abilitiamo il routing IP con il comnado


<br><br><br><br><br><br>

```bash
R1#conf t
Enter configuration commands, one per line.  End with CNTL/Z.

R1(config)#ip routing
R1(config)#end
R1#
```

<img src="/media/ip_09.png" class="alto" />

--- 

# IP Subnetting e Routing

Esercizio Routing_03

<center>
<img src="/media/ip_10.png" width="550"/>
</center>

--- 

# IP Subnetting e Routing

Esercizio Routing_03

- Riesci a fare il ping al default gw da ogni PC?
- Riesci a pingare il PC3 dal PC0? perchè?
- Riesci a pingare il PC1 dal PC2? perchè?

- *Consegnare il file |cognome|_routing_es_03.pkt*
  
<img src="/media/ip_09.png" class="alto" />


--- 

# IP Subnetting e Routing

Esercizio Routing_03

- Ora guardiamo la routing table tramite il comando: 

```bash
R1# show ip route
```

<center>
<img src="/media/ip_11.png" width="450"/>
</center>

--- 

# IP Subnetting e Routing

Esercizio Routing_04

- Partendo dalla rete dell'esercizio #03 modificare <br> aggiungendo un secondo router remoto R2
- Determinare e configurare gli indirizzi di <br> tutte e 4 le interfcce dei due router
- Determinare e configurare i default gw di ogni PC
- Riesci a fare il ping al default gw da ogni PC?
- Riesci a pingare il PC3 dal PC0? perchè?
- Riesci a pingare il PC1 dal PC2? perchè?
- Verificare la tabella di routing di R1 e R2
- E' diversa da prima? come mai?
- E' completa?

<img src="/media/ip_12.png" class="alto" />

--- 

# IP Subnetting e Routing

Esercizio Routing_04

- Aggiungiamo una route sul router  R1 per <br> raggiungere la rete 172.26.0.0/16
- Aggiungiamo una route sul router  R2 per <br> raggiungere la rete 172.16.0.0/16

<br><br><br><br>

```bash
R1#conf t
R1(config)#ip route <DST IP SUBNET> <IP Netmask> <Next Hop>
R1(config)#end
R1#
```

<img src="/media/ip_12.png" class="alto" />

--- 

# IP Subnetting e Routing

Esercizio Routing_04

<center>
<img src="/media/ip_13.png" width="550"/>
</center>

--- 

# IP Subnetting e Routing

Esercizio Routing_04

- Verifica la tabella di routing di R1

<br>

<center>
<img src="/media/ip_14.png" width="600"/>
</center>

--- 

# IP Subnetting e Routing

Esercizio Routing_04

- Verifica la tabella di routing di R2

<br>

<center>
<img src="/media/ip_15.png" width="600"/>
</center>

--- 

# IP Subnetting e Routing

Esercizio Routing_04

- Le tabelle di routing sono diverse da quella <br> dell'esercizio precedente? come mai?
- Riesci a pingare il PC3 dal PC0? perchè?
- Riesci a pingare il PC1 dal PC2? perchè?
- Prova a pingare dal PC0 l'interfaccia Fa0/1 di R1. <br> funziona? perchè?
- Prova a pingare dal PC0 l'interfaccia Fa0/1 di R2. <br> funziona? perchè?
- Prova a pingare dal PC0 l'interfaccia Fa0/0 di R2. <br> funziona? perchè?

<img src="/media/ip_12.png" class="alto" />

-  *Consegnare il file |cognome|_routing_es_04.pkt*

--- 

# IP Subnetting e Routing

Esercizio Routing_05

- Abilitiamo il routing tra 2 vlan di uno switch <br> attraverso l'uso di un router R1
- Configuriamo una rete come <br> nell'esercitazione VPN 02
- La subnet di sviluppo è 192.168.10.0/24 - vlan 10
- La subnet di amministrazione è 192.168.20.0/24 - <br> vlan 20
- L'interfaccia fa0/0 di R1 è nella vlan 10
- L'interfaccia fa0/1 di R1 è nella vlan 20
- Determinare ed assegnare gli indirizzi IP 0 -- IP 5 alle rispettive interfacce
- Assegnare gli indirizzi di default gw ai PC 0 - PC 3

<br> 

<div style="color: yellow; background-color: green;padding: 10px;">
Ricorda ad ogni VLAN corrisponde *una* IP subent e viceversa
</div>

<img src="/media/ip_16.png" class="alto" />

---

# IP Subnetting e Routing

Esercizio Routing_05

```bash
switch01#show vlan brief 

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa0/7, Fa0/8, Fa0/9, Fa0/10
                                                Fa0/11, Fa0/12, Fa0/13, Fa0/14
                                                Fa0/15, Fa0/16, Fa0/17, Fa0/18
                                                Fa0/19, Fa0/20, Fa0/21, Fa0/22
                                                Fa0/23, Fa0/24
10   SVILUPPO                         active    Fa0/1, Fa0/2, Fa0/5
20   AMMINISTRAZIONE                  active    Fa0/3, Fa0/4, Fa0/6
1002 fddi-default                     active    
1003 token-ring-default               active    
1004 fddinet-default                  active    
1005 trnet-default                    active    
switch01#
```

---

# IP Subnetting e Routing

Esercizio Routing_05

- Prova a pingare dal PC0 nella vlan 10 <br> il PC1 nella vlan 10. funziona? perchè?
- Prova a pingare dal PC0 nella vlan 10 <br> il PC3 nella vlan 20. funziona? perchè?
- Prova a pingare dal PC2 nella vlan 20 <br> il PC1 nella vlan 10. funziona? perchè?
- Qual'è il percorso che compie un pacchetto IP dal PC0 al PC3?
- Cosa succede se dobbiamo interconnettere 3 VLAN? e 4? e N?
  
<img src="/media/ip_16.png" class="alto" />

- *Consegnare il file |cognome|_routing_es_05.pkt*

---

# IP Subnetting e Routing

ROAS - Router On A Stick


<center>
<img src="/media/ip_16a.png" width="400"/>
</center>

---

# IP Subnetting e Routing

ROAS - Router On A Stick

<div style="color: yellow; background-color: green;padding: 20px; line-height:30px;">
In informatica, una particolare configurazione chiamata ROUTER ON A STICK, è un router che ha una singola connessione fisica verso una rete.
E' utilizzato, fino ai primi anni 2000, per interconnettere a livello 3 le VLAN di una rete (inter-VLAN routing), connettendo il router allo switch con un solo cavo.
</div>

<center>
<img src="/media/ip_17.jpg" width="400"/>
</center>

---

# IP Subnetting e Routing

ROAS - Router On A Stick


<center>
<img src="/media/roas.gif" width="600"/>
</center>

---

# IP Subnetting e Routing

ROAS - Router On A Stick

- Progressivamente la configurazione ROAS è stata soppiantata da una nuova classe di dispositivi chiamati `Layer3 Switch`
- Un Layer 3 switch, è uno switch Ethernet che commuta i pacchetti osservando sia il loro indirizzo di IP che il loro indirizzo MAC. 
- Questo tipo di switch opera sia a livello di rete (livello 3) che a livello data link (livello 2) del modello di riferimento OSI (Open Systems Interconnection). 
- Lo switch Layer 3 combina la velocità di uno switch Ethernet con alcune delle capacità di un router per la creazione di reti Ethernet avanzate e ad alta velocità.
- Il primo Layer3 Switch (Cisco Catalyst 6500) operava alla velocità wirespeed di 40 Mpps (milioni di pacchetti per secondo)

---

# IP Subnetting e Routing

ROAS - Router On A Stick

- Come possiamo connettere tutte le VLAN della nostra rete ad un singolo ROAS router?

---

# IP Subnetting e Routing

ROAS - Router On A Stick

- Come possiamo connettere tutte le VLAN della nostra rete ad un singolo ROAS router?

<center>
<img src="/media/ip_18.png" width="600"/>
</center>


---

# IP Subnetting e Routing

IP sub interfaces

- Ma il **trunk** è un concetto di livello 2
- Pertanto dobbiamo trovare ed utilizzare un concetto simile al trunk ma di livello 3
- Come visto nell'esercitazione 5, ogni VLAN viene collegata al router tramnite un0interfaccia fisica del router (1 cavo per VLAN)
- Questo chiaramente non è scalabile per un numero di VLAN elevate (migliaia di VLAN), in quanto il router dovrebbe avere migliaia di porte
- Pertanto è stato introdotto il concetto di `IP sub interface`

<br>

<div style="color: yellow; background-color: green;padding: 10px;">
Una <mark>IP sub interface</mark> è un'interfaccia virtuale, creata suddividendo un'interfaccia fisica in più interfacce logiche.
</div>

---

# IP Subnetting e Routing

IP sub interfaces

<center>
<img src="/media/ip_19.png" width="500"/>
</center>

---

# IP Subnetting e Routing

IP sub interfaces

- In un router Cisco, una **sub interface** utilizza l'interfaccia fisica associata per inviare e ricevere dati.
- Pertanto in questo modo nella configurazione ROAS, potremo creare tante sub interface quante sono le VLAN e collegando il router e lo switch con un solo cavo, pertanto usando una sola interfaccia del router

<center>
<img src="/media/ip_20.png" width="250"/>
</center>


---

# IP Subnetting e Routing

IP sub interfaces

- Per creare una sub interface è necessario associarla ad una VLAN tramite l'abilitazione dell'incapsulamento 802.1Q
- Per il resto una sub interface in Cisco IOS è totalemente uguale ad un'interfaccia fisica
- Pertanto anche la configurazione dell'indirizzo IP non varia

<br>

```bash
R1>enable
R1#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
R1(config)#interface fastethernet 0/0.100
R1(config-subif)#encapsulation dot1Q 100
R1(config-subif)#ip address 172.16.100.1 255.255.255.0
R1(config-subif)#no shutdown
R1(config-subif)#exit
R1(config)#exit
R1#
```

---

# IP Subnetting e Routing

Esercizio Routing_06

- Abilitiamo il routing tra 2 vlan di uno switch <br> usando la configurazione ROAS
- Configuriamo una rete come nell'esercizio 5
- Configurare lo switch per supportare:
  -  VLAN 10 e 20 per le connessioni dei PC
  -  Trunk (fa0/5) port per veicolare le VLAN 10 e 20
- Assegnare gli indirizzi IP ai PC
- Determinare gli indirizzi di default gw per ciascuna subnet ed assegnarli ai 4 PC
- Configurare le sub interface sul router R1
- Verifica la routing table. è corretta? si vedono entrambe le VLAN/subnet?
- prova a pingare dal PC0 nella vlan 10 il PC1 nella vlan 10. funziona? perchè?
- prova a pingare dal PC0 nella vlan 10 il PC3 nella vlan 20 e viceversa. funziona? perchè?
- *Consegnare il file |cognome|_routing_es_06.pkt*


<img src="/media/ip_21.png" class="alto" />
