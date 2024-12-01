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
version: '1.0.0'

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

  .centrato {margin: auto;}

</style>


# SISTEMI & RETI

IP address assignment - DHCP and APIPA

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

--- #slide 1

# Assegnazione indirizzi IP

- Un indirizzo IP può essere assegnato ad una scheda in modo:
  - **MANUALE**: *l'amministratore del sistema configura manualmente l'indirizzo IP per il NIC specifico*
  - **AUTOMATICO**: *l'indirizzo IP viene configurato automaticamente tramite un server o servizio esterno*

- Un indirizzo IP può essere:
  - **STATICO**: assegnato alla scheda in modo permanente
  - **DINAMICO**: assegnato alla scheda in modo temporaneao
  
--- 

# Assegnazione indirizzi IP

IP Statico


<img src="/media/dhcp00.png" class="centrato" />

<br><br>

- Normalmente un indirizzo IP assegnato manualmente è di tipo statico, in quanto una volta assegnato dall'operatore non cambia nel tempo.

--- 

# Assegnazione indirizzi IP

IP Dinamico


<img src="/media/dhcp01.png" class="centrato" />

<br>

- Un indirizzo IP assegnato in modo automatico può essere sia statico che dinamico
  - se il sistema di assegnazione assegna in modo permanente l'indirizzo IP al richiedente questo risulta statico in quanto non muta nel tempo 
  - se il sistema di assegnazione assegna in modo temporaneo l'indirizzo IP al richiedente questo risulta dinamico in quanto muta nel tempo


---

# DHCP e APIPA

Assegnazione IP automatica

- I protocolli maggiormente utilizzati per l'assegnazione automatica di un indirizzo IP sono:
  - **DHCP**: *Dynamic Host Configuration Protocol*: protocollo standard client/server per assegnare IP sia pubblici che privati (assegna anche la netmask, il default gateway e il DNS)
  - **APIPA**: *Automatic Private IP Addressing*: usato da MICRO$OFT per assegnare ad un host un indirizzo IP privato

--- 

# APIPA

- IETF ha riservato lo per lo spazio di indirizzamento **link local** la subnet **169.254.0.0/16**   
- In caso in cui l'indirizzo IP non possa essere assegnato dal DHCP, gli host M$FT assegnano autonomamente un indirizzo compreso tra 169.254.0.1 e 169.254.255.254
  
<br>

<img src="/media/dhcp03.jpg" class="centrato" width="450"/>

--- 

# APIPA

<img src="/media/dhcp03a.png" class="centrato"/>

--- 

# APIPA

Esercizio APIPA_01

- In packettracer creare una semplice configurazione in cui un PC viene automaticamente configurazto con un indirizzo APIPA
- Aggiungere uno sniffer in modo da verificare il traffico generato dall'host e comprendere il meccanismo di assegnazione automatica APIPA
- Consegnare su github il file *|cognome|_apipa.pkt*
  

<img src="/media/dhcp05.png" class="centrato" />


--- 

# DHCP

- L'assegnazione di un indirizzo IP tramite il protocollo DHCP, avviene tramite una sequenza di 4 passi (**4 way handshake**)

<br>

1. ***DHCP Discover***: il client invia in broadcast un <br> messaggio UDP *DHCPDISCOVER* con la <br> richiesta di assegnazione di un indirizzo IP  
2. ***DHCP Offer***: il server associa un indirizzo IP al <br> richiedente ed risponde con un *DHCPOFFER* <br> includendo l'IP disponibile
3. ***DHCP Request***: il client accetta l'offerta <br>  (possono essere multiple) con un messaggio<br>  *DHCPREQUEST* confermando al server<br>  l'accettazione dell'indirizzo IP
4. ***DHCP Ack***: il server effettivamente alloca l'IP al richiedente e conferma con um messaggio *DHCPACK*

<img src="/media/dhcp04.png" width="550" class="centro"/>


--- 

# DHCP

&nbsp;

**DHCP STATICO**

- Il server DHCP può allocare in modo permanente l'indirizzo IP offerto al client richiedente
- In tal caso l'indirizzo IP del client sarà di tipo STATICO in quanto non varierà nel tempo
- Se il PC effettua una nuova richiesta DHCP (reboot) il server DHCP assegnerà nuovamente lo stesso indirizzo IP assegnato precedentemente


**DHCP DINAMICO**
- Il server DHCP può allocare in modo temporaneo l'indirizzo IP offerto al client richiedente (in questo caso si definisce un **LEASE TIME**)
- In tal caso l'indirizzo IP del client sarà di tipo DINAMICO in quanto varierà nel tempo
- Infattio allo scadere del LEASE TIME, il PC effettua una nuova richiesta DHCP e il server DHCP potrà assegnare un  nuovo indirizzo IP allo stesso client richiedente


--- 

# DHCP

- Nell'ambito del networking un **servizio di rete** è tipicamente un'applicazione (Layer 7) che fornisce una specifica funzionalità spesso messa a disposizione tramite un protocollo client/server
  
<br>
<div style="color: yellow; background-color: green;padding: 10px;">
  Il DHCP è un SERVIZIO di rete
</div>
<br>

- Il DHCP normalmente "gira" su uno specifico server presente nella LAN o sul router di default della LAN

Pertanto
<div style="color: yellow; background-color: green;padding: 10px; line-height: 30px">
  Servizio e Server sono due concetti diversi.<br> 
  Il primo si riferisce alla funzionalità offerta ed al protocollo <br>
  Il secondo si riferisce fisicamente al nodo della rete che ospita il servizio
</div>

--- 

# DHCP

Configurazione del DHCP lato server (Packettracer)

- La configurazione del DHCP server in  <br> packettracer è molto semplice
- Per configurare seguire i seguenti passi
1. Instanziare un server
2. Nella tab **services** o **servizi** selezionare **DHCP**
3. Configurare tutti i campi, con particolare  <br>  attenzione a default gateway,  <br> start IP address, netmask,  <br> numero massimo utenti (client)
4. Premere **Save** per memorizzare  <br> la configurazione
5. Attivare il servizio selezionando **On**


<img src="/media/dhcp06.png" class="centro" />

--- 

# DHCP

Esercizio DHCP_01

- Creare una semplice rete che contiene 3 PC i cui indirizzi IP, netmask, default gw e DNS server vengono assegnati automaticamente tramite il protocollo DHCP
- Il servizio DHCP deve essere fornito da un server presente nella rete
- Ogni host deve essere in grado di pingare tutti gli altri host della rete
- Consegnare su github il file *|cognome|_dhcp_01.pkt*


--- 

# DHCP

Esercizio DHCP_02

- Dal proprio PC tramite lo sniffer Wireshark sniffare la propria interfaccia di rete per catturare il traffico DHCP
- Rilasciare l'indirizzo IP assegnato:
  - LINUX: sudo dhclient -i "NIC name" -r
  - WINDOWS: da un command line: ipconfig /release
- Attivare lo sniffer
- Richiedere una nuova assegnazione dell'indirizzo IP
  - LINUX: sudo dhclient -i "NIC name" 
  - WINDOWS: da un command line: ipconfig /renew
- Analizzare il flusso dei dati ed identificare i 4 messaggi del DHCP visti in precedenza
- Salvare il file in formato pcapng
- Consegnare il file di sniff *|cognome|_dhcp_02.pcapng*

--- 

# DHCP

IOS configuraztion

- Il sistema operativo IOS mette a disposizione il servizio DHCP
- Pertanto è possibile configurare il router come DHCP e quindi assegnare in modo automatico gli indirizzi IP agli host (NIC) presenti sulla rete LAN. Vediamo i passi principali per la configurazione:
<br>

1. [Opzionale] Definiamo il range di indirizzi IP che NON saranno assegnati in modo automatico
  ```bash
  ip dhcp excluded-address <IP_START> <IP_END>
  ```
  <br>

2. Creiamo un nuovo DHCP pool
  ```bash
  ip dhcp pool <Pool Name>
  ```
  <br>

3.Definiamo gli indirizzi che il DHCP assegnerà specificando la subnet IP
  ```bash
  netwrok <IP subnet> <Netwmask dotted notation>
  ```
--- 

# DHCP

IOS configuraztion


4. Specifichiamo il default gateway della LAN
  ```bash
  default-router <IP default GW>
  ```
<br>

5. Definiamo il DNS server
  ```bash
  dns-server <DNS IP>
  ```
  <br>

6. [Opzionale] Specifichiamo il domain name del DNS 
  ```bash
  ip domain-dame <DOMAIN NAME>
  ```
  <br>

--- 

# DHCP

IOS configuraztion

```bash
!
ip dhcp excluded-address 192.168.20.1 192.168.20.32
!
ip dhcp pool AGNELLI_POOL
 network 192.168.20.0 255.255.255.0
 default-router 192.168.20.254
 dns-server 8.8.8.8
ip dhcp pool test
!
!
ip domain-name AGNELLI.IT
!
```

--- 

# DHCP

IOS configuraztion

- verifichiamo lo stato del pool DHCP creato
```bash
Router#show ip dhcp pool 
Pool AGNELLI_POOL :
 Utilization mark (high/low)    : 100 / 0
 Subnet size (first/next)       : 0 / 0 
 Total addresses                : 254
 Leased addresses               : 3
 Excluded addresses             : 1
 Pending event                  : none
 
 1 subnet is currently in the pool
 Current index        IP address range                    Leased/Excluded/Total
 192.168.20.1         192.168.20.1     - 192.168.20.254    3    / 1     / 254
Pool test :
 Utilization mark (high/low)    : 100 / 0
 Subnet size (first/next)       : 0 / 0 
 Total addresses                : 511
 Leased addresses               : 0
 Excluded addresses             : 1
 Pending event                  : none
 
```

--- 

# DHCP

IOS configuraztion

- verifichiamo gli indirizzi IP assegnati automaticamente

```bash
Router#show ip dhcp  binding 
IP address       Client-ID/              Lease expiration        Type
                 Hardware address
192.168.20.33    000A.410D.65DD           --                     Automatic
192.168.20.34    0050.0FE7.5294           --                     Automatic
192.168.20.35    0001.63C5.93A5           --                     Automatic
Router#
```

--- 

# DHCP

Esercizio DHCP_03

- Creare una rete con due subnet collegate ad un router
- Ogni subnet ha  3 host che ottengono la configurazione IP via DHCP
- Configurare il router come DHCP per le due subnet
- Consegnare il file *|cognome|_dhcp_03.pkt*

--- 

# DHCP

Esercizio DHCP_04

- Creare una rete con 3 subnet collegate ad un router in configurazione ROAS
- Ogni subnet ha 3 host che ottengono la configurazione IP via DHCP
- Configurare il router come DHCP per le tre subnet
- Consegnare il file *|cognome|_dhcp_04.pkt*

--- 

# Linux DHCP Server

- Come possiamo immaginare uno dei servizi DHCP più diffusi al mondo è l'implementazione su Linux
- Vediamo allora come configurare il servizio DHCP su Linux in modo da assegnare gli indirizzi IP in una LAN
- Esistono vari implementazioni per Linux ma noi vedremo quella fornita da **ISC**
- [ISC](https://www.isc.org/)
- ISC fornisce due importanti progetti OpenSource
  - ISC BIND 9
  - ISC DHCP
- che sono il DNS e il DHCP maggiormente utilizzati su Internet
- Vediamo di seguito l'installazione e configurazione di ISC DHCP su Linux
  
--- 

# Linux DHCP Server

1- installiamo in servizio isc dhcp tramite il packet manager della nostra distribuzione

```bash
sudo apt update
sudo apt install isc-dhcp-server
```
2- Facciamo una copia del file di config per sicurezza e prepariamoci per la configurazione from scratch

```bash
cp dhcpd.conf dhcpd.conf.ORIG
cat /dev/null > dhcpd.conf
```

3- Creiamo la configurazione del servizio editando il file ***/etc/dhcp/dhcpd.conf***

```bash
default-lease-time 900;
max-lease-time 3600;
authoritative;
subnet 172.18.0.0 netmask 255.255.0.0 {
 range 172.18.100.1 172.18.254.253;
 option routers 172.18.254.254;
 option domain-name-servers 8.8.8.8;
 option domain-name "myLAN.local";
} 
```

--- 

# Linux DHCP Server

- Analizziamo la configurazione
- *default-lease-time*: è la durata in secondi di default per cui viene concesso un indirizzo IP se il client non richiede una durata specifica
- *max-lease-time*: è il tempo massimo in secondi per cui viene concesso un indirizzo IP in caso il client effettui una richiesta con una durata superiore
- *authoritative*: indica che la risposta di questo DHCP è **autoritativa** e che deve avere la precedenza rispetto ad altri messaggi sulla LAN (potrei avere più di un DHCP server)
- *subnet*: sezione che specifica la configurazione per una specifica subnet (IP e Netmask)
  - *range*: indica il range di indirizzi IP che possono essere asegnati
  - *routers*: indica il default gateway della LAN
  - *domain-name-server*: indica una lista di DNS raggiungibili dalla LAN
  - *domain-name*: l'eventuale nome di dominio della LAN
--- 

# Linux DHCP Server

- Per terminare la configurazione è necessari oindicare al servizio DHCP su quale interfaccia attivarsi

4- Editare il file ***/etc/default/isc-dhcp-server***

```bash
INTERFACESv4="eth0"
```

- ovviamente inserire il nome dell'interfaccia di rete del proprio server

- A questo punto la configurazione del servizio DHCP è terminata
- E' buona regola assegnare al server DHCP un indirizzo IP statico editando il file ***/etc/network/interfaces***

```bash
auto eth0
iface eth0 inet static
  address 192.168.100.10/24 
```

- oppure attraverso il Network Manager
 
--- 

# Linux DHCP Server

- Applichiamo la configurazione dell'IP statico facendo ripartire il servizio di rete
  
```bash
sudo nmcli networking off
sudo nmcli networking on
```

- Facciamo ripartire il servizio DHCP

```bash
sudo systemctl restart isc-dhcp-server.service
```

- Verifichiamo lo stato del servizio 

```bash
sudo systemctl status isc-dhcp-server.service 
```

--- 

# DHCP

Esercizio DHCP_05

- Creare una rete fisica con 1 switch, 1 server Linux DHCP e almeno 2 client
- Configurare il servizio DHCP sul server Linux
- Verificare che i client richiedano ed ottengano l'indirizzo IP in modo corretto
- Consegnare il file *|cognome|_dhcpd.conf*

