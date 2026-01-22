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
materia: "RETI"
as: "2025/2026"
version: "1.1.1"
---

# SISTEMI & RETI

Cisco iOS Access Control List - Standard e Extended 

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# Cosa sono le ACL?

Access Control List (ACL)

Le ACL sono **insiemi di regole** che definiscono quali pacchetti di rete sono **permessi** o **negati** su un'interfaccia  di rete di un router e/o firewall.

<br>

### Funzioni principali:
- **Filtraggio del traffico** - controllare quali pacchetti attraversano il router
- **Limitazione dell'accesso** - bloccare/permettere connessioni da/verso specifiche reti
- **Quality of Service (QoS)** - classificare il traffico per priorità
- **Sicurezza** - implementare policy di sicurezza di rete

<br>

### Dove vengono applicate:
- Sulle **interfacce** (inbound/outbound)
- Su **linee VTY** (accesso Telnet/SSH)
- Per **filtraggio NAT**

---

# Cosa sono le ACL?

Access Control List (ACL)

Un’ACL non è un insieme di regole indipendenti, ma:
- una sequenza ordinata
- valutata dall’alto verso il basso
- che termina sempre con una regola finale implicita:
  - 👉 deny all

<img src="/media/acl_01.png" style="position: relative;top:-250px;right:-450px;">

---

# Concetti fondamentali

ACL Standard vs Estese

- Le `ACL standard`:
  - sono la forma più semplice di ACL, che operano al livello 3 del modello OSI e filtrano il traffico **esclusivamente** in base  all'indirizzo IP di origine.
- Le `ACL estese`:
  - operanando ai livelli 3 e 4 del modello OSI,  offrono un livello di controllo più sofisticato consentendo il filtraggio in base a più criteri, inclusi indirizzi IP di origine e destinazione, numeri di porta e protocolli. 
  - Consentono agli amministratori di definire regole più specifiche per il filtraggio del traffico

<br>


| Tipo | Range | Descrizione |
|------|-------|-------------|
| **Standard** | 1-99, 1300-1399 | Solo indirizzo sorgente |
| **Extended** | 100-199, 2000-2699 | Sorgente, destinazione, protocollo, porta, flag protocollo |


---

# Concetti fondamentali

Logica di elaborazione

1. Il router **esamina** ogni regola **in ordine sequenziale**
2. Quando trova una **corrispondenza**, applica l'azione (permit/deny) e **FERMA**
3. Se nessuna regola corrisponde, applica un **deny implicito**


<img src="/media/acl_02.png" style="position: relative;top:-0px;right:-400px; width:500px;">

---

# Concetti fondamentali

Wildcard

- `Netmask (subnet mask)` 
  - Dice quali bit appartengono alla parte “rete” (1 = fisso, 0 = host).

- `Wildcard mask` 
  - Dice quali bit l’ACL deve ignorare (1 = “non mi interessa”, 0 = “deve combaciare”).

<br>

In pratica, per le ACL Cisco il concetto utile è:
- “Matcha questi bit esattamente, e ignora questi altri bit”.

Ed è esattamente ciò che fa la wildcard.

---

# Concetti fondamentali

Wildcard

- `La wildcard è l’inverso della netmask`

```bash
Wildcard = 255.255.255.255 – netmask
```

<br>

Esempi:

/24 netmask 255.255.255.0 → wildcard 0.0.0.255

```bash
255.255.255.255 - 
255.255.255.0   =
-------------------
 0 . 0 . 0 .255
```


/26 netmask 255.255.255.192 → wildcard 0.0.0.63

host singolo: netmask 255.255.255.255 → wildcard 0.0.0.0 (tutti i bit devono combaciare)


---

# ACL Standard

Sintassi

```bash
access-list <numero> {permit | deny} <source-ip> <wildcard-mask>
```

<br>

### Parametri:
- **numero**: 1-99 o 1300-1399 (ACL standard)
- **permit/deny**: azione da applicare
- **source-ip**: indirizzo IP sorgente o `any` o `host`
- **wildcard-mask**: inverso della subnet mask (0 = deve corrispondere, 1 = può variare)

```bash
Router# configure terminal
Router(config)#access-list 1 permit 192.168.20.0 0.0.0.255

Router(config)#access-list 1 permit 192.168.20.10 0.0.0.0

Router(config)#access-list 1 permit host 192.168.20.10

Router(config)#access-list 1 deny any
```

---

# ACL Standard: Esempi di configurazione

&nbsp;

### Esempio 1: Permettere una singola rete

<br>

```bash
access-list 10 permit 192.168.1.0 0.0.0.255
access-list 10 deny any
```

**Spiegazione:**
- Permette tutto il traffico dalla rete 192.168.1.0/24
- Nega esplicitamente tutto il resto

---

# ACL Standard: Esempi di configurazione 

&nbsp;

### Esempio 2: Bloccare un host specifico

<br>

```bash
access-list 20 deny 10.0.0.50 0.0.0.0
access-list 20 permit 10.0.0.0 0.0.0.255
access-list 20 deny any
```

**Spiegazione:**
- Nega il singolo host 10.0.0.50
- Permette il resto della rete 10.0.0.0/24
- Nega tutto il resto

---

# ACL Standard (named)

Sintassi

```bash
ip access-list standard <NAME> 
<sequence number> {permit | deny} <source-ip> <wildcard-mask>
```

<br>

### Parametri:
- **NAME**: nome dell'ACL standard
- **sequence number**: specifica esattamente dove inserire la ACL
- **permit/deny**: azione da applicare
- **source-ip**: indirizzo IP sorgente o `any` o `host`
- **wildcard-mask**: inverso della subnet mask (0 = deve corrispondere, 1 = può variare)

```bash
Router(config)#ip access-list standard ACL1
Router(config-std-nacl)# permit 192.168.20.0 0.0.0.255
Router(config-std-nacl)# permit 192.168.20.10 0.0.0.0
Router(config-std-nacl)#permit host 192.168.20.10
Router(config-std-nacl)#deny any
```

---

# ACL Standard

Verifica configurazione

```bash 
Router# show access-list

Router# show ip access-list

Standard IP access list 1
    10 permit 192.168.20.0 0.0.0.255

Standard IP access list ACL1
    10 permit host 192.168.10.20
    20 deny any

Standard IP access list 20
    10 deny host 10.0.0.50
    20 permit 10.0.0.0 0.0.0.255
    30 deny any
```

---

# ACL Standard

Rimozione ACL

```bash
Router(config)#no access-list 20

Router(config)#no ip access-list standard ACL1

```

---

# ACL Standard

Aggiunta di regole a ACL

```bash
Router(config)#ip access-list standard 1 
Router(config-std-nacl)#5 deny 192.168.22.32 0.0.0.0
Router(config-std-nacl)#15 permit host 192.168.22.55

Router#show ip access-lists 

Standard IP access list 1
    5 deny host 192.168.22.32
    10 permit 192.168.20.0 0.0.0.255
    15 permit host 192.168.22.55
```


---

# ACL Standard

Applicazione su interfaccia

```bash
interface <if_name>
ip access-group <number|name> {in|out}
```

### Parametri:
- **if_name**: nome dell'interfaccia su cui applicare la ACL
- **number|name**: numero o nome dell'ACL da applicare
- **in** = filtra traffico entrante sull'interfaccia
- **out** = filtra traffico uscente dall'interfaccia

**NOTA: Una sola ACL per direzione per interfaccia**


```bash
Router# interface GigabitEthernet0/0/0
Router(config-if)# ip access-group 10 in

Router(config-if)# ip access-group 10 out
```

---

# ACL Extended

Sintassi

```bash
access-list <numero> {permit | deny} <protocol> <source> <source-wildcard>
<destination> <destination-wildcard> [port-options]
```

<br>

### Parametri estesi:
- **numero**: 100-199 o 2000-2699 (ACL extended)
- **protocol**: IP, TCP, UDP, ICMP, GRE, ESP, ecc.
- **source/destination**: indirizzi IP con wildcard
- **port-options**: `eq`, `gt`, `lt`, `range` per porte

<br>

### Operatori di porta:

```bash
eq <port> - porta esatta
gt <port> - porta maggiore di
lt <port> - porta minore di
range <port1> <port2> - intervallo di porte
```

---

# ACL Extended

Esempi di configurazione

### Esempio 1: Permettere solo HTTP/HTTPS verso un server web

<br>

```bash
Router(config)#access-list 100 permit tcp any host 192.168.1.10 eq 80
Router(config)#access-list 100 permit tcp any 192.168.1.10 0.0.0.255 eq 443
Router(config)#access-list 100 deny tcp any host 192.168.1.10
Router(config)#access-list 100 permit ip any any 
```

**Spiegazione:**
- Permette TCP da qualsiasi sorgente a 192.168.1.10 porta 80 (HTTP)
- Permette TCP da qualsiasi sorgente a 192.168.1.10 porta 443 (HTTPS)
- Nega tutto il resto verso quel server
- Permette qualsiasi altro traffico IP

---

# ACL Extended
Esempi di configurazione

### Esempio 2: Bloccare specifico host da SSH

<br>

```bash
Router(config)#ip access-list extended ACL101
Router(config-ext-nacl)#deny tcp 10.0.0.100 0.0.0.0 any eq 22
Router(config-ext-nacl)#permit tcp any any eq 22
Router(config-ext-nacl)#permit ip any any
```

**Spiegazione:**
- Nega SSH (porta 22) dal host 10.0.0.100
- Permette SSH da tutti gli altri
- Permette qualsiasi altro traffico

---

# ACL Extended 

Esempi di configurazione 

### Esempio 3: Filtrare ICMP (Ping)

<br>

```bash
Router(config)#access-list 103 deny icmp any any
Router(config)#access-list 103 permit ip any any
```

**Spiegazione:**
- Nega completamente ICMP (blocca ping)
- Permette tutto il resto del traffico IP

---

# ACL Extended

Esempi di configurazione 

### Esempio 4: Bloccare tutto tranne HTTP(S)

<br>

```bash
Router(config-ext-nacl)#permit tcp any any eq 80
Router(config-ext-nacl)#permit tcp any any eq 443
Router(config-ext-nacl)#deny ip any any
```

**Spiegazione:**
- Permette solo TCP verso porte 80 e 443
- Nega tutto il resto

---

# ACL Extended

Applicazione su interfaccia

```bash
interface <if_name>
ip access-group <number|name> {in|out}
```

<br>

### Parametri:
- **if_name**: nome dell'interfaccia su cui applicare la ACL
- **number|name**: numero o nome dell'ACL da applicare
- **in** = filtra traffico entrante sull'interfaccia
- **out** = filtra traffico uscente dall'interfaccia

**NOTA: Una sola ACL per direzione per interfaccia**


```bash
Router# interface GigabitEthernet0/0/0
Router(config-if)# ip access-group 101 in

Router(config-if)# ip access-group 102 out
```


---

# Comandi di verifica

## Visualizzare le ACL configurate

```bash
show access-lists
show ip access-lists
show access-lists 10
show access-lists 100
```

<br>

## Visualizzare quali ACL sono applicate

```bash
show ip interface GigabitEthernet0/0/0
```

<br>

## Verificare il traffico filtrato

```bash
show access-lists 10 | include matches
```


---

# Confronto: Standard vs Extended

<br>

| Aspetto | Standard | Extended |
|---------|----------|----------|
| **Numero** | 1-99, 1300-1399 | 100-199, 2000-2699 |
| **Filtra** | Solo IP sorgente | Sorgente, destinazione, protocollo, porta |
| **Complessità** | Semplice | Complessa |
| **Performance** | Migliore | Leggermente inferiore |
| **Casi d'uso** | Accesso console, policy generiche | Filtraggio dettagliato |

---

# Best Practices

- ✅ Usa **nomi descrittivi** per le ACL (su device recenti)
- ✅ Colloca regole **più specifiche PRIMA - PIU' IN ALTO** di quelle generiche
- ✅ Testa le ACL in **ambienti di test** prima della produzione
- ✅ Documenta **ogni regola** e il suo scopo
- ✅ Usa **ACL extended** quando necessario (maggiore granularità)
- ✅ Ricorda il **deny implicito** alla fine
- ✅ Applica ACL il **più vicino possibile** alla detinazione (ACL STANDARD)
- ✅ Applica ACL il **più vicino possibile** alla sorgente del traffico indesiderato (ACL EXTENDED)

<br>

- ❌ Non inserire regole **troppo generiche** (nega tutto prematurely)
- ❌ Non dimenticare che le regole vengono **elaborate in ordine**
- ❌ Non rimuovere regole dalla console senza backup
- ❌ Non usare indirizzo sorgente per filtrare traffico **in uscita**

---

# Esercitazione 01

### Scenario

- scarica il file [ACL_standard_es_01](/support/5/acl_standard_es_01.pkt) e consegna la soluzione su github *|cognome|_acl_standard_es_01.pkt*

<img src="/media/acl_03.png" style="position: relative;top:-0px;right:-100px; width:750px;">


---

# Esercitazione 01

### Scenario

- Facendo riferimento alla rete in figura, implementare tramite le ACL standard la seguente policy di sicurezza:
  1. Il PC0 della LAN 1 può solo comunicare con i PC1 e PC2 della LAN 1. Ogni altra comunicazione è proibita
  2. Il PC6 della LAN 3 può comunicare con i PC della LAN 1 ma NON con i PC della LAN 2

---

# Esercitazione 01

### Soluzione

<img src="/media/acl_04.png" style="position: relative;top:-10px;right:0px; width:900px;">


---

# Esercitazione 01

### Soluzione

- Creo ACL per rogola 1 della policy

```bash
Router(config)#ip access-list standard ACL-REGOLA1
Router(config-std-nacl)#deny host 192.168.1.1
Router(config-std-nacl)#permit any
```

<br>

- Applico la ACL all'interfaccia Fa 0/0

```bash
Router(config)#int fastEthernet 0/0
Router(config-if)#ip access-group ACL-REGOLA1 in
```

---

# Esercitazione 01

### Soluzione

- Creo ACL per rogola 2 della policy

```bash
Router(config)#ip access-list standard ACL-REGOLA2
Router(config-std-nacl)#deny host 192.168.3.1
Router(config-std-nacl)#permit any
```

<br>

- Applico la ACL all'interfaccia Fa 0/1

```bash
Router(config)#int fastEthernet 0/0
Router(config-if)#ip access-group ACL-REGOLA2 out
```

---

# Esercitazione 01

### Soluzione

<br>

```bash
Router#show ip access-lists 
Standard IP access list ACL-REGOLA1
    10 deny host 192.168.1.1
    20 permit any
Standard IP access list ACL-REGOLA2
    10 deny host 192.168.3.1
    20 permit any
```

---

# Esercitazione 01

### Soluzione

<br>

```bash
Router#show running-config 
!
interface FastEthernet0/0
 ip address 192.168.1.254 255.255.255.0
 ip access-group ACL-REGOLA1 in
!
interface FastEthernet0/1
 ip address 192.168.2.254 255.255.255.0
 ip access-group ACL-REGOLA2 out
!
ip access-list standard ACL-REGOLA1
 deny host 192.168.1.1
 permit any
ip access-list standard ACL-REGOLA2
 deny host 192.168.3.1
 permit any
!
end
```

---

# Esercitazione 02

### Scenario

- scarica il file [acl_estese_01](/support/5/acl_estese_es_01.pkt) e consegna la soluzione su github *|cognome|_acl_estese_es_01.pkt*

<img src="/media/acl_05.png" style="position: relative;top:-0px;right:-150px; width:550px;">


---

# Esercitazione 02

### Scenario

- Facendo riferimento alla rete in figura, implementare tramite le ACL estese la seguente policy di sicurezza:
  1. il PC1 può accedere al servizio HTTP sul server 1
  2. il PC1 non può accedere al servizio HTTPS sul server 1
  3. il PC1 può accedere al servizio HTTPS sul server 2
  4. il PC1 non può accedere al servizio HTTP sul server 2
  5. il PC2 può accedere solo al servizio HTTP sul server 1 e non può accedere a nessun altro servizio web
  6. il PC1 può pingare il server 1 ma non il server 2
  7. il PC2 può pingare il server 2 ma non il server 1
 
---

# Esercitazione 02

### Soluzione

<img src="/media/acl_06.png" style="position: relative;top:-0px;right:-150px; width:550px;">

---

# Esercitazione 02

- Riorganizziamo le regole, raggruppando tutte quelle inerenti il server 1 e 2, sdoppiando le regola:

- ### Policy Server1:
  1. il PC1 può accedere al servizio HTTP sul server 1
  2. il PC1 non può accedere al servizio HTTPS sul server 1
  3. il PC2 può accedere al servizio HTTP sul server 1 
  4. il PC2 non può accedere al servizio HTTPS sul server 1
  5. il PC1 può pingare il server 1
  6. il PC2 non può pingare il server 1 


---

# Esercitazione 02

- Riorganizziamo le regole, raggruppando tutte quelle inerenti il server 1 e 2, sdoppiando le regola:

- ### Policy Server2

  1. il PC1 può accedere al servizio HTTPS sul server 2
  2. il PC1 non può accedere al servizio HTTP sul server 2
  3. il PC2 non può accedere al servizio HTTP sul server 2 
  4. il PC2 non può accedere al servizio HTTPS sul server 2
  5. il PC1 non può pingare il server 2 
  6. il PC2 può pingare il server 2

---

# Esercitazione 02

### Soluzione

- Creo ACL per policy server1

```bash
Router#show ip access-lists 
Extended IP access list POLICY-SERVER1
    10 permit tcp host 192.168.50.1 host 142.250.50.30 eq www
    20 deny tcp host 192.168.50.1 host 142.250.50.30 eq 443
    30 permit tcp host 192.168.50.2 host 142.250.50.30 eq www
    40 deny tcp host 192.168.50.2 host 142.250.50.30 eq 443
    50 permit icmp host 192.168.50.1 host 142.250.50.30
    60 deny icmp host 192.168.50.2 host 142.250.50.30
```

<br>

- Applico la ACL all'interfaccia Fa 0/1

```bash
Router(config)#int fastEthernet 0/1
Router(config-if)#ip access-group POLICY-SERVER1 out
```

---

# Esercitazione 02

### Soluzione

- Creo ACL per policy server2

```bash
Router#show ip access-lists 
Extended IP access list POLICY-SERVER2
    10 permit tcp host 192.168.50.1 host 28.27.26.25 eq 443
    20 deny tcp host 192.168.50.1 host 28.27.26.25 eq www
    30 deny tcp host 192.168.50.2 host 28.27.26.25 eq www
    40 deny tcp host 192.168.50.2 host 28.27.26.25 eq 443
    50 deny icmp host 192.168.50.1 host 28.27.26.25
    60 permit icmp host 192.168.50.2 host 28.27.26.25
```

<br>

- Applico la ACL all'interfaccia Eth 0/0/0

```bash
Router(config)#int Ethernet 0/0/0
Router(config-if)#ip access-group POLICY-SERVER2 out
```

---

# Esercitazione 03

### Scenario

- scarica il file [acl_estese_02](/support/5/acl_estese_es_02.pkt) e consegna la soluzione su github *|cognome|_acl_estese_es_02.pkt*

<img src="/media/acl_07.png" style="position: relative;top:-0px;right:-150px; width:550px;">


---

# Esercitazione 03

### Scenario

- Facendo riferimento alla rete in figura, implementare tramite le ACL estese named, la seguente policy di sicurezza:
  1. LAN1 può accedere alla rete LAB1 ma non alla rete LAB2
  2. LAN2 può accedere sia a LAB1 che LAB2
  3. LAN3 può accedere alla rete LAB2 ma non alla rete LAB1
  4. LAB1 non può accedere a LAB2
  5. LAN1-PC2 non può accedere alla porta 3306 di LAB1-SRV3
  6. LAN3-PC1 non può accedere alla porta 11299 di LAB2-SRV2
  7. LAN 1 non può fare il ping in LAN 3
  8. LAN2-PC1 non può fare il ping a LAB1-PC1
  9. LAN2-PC2 non può fare il ping a LAB2-PC2
  10. LAN2-PC1 non può accedere a HTTP di LAB1-WS1 e HTTPS di LAB2-WS2
  11. LAN-PC2 non può accedere a HTTP di LAB2-WS2 e HTTPS di LAB1-WS1
  