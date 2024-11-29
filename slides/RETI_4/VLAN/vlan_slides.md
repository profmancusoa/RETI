---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080
background: cover.png
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: "16_/9"
routerMode: "hash"
version: "1.0.6"
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

Virtual LAN

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

--- #slide 1

# VLAN   

VLAN Overview

<a href="/support/4/vlan.pdf">VLAN: Virtual LAN</a>

<a href="/support/4/vlan_ccna.pdf">VLAN CCNA</a>

<center>
<img src="/media/vlan_12.png" width="500"/>
</center>


--- #slide 1

# VLAN   

VLAN Overview


<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/A9lMH0ye1HU?si=rIvHX87fZ8QmvNXu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>


--- #slide 1

# VLAN   

VLAN Overview


<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/2hUUaG4o3DA?si=U5VA_LSw9oKblwT3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>

--- #slide 1

# VLAN   

- In telecomunicazioni e informatica il termine VLAN (Virtual Local Area Network) indica un insieme di tecnologie che permettono di segmentare un singolo dominio di broadcast, in più reti locali logicamente non comunicanti tra loro, ma che condividono globalmente la stessa infrastruttura fisica di rete locale. 
- Le applicazioni di questa tecnologia sono tipicamente legate ad esigenze di separare il traffico di gruppi di lavoro o dipartimenti di un'azienda, per applicare diverse politiche di sicurezza informatica.
- In pratica le VLAN permettono di creare più reti LAN all'interno di uno stesso switch
- Ciò avviene assegnando specifiche porte dello switch alle varie VLAN

<br />
<center>
<img src="/media/vlan_01.png" width="400"/>
</center>


--- #slide 1

# VLAN

access vs trunk mode

- Ogni porta dello switch può essere configurata in due diverse modalità (mutuamente esclusive):
  1. `access` : Tipicamente modalità di una porta a cui è connesso un host ed è parte di una sola VLAN (default: VLAN 1). Questa è l'impostazione di default di tutte le porte dello switch  
  2. `trunk` : Modalità di una porta che connette due switch o uno switch ed un router. Una porta trunk può far parte e veicolare il traffico di più VLAN contemporaneamente.
  
<br />
<center>
<img src="/media/vlan_02.png" width="400"/>
</center>


---

# VLAN

access vs trunk mode

- Per configurare una porta in **access** mode basta eseguire, a livello interfaccia, il seguente comando

```bash
Switch#conf t
Enter configuration commands, one per line.  End with CNTL/Z.

Switch(config)#int f0/1
Switch(config-if)#switchport mode access 
Switch(config-if)#end

Switch#
%SYS-5-CONFIG_I: Configured from console by console

Switch#
```
--- 

# VLAN

access vs trunk mode

- Verifichiamo la configurazione con

```bash
Switch#show running-config 
Building configuration...

Current configuration : 1042 bytes
!
version 12.1
...
...
!
interface FastEthernet0/1
 switchport mode access
```

--- #slide 1

# VLAN

Creazione di una VLAN

- Per creare una VLAN eseguire i seguenti comandi, dal contesto di configurazione:

```bash
Switch#
Switch#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#vlan 10
Switch(config-vlan)#name SVILUPPO
Switch(config-vlan)#end
Switch#
%SYS-5-CONFIG_I: Configured from console by console

Switch#
```

- Quindi le VLAN sono identificate da un ID numeri univoco chiamato `VLAN ID`
- E' buona norma assegnare un nome alla VLAN per scopo amministrativo

---

# VLAN

Creazione di una VLAN

- Verifichiamo la creazione della VLAN con uno dei seguenti comandi:

```bash
Switch#
Switch# show vlan

oppure 

Switch#
Switch# show vlan brief

oppure

Switch#
Switch# show vlan id 10
```

---

# VLAN

Creazione di una VLAN

```bash
Switch#show vlan
VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa0/1, Fa0/2, Fa0/3, Fa0/4
                                                Fa0/5, Fa0/6, Fa0/7, Fa0/8
                                                Fa0/9, Fa0/10, Fa0/11, Fa0/12
                                                Fa0/13, Fa0/14, Fa0/15, Fa0/16
                                                Fa0/17, Fa0/18, Fa0/19, Fa0/20
                                                Fa0/21, Fa0/22, Fa0/23, Fa0/24
10   SVILUPPO                         active    
1002 fddi-default                     active    
1003 token-ring-default               active    

VLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2
---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------
1    enet  100001     1500  -      -      -        -    -        0      0
10   enet  100010     1500  -      -      -        -    -        0      0
...

Switch#
```

--- 

# VLAN

Creazione di una VLAN

```bash
Switch#show vlan brief 

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa0/1, Fa0/2, Fa0/3, Fa0/4
                                                Fa0/5, Fa0/6, Fa0/7, Fa0/8
                                                Fa0/9, Fa0/10, Fa0/11, Fa0/12
                                                Fa0/13, Fa0/14, Fa0/15, Fa0/16
                                                Fa0/17, Fa0/18, Fa0/19, Fa0/20
                                                Fa0/21, Fa0/22, Fa0/23, Fa0/24
10   SVILUPPO                         active    
1002 fddi-default                     active    
1003 token-ring-default               active    
1004 fddinet-default                  active    
1005 trnet-default                    active    
Switch#
```

---

# VLAN

Creazione di una VLAN

```bash
Switch#show vlan id 10

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
10   SVILUPPO                         active    

VLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2
---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------
10   enet  100010     1500  -      -      -        -    -        0      0

Switch#
```

- Come si può vedere la VLAN 10 è stata creata ma nessuna porta fà parte della VLAN


---

# VLAN

Assegniamo una porta ad una VLAN

- Per assegnare una port in modalità access ad una VLAN, eseguire i seguenti comandi:
  
```bash
Switch#
Switch#conf t
Enter configuration commands, one per line.  End with CNTL/Z.

Switch(config)#int fa 0/1
Switch(config-if)#switchport access vlan 10
Switch(config-if)#end
Switch#
%SYS-5-CONFIG_I: Configured from console by console

Switch#
```

--- 

# VLAN

Creazione di una VLAN

```bash
Switch#show vlan brief 

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa0/2, Fa0/3, Fa0/4, Fa0/5
                                                Fa0/6, Fa0/7, Fa0/8, Fa0/9
                                                Fa0/10, Fa0/11, Fa0/12, Fa0/13
                                                Fa0/14, Fa0/15, Fa0/16, Fa0/17
                                                Fa0/18, Fa0/19, Fa0/20, Fa0/21
                                                Fa0/22, Fa0/23, Fa0/24
10   SVILUPPO                         active    Fa0/1
1002 fddi-default                     active    
1003 token-ring-default               active    
1004 fddinet-default                  active    
1005 trnet-default                    active    
Switch#
```

- Come si vede ora la porta FastEthernet 0/1 fà parte della VLAN 10 ed è rimossa dalla VLAN 1


--- 

# VLAN

Esercizio vlan_01

- Creare una rete con queste caratteristiche:
  - singolo switch
  - 2 PC collegatisulla VLAN 10 - SVILUPPO
    - PC0: IP = 192.168.10.10/24
    - PC1: IP = 192.168.10.11/24
  - Fare il ping dal PC0 al PC1 e viceversa
- *Consegnare il file |cognome|_vlan_es_01.pkt*

<img src="/media/vlan_03.png" class="centro" />

--- 

# VLAN

Esercizio vlan_02

- Creare una rete con queste caratteristiche:
  - singolo switch
  - 2 PC collegatisulla VLAN 10 - SVILUPPO
    - PC0: IP = 192.168.10.10/24
    - PC1: IP = 192.168.10.11/24
  - 2 PC collegatisulla VLAN 20 - AMMINISTRAZIONE
    - PC2: IP = 192.168.20.22/24
    - PC3: IP = 192.168.20.23/24
  - Fare il ping dal PC0 al PC1 e viceversa(VLAN 10)
  - Fare il ping dal PC2 al PC3 e viceversa(VLAN 20)
  - Fare il ping dal PC0(VLAN 10) al PC3(VLAN 20) Funziona?
- *Consegnare il file |cognome|_vlan_es_02.pkt*

<img src="/media/vlan_04.png" class="centro" />


--- 

# VLAN

Esercizio vlan_03

- Creare una rete con queste caratteristiche:
- 2 palazzine separate
- Per ogni palazzina 2 VLAN <br />(SVILUPPO e AMMINISTRAZIOE)
- Palazzina SX:
  - 2 PC collegatisulla VLAN 10 - SVILUPPO
    - PC0: IP = 192.168.10.10/24
    - PC1: IP = 192.168.10.11/24
  - 2 PC collegatisulla VLAN 20 - AMMINISTRAZIONE
    - PC2: IP = 192.168.20.22/24
    - PC3: IP = 192.168.20.23/24

<img src="/media/vlan_05.png" class="centro w" />

--- 

# VLAN

Esercizio vlan_03

- Palazzina DX:
  - 2 PC collegatisulla VLAN 10 - SVILUPPO
    - PC4: IP = 192.168.10.14/24
    - PC5: IP = 192.168.10.15/24
  - 2 PC collegatisulla VLAN 20 - AMMINISTRAZIONE
    - PC6: IP = 192.168.20.26/24
    - PC7: IP = 192.168.20.27/24
  - Verificare, per ogni VLAN di ogni palazzina,<br /> che ogni coppia di PC sia in comunicazione (ping)
  - I PC della palazzina SX VLAN 10 possono <br />comunicare  con i PC palazzina DX VLAN 10?
  - E per la VLAN 20 la situazione è diversa?
- *Consegnare il file |cognome|_vlan_es_03.pkt*

<img src="/media/vlan_05.png" class="centro w" />

---

# VLAN

Esercizio vlan_04

- I dipartimenti distribuiti su due palazzine vogliono <br />comunicare tra loro
- Pertanto la rete creata nell'esercizio 3 ora deve <br />essere interconnessa
- Per far ciò collegiamo lo switch0 con lo switch1 <br />con un cavo incrociato
- I PC della palazzina SX VLAN 10 possono <br />comunicare  con i PC palazzina DX VLAN 10?
  - E per la VLAN 20 la situazione è diversa? Perchè?

<img src="/media/vlan_06.png" class="centro w" />

---

# VLAN

Esercizio vlan_04

- Associare le due porte che collegano gli switch <br />alla VLAN 10
- I PC della palazzina SX VLAN 10 possono <br />comunicare  con i PC palazzina DX VLAN 10?
- E per la VLAN 20 la situazione è diversa? Perchè?
- *Consegnare il file |cognome|_vlan_es_04.pkt*

<img src="/media/vlan_06.png" class="centro w" />

---

# VLAN

Esercizio vlan_05
 
- Associare le due porte che collegano gli switch <br />alla VLAN 20
- I PC della palazzina SX VLAN 10 possono <br />comunicare  con i PC palazzina DX VLAN 10?
- E per la VLAN 20 la situazione è diversa? Perchè?
- *Consegnare il file |cognome|_vlan_es_05.pkt*

<img src="/media/vlan_06.png" class="centro w" />


---

# VLAN

access vs trunk mode

- Per configurare una porta in **trunk** mode basta eseguire, a livello interfaccia, il seguente comando

```bash
Switch#conf t
Enter configuration commands, one per line.  End with CNTL/Z.

Switch(config)#int f0/1
Switch(config-if)#switchport mode trunk  
Switch(config-if)#end

%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/1, changed state to down

%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/1, changed state to up

Switch#
```

---

# VLAN

access vs trunk mode

- Per configurare quali VLAN possono trasitare tramite la porta trunk, eseguire il seguente comando
```bash
Switch#conf t
Switch(config)#int fastEthernet 0/1
Switch(config-if)#switchport trunk allowed vlan 10,20
Switch(config-if)#end

%SYS-5-CONFIG_I: Configured from console by console
Switch#
```

- In questo modo ora sul trunk possono veicolare tutti i pacchetti provenienti o destinati alla VLAN configurata (***allowed*** )


---

# VLAN

access vs trunk mode

- Per verificare lo stato del trunk, usare il seguente comando
```bash
Switch#show interfaces trunk  
Port        Mode         Encapsulation  Status        Native vlan
Fa0/1       on           802.1q         trunking      1

Port        Vlans allowed on trunk
Fa0/1       10,20

Port        Vlans allowed and active in management domain
Fa0/1       10,20

Port        Vlans in spanning tree forwarding state and not pruned
Fa0/1       20

Switch#
```

---

# VLAN

Esercizio vlan_06
 
- Impostare le due porte che collegano gli switch <br /> in ***trunking*** mode
- Permettere su entrambi i lati del trunk <br />le VLAN 10 e 20
- I PC della palazzina SX VLAN 10 possono <br />comunicare  con i PC palazzina DX VLAN 10?
- E per la VLAN 20 la situazione è diversa? Perchè?
- I PC della VLAN 10 possono comunicare con <br />i PC della VLAN 20? Perchè?
- *Consegnare il file |cognome|_vlan_es_06.pkt*

<img src="/media/vlan_06.png" class="centro w" />


---

# VLAN

VLAN Trunking Protocol

- Normalmente le VLAN vengono create manualmente su ogni switch, operazione che può risultare complicata su reti di grosse dimensioni, in cui sono presenti numerosi switch.
- La gestione delle VLAN può richiedere molto tempo ed essere soggetta ad errori di configurazione. 
- Per ovviare a questi problemi, Cisco ha creato un protocollo di livello Ethernet chiamto **VLAN Trunking Protocol** o **VTP**.
- Lo scopo del protocollo VTP è quello di permettere una facile gestione delle VLAN all'interno di una rete.
- Utilizzando il protocollo VTP è possibile definire una VLAN solo su uno switch, il quale distribuirà agli altri switch appartenenti al dominio VTP questa definizione.

---

# VLAN

VLAN Trunking Protocol

- VTP classifica gli switch come:
  - ***VTP server***: switch su cui si effettua la <br />configurazione delle VLAN
  - ***VTP client***: switch che riceve le informazioni <br />sui cambiamenti della configurazione <br />delle VLAN dallo switch server
  - ***VTP transparent***: switch che ricevono e inoltrano <br />i messaggi dal server ma che NON applicano <br />la configurazione delle VLAN

<br />
<br />

- I VTP client ricevono gli aggiornamenti solo dal VTP server appartenente allo stesso **DOMINIO**
- *In questo modo ogni modifica della configurazione delle VLAN applicata sullo switch server, viene propagata ed applicata a tutti gli switch client.*
  
<img src="/media/vlan_07.png" class="centro w" />

---

# VLAN

VLAN Trunking Protocol

  
<center>
<img src="/media/vlan_08.png" />
</center>

---

# VLAN

VTP Configuration

  
<center>
<img src="/media/vlan_09.png" />
</center>

---

# VLAN

VTP Configuration

- Configuriamo uno switch come VTP server,definendo:
  - dominio
  - mode
  - password

```bash
Switch#conf t
Switch(config)#vtp domain ADMIN_DOMAIN
Changing VTP domain name from NULL to ADMIN_DOMAIN
Switch(config)#vtp mode server 
Device mode already VTP SERVER.
Switch(config)#vtp password qwe123
Setting device VLAN database password to qwe123
Switch(config)#end
Switch#
%SYS-5-CONFIG_I: Configured from console by console
```

- Configurare le porte che interconnettono lo switch server agli switch client in TRUNK mode
  
---

# VLAN

VTP Configuration

- Verifichiamo lo stato della configurazione VTP

```bash
Switch#show vtp status 
VTP Version                     : 2
Configuration Revision          : 0
Maximum VLANs supported locally : 255
Number of existing VLANs        : 5
VTP Operating Mode              : Server
VTP Domain Name                 : ADMIN_DOMAIN
VTP Pruning Mode                : Disabled
VTP V2 Mode                     : Disabled
VTP Traps Generation            : Disabled
MD5 digest                      : 0x41 0x34 0xAF 0x93 0xE2 0x5C 0xCA 0xE2 
Configuration last modified by 0.0.0.0 at 0-0-00 00:00:00
Local updater ID is 0.0.0.0 (no valid interface found)
```
---

# VLAN

VTP Configuration

- Configuriamo uno switch come VTP client,definendo:
  - dominio (deve essere esattamente uguale al dominio configurato sul server)
  - mode
  - password

```bash
Switch#conf t
Switch(config)#vtp domain ADMIN_DOMAIN
Changing VTP domain name from NULL to ADMIN_DOMAIN
Switch(config)#vtp mode client 
Setting device to VTP CLIENT mode.
Switch(config)#vtp password qwe123
Setting device VLAN database password to qwe123
Switch(config)#end
Switch#
%SYS-5-CONFIG_I: Configured from console by console
```

- Configurare le porte che interconnettono gli switch client allo switch server in TRUNK mode

---

# VLAN

VTP Configuration

- Verifichiamo lo stato della configurazione VTP

```bash
Switch#show vtp status 
VTP Version                     : 2
Configuration Revision          : 0
Maximum VLANs supported locally : 255
Number of existing VLANs        : 5
VTP Operating Mode              : Client
VTP Domain Name                 : ADMIN_DOMAIN
VTP Pruning Mode                : Disabled
VTP V2 Mode                     : Disabled
VTP Traps Generation            : Disabled
MD5 digest                      : 0x41 0x34 0xAF 0x93 0xE2 0x5C 0xCA 0xE2 
Configuration last modified by 0.0.0.0 at 0-0-00 00:00:00
```


---

# VLAN

VTP Configuration

- Ora creaimo le VLAN 10,20,30 sullo switch server
- Dopo pochi istanti le informazioni di configurazione saranno propagate a tutti gli switch client e le VLAN ricreate in modo automatico

```bash
Switch#conf t
Switch(config)#vlan 10
Switch(config-vlan)#name VLAN10
Switch(config-vlan)#exit
Switch(config)#vlan 20
Switch(config-vlan)#name VLAN20
Switch(config-vlan)#exit
Switch(config)#vlan 30
Switch(config-vlan)#name VLAN30
Switch(config-vlan)#end
Switch#
%SYS-5-CONFIG_I: Configured from console by consol
```

---

# VLAN

VTP Configuration

- Ora verifichiamo lo stato delle VLAN sul server
  
```bash
Switch#show vlan  brief 

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa0/1, Fa0/2, Fa0/3, Fa0/4
                                                Fa0/5, Fa0/6, Fa0/7, Fa0/8
                                                Fa0/9, Fa0/10, Fa0/11, Fa0/12
                                                Fa0/13, Fa0/14, Fa0/15, Fa0/16
                                                Fa0/17, Fa0/18, Fa0/19, Fa0/20
                                                Fa0/21, Fa0/22, Fa0/23, Fa0/24
10   VLAN10                           active    
20   VLAN20                           active    
30   VLAN30                           active    
1002 fddi-default                     active    
1003 token-ring-default               active    
1004 fddinet-default                  active    
1005 trnet-default                    active    
```

---

# VLAN

VTP Configuration

- Ora verifichiamo lo stato delle VLAN sul client
  
```bash
Switch#show vlan brief 

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa0/2, Fa0/3, Fa0/4, Fa0/5
                                                Fa0/6, Fa0/7, Fa0/8, Fa0/9
                                                Fa0/10, Fa0/11, Fa0/12, Fa0/13
                                                Fa0/14, Fa0/15, Fa0/16, Fa0/17
                                                Fa0/18, Fa0/19, Fa0/20, Fa0/21
                                                Fa0/22, Fa0/23, Fa0/24
10   VLAN10                           active    
20   VLAN20                           active    
30   VLAN30                           active    
1002 fddi-default                     active    
1003 token-ring-default               active    
1004 fddinet-default                  active    
1005 trnet-default                    active    
```

---

# VLAN

Esercizio vlan_07
 
- Realizzare la rete rappresentata in figura
- Configurare lo switch al centro come VTP server
- Configurare tutti gli altri switch come VTP client
- Creare le VLAN 10,20,30,40,50,60,70,80,90 <br />sul VTP server
- Verificare che tutte le VLAN sono correttamente <br />create su tutti gli switch client
- *Consegnare il file |cognome|_vlan_es_07.pkt*

<img src="/media/vlan_10.png" class="centro w" />


---

# VLAN

Esercizio vlan_08
 
- Eliminare le VLAN 10 e 90 da tutti gli switch
- Eliminare la VLAN 20 dallo switch #1.
- E' possibile rimuove la VLAN 20 dallo switch #1? <br />Perchè?
- *Consegnare il file |cognome|_vlan_es_08.pkt*

<img src="/media/vlan_11.png" class="centro w" />

