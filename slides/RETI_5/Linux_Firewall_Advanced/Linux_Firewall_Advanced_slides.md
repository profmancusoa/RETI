---
theme: default
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

# Advanced Linux Firewall

Sicurezza sulla gestione dei flussi di rete

NAT - Port Forwarding
<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# NAT - Network Address Translation

 - E' progettato per la conservazione degli indirizzi IP.
 - Il protocollo NAT funziona su un router [o su un host linux come vedremo in seguito], connettendo solitamente due reti, e converte gli indirizzi privati della LAN interna in indirizzi appartenenti alla WAN esterna, prima che i pacchetti vengano inoltrati a un'altra rete.

<img src="/media/NAT.png" style="width:600px;margin:auto; margin-top:30px;"/>


---

# NAT - Network Address Translation

- Quanto visto in precedenza è un esempio di NAT statico .
- Nel NAT vi è un **RAPPORTO 1:1** tra IP  del server di destinazione e l'indirizzo IP del client.
- Quindi per fare il NAT di *n* indirizzi privati ci serviranno altrettanti indirizzi pubblici. 

- Come per l'assegnazione degli indirizzi privati, il NAT assegna i suoi indirizzi con 2 tecniche differenti:
  - **Static NAT**
  - **Dynamic NAT**

- Il primo ha a disposizione 1 solo indirizzo pubblico e a qualunque pacchetto in uscita assegnerà tale indirizzo. 
- Il secondo possiede un *pool* di indirizzi pubblici tra cui sceglierne 1 da assegnare. 

---

# Netfilter 

Linux Kernel Firewall

`Netfilter` 
- è un framework fornito dal kernel Linux che consente di implementare varie operazioni relative alla rete sotto forma di gestori personalizzati. 
- Netfilter offre varie funzioni e operazioni per il **filtraggio dei pacchetti**, **la traduzione degli indirizzi di rete** e **la traduzione delle porte**

<br>

`iptables` 
- è il più popolare firewall di linux che inetragisce con NetFiletr a livello kernel.
- iptables è composto da un programma spazio utente e da una serie di LKM (Linux Kernel Modules)
- Quest'architettura permette ad iptables di raggiungere elevati livelli di flessibilità e praticità

---

# Netfilter 

Tables e Chains

- Le regole del firewall sono organizzate in `tables` che hano il compito di classificare,raggruppare e gestire le regole che hanno tutte lo stesso scopo
  
- Ci sono 4 tabelle
  - **FILTER**: La tabella di filtraggio è la tabella predefinita e gestisce le regole per il filtraggio del traffico di rete. Le regole in questa tabella determinano se un pacchetto dovrebbe essere accettato, rifiutato o instradato verso altre regole
  
  - **NAT**: La tabella NAT (Network Address Translation) è responsabile della gestione della traduzione degli indirizzi di rete, spesso utilizzata per consentire la condivisione di una singola connessione Internet tra più dispositivi in una rete locale
  
  - **MANGLE**:  La tabella Mangle è utilizzata per modificare le informazioni nei pacchetti di rete, come i valori TTL (Time To Live) o le marcature di pacchetto
  
  - **RAW**: delegatta a manipolazioni di basso livello dei pacckettit (marking, ...) 

---

# Netfilter 

Tables e Chains

- Ogni tabella organizza le sue regole suddividendole in una serie di **chains** 
- Le *chains* sono sequenze ordinate di regole all'interno di ciascuna tabella. Esse determinano il percorso che un pacchetto di rete seguirà attraverso le regole del firewall
- In altre parole una *chain* contiene una serie di regole specifiche per una determinata funzionalità all'interno della propria *table* di appartenenza

<img src="/media/NAT_01.png" style="width:550px;margin:auto; margin-top:0px;"/>

---

# Netfilter 

Tables e Chains

<img src="/media/NAT_02.png" style="width:850px;margin:auto; margin-top:40px;"/>


---

# Netfilter 

Tables e Chains


**FILTER**


- **INPUT**: Filtra i pacchetti in ingresso al Firewall

- **OUTPUT**: Filtra i pacchetti generati localmente o comunque in uscita dal firewall

- **FORWARD**: Filtra i pacchetti in transito tra due NIC diversi

---

# Netfilter 

Tables e Chains

**NAT**
- **PREROUTING**: altera i pacchetti prima del routing. cioè la traduzione del pacchetto avviene immediatamente dopo che il pacchetto arriva al sistema (e prima dell'instradamento). Ciò aiuta a tradurre l'indirizzo IP di destinazione dei pacchetti in qualcosa che corrisponda al routing sul server locale. Viene utilizzato per DNAT (NAT di destinazione).

- **POSTROUTING**: Modifica i pacchetti dopo il routing. cioè la traduzione dei pacchetti avviene quando i pacchetti lasciano il sistema. Ciò aiuta a tradurre l'indirizzo IP di origine dei pacchetti in qualcosa che potrebbe corrispondere al routing sul server di destinazione. Viene utilizzato per SNAT (NAT di origine).

- **OUTPUT**: NAT per i pacchetti generati localmente sul firewall.

---

# Netfilter 

Tables e Chains

**MANGLE**

- **PREROUTING**

- **OUTPUT**

- **FORWARD**

- **INPUT**

- **POSTROUTING**

---

# Netfilter 

Tables e Chains

<img src="/media/NAT_03.png" style="width:850px;margin:auto; margin-top:0px;"/>

---

# SNAT e DNAT
Source NAT e Destination NAT

### SNAT

- Viene utilizzato quando si ha necessità o si vuole cambiare l'indirizzo IP del sorgente. 
- Va eseguito nella fase di **POSTROUTING**, ovvero prima che il pacchetto venga immesso nella rete, così facendo il pacchetto non verrà visto come malformato o modificato ma sarà considerato invariato. 

<img src="/media/SNAT_example.png" style="width:500px;margin:auto; margin-top:30px;"/>

---

# SNAT e DNAT
Source NAT e Destination NAT

### DNAT

- Viene particolarmente utilizzato quando si hanno più server in DMZ e un solo firewall con annesso IP pubblico che accede alla WAN.<br>
- Il DNAT in questo caso funzionerà come barriera contro gli attachi dall'esterno filtrando il traffico destinato alla DMZ, il firewall farà il NAT solo per i servizi HTTP e FTP. 

- Il DNAT va eseguito nella fase di PREROUTING ovvero prima del vero e prorio instradamento. 

<img src="/media/DNAT_example.png" style="width:500px;margin:auto;"/>

---

# Static SNAT
Esercitazione: "nascondere" l'ip sorgente sostituendola con uno scelto dal router

La rete:
<img src="/media/static_NAT_net.png" style="width:350px;margin:auto;"/>

- Situazione pre-NAT:

<img src="/media/pre-static-NAT.png" style="width:100%;margin:auto;"/>

- L'IP del mittente è "in chiaro", non viene modificato dal router. 

---

# Static SNAT

Esercitazione: configurazione del NAT

- Affinchè il NAT funzioni bisogna attivare l'IP forwarding:

<br>

```bash
  sudo su
  echo 1 > /proc/sys/net/ipv4/ip_forward
```

<br>

- Ora utilizizzando iptables configuriamo nel router il SNAT [per mascherare IP sorgente]:

<br>

```bash
  iptables -t nat -A POSTROUTING -o ens5 -j SNAT --to-source 192.168.69.69
```

<br>

-t definisce la tabella da definire (quella del NAT in questo caso)

-A aggiunge una regola alla tabella (POSTROUTING)

-o definisce l'interfaccia su cui applicare la regola (quella del lato della WAN)

-j specifica il target della regola

---

# Static SNAT

Esercitazione

- Il pacchetto che il server riceverà sarà presenterà ora un diverso IP sorgente:

<br>

<img src="/media/SNAT_works.png" style="width:100%;margin:auto;"/>

<br>

- Nonostante questo il PC sorgente riuscirà a completare il ping correttamente perchè il router provedderà a riscambiare l'indirizzo. 

---

# Dynamic SNAT

Esercitazione

- Ora invece "nascondiamo" i nostri indirizzi privati usando un ***pool*** di indirizzi specifici. 

<br>

```bash
  iptables -t nat -A POSTROUTING -o ens5 -j SNAT --to-source 192.168.69.1-192.168.69.69
```

<br>

- Ping di PC1 [192.168.1.1]:

<img src="/media/dynamic_SNAT_pc1.png" style="width:100%;margin:auto;"/>

<br>

- Ping di PC2 [192.168.1.2]:

<img src="/media/dynamic_SNAT_pc2.png" style="width:100%;margin:auto;"/>

---

# Dynamic SNAT

Esercitazione

  - Ping di PC1 e PC2:

<img src="/media/dynamic_SNAT_pc1-2.png" style="width:100%;margin:auto;"/>

<br>

- Questa tipologia di NAT è utile nell'utilizzo interno di una rete ma applicare il NAT dinamico per inviare i pacchetti nella WAN necessiterebbe di un gran numero di indirizzi pubblici, questo porterebbe ad un costo della rete spropositato. 

---

# DNAT

Destination NAT

- Con il DNAT rendiamo visibile il nostro server delle DMZ a tutto l'Internet. <br>
A differenza di prima ora proveremo a collegarci rispettivamente a un echo server UDP ed uno TCP che risiedono nella DMZ della nostra LAN. 

- Situazione iniziale:

<img src="/media/tcp_refused.png" style="width:80%;margin:auto;"/>

- Per quanto riguarda il server UDP, non essendoci connessione, non restituisce un errore ma la comunicazione non avviente:

<img src="/media/udp_failed.png" style="width:80%;margin:auto;"/>

---

# DNAT

Esercitazione

- Ora configuriamo il DNAT facendo si che i pacchetti avete protocollo TCP siano reiderizzati al server TCP [192.168.1.1] invece i pacchetti UDP al corrispettivo server [192.168.1.2]. 

<br>

```bash
  iptables -t nat -A PREROUTING -p tcp -d 10.0.0.100 -j DNAT --to-destination 192.168.1.1
```

<br>

```bash
  iptables -t nat -A PREROUTING -p udp -d 10.0.0.100 -j DNAT --to-destination 192.168.1.2
```

<br>

-p indica il protocollo del pacchetto

-d la destinazione che assumerà il paccheto una volta reinviato

Così facendo i nostri 2 echo server sono raggiungibili dalla WAN attraverso un solo IP pubblico. 
---

# DNAT

Esercitazione

<img src="/media/tcp_works.png" style="width:80%;margin:auto;"/>
<br>
<img src="/media/udp_works.png" style="width:80%;margin:auto;"/>

---

# [Man](https://man7.org/linux/man-pages/man8/iptables.8.html)

Comandi utili per la gestione del NAT tramite iptables

- Su certe distro potrebbe non essere presente ```iptables``` ma bastera scrive ```/sbin/iptables```. 

- Attivare l'IP forwarding:

```bash
  echo 1 > /proc/sys/net/ipv4/ip_forward
```
<br>

- Visualizzare le tabelle NAT:

```bash
  iptables -t nat -L
```

<br>

- Pulire le tabelle NAT:

```bash
  iptables -t nat -F
```

--- 

# Ringraziamenti

Grazie

- Si ringrazio lo studentte Marco Cellini (5INFO 2023/2024) per il contributo a queste slide