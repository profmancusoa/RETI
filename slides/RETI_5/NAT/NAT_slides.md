---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080
background: cover.webp
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
version: "1.0.1"
---

# SISTEMI & RETI

Network Address Translation

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# NAT

Network Address Translation

- Il `NAT` è un meccanismo che permette di modificare l'indirizzo IP dei pacchetti in transito attraverso apparati di rete - come router o firewall
- Il meccanismo del NAT è diventato fondamentale nel momento in cui gli indirizzi IP del protocollo IPv4 hanno cominciato a scarseggiare
- Il NAT è stato quindi utilizzato per poter nascondere dietro un unico indirizzo pubblico decine e decine di indirizzi privati (e quindi altrettanti device).

<br>

<img src="/media/NAT_01.jpg" style="width:500px;margin:auto; margin-top: 20px;"/>

---

# NAT

Definizioni degi indirizzi NAT

- `Inside LOCAL`: indirizzi della rete interna, unici soltanto all'interno della sottorete in cui si trovano.
- `Outside LOCAL`: indirizzo dell'host di destinazione, visto dalla rete interna (di solito = Outside GLOBAL)
- `Inside GLOBAL`: indirizzi (generalmente pubblici) assegnati agli host della rete interna attraverso il NAT. Il caso più diffuso è quello in cui tutta la rete locale esce con unico inside global address, ossia con **NAT overload**. Gli indirizzi inside global sono quelli con cui i PC di una rete privata si presentano su Internet.
- `Outside GLOBAL`: indirizzo dell'host di destinazione, così come viene visto nella rete esterna (global).

<img src="/media/NAT_02.jpg" style="width:450px;margin:auto; margin-top:20px;"/>

---

# NAT

Definizioni degi indirizzi NAT

<img src="/media/NAT_03.jpg" style="width:700px;margin:auto; margin-top:-100px;"/>

---

# NAT

Tipi di NAT

- Quindi in base alle definizioni precedenti possiamo 3 tipi di NAT:

1. `NAT 1-to-1` Il NAT 1-to-1 o `STATICO` associa un IP della LAN con un IP della WAN

2. `NAT many-to-1` Il NAT Many-to-1 o `OVERLOAD` associa una lista di ip sulla rete “inside” all’unico IP dell’interfaccia “outside”. **E' la funzione di NAT più utilizzata**, da abilitare quando si ha a disposizione un solo indirizzo IP pubblico, o comunque quando si vuole che tutti gli host si presentino su Internet sempre con lo stesso IP

3. `NAT many-to-many` Il NAT many-to-many o `DINAMICO` associa gli indirizzi IP della LAN a più indirizzi IP pubblici (`pool`). Le associazioni saranno dinamiche, nel senso che ogni host interno che accede a Internet sarà traslato nel primo IP pubblico disponibile all'interno del pool

---

# NAT

Tipi di NAT

`NAT 1-to-1` Il NAT 1-to-1 o `STATICO` associa un IP della LAN con un IP della WAN

<img src="/media/NAT_06.png" style="width:700px;margin:auto; margin-top:20px;"/>

---

# NAT

Tipi di NAT

`NAT many-to-1` Il NAT Many-to-1 o `OVERLOAD` associa una lista di ip sulla rete “inside” all’unico IP dell’interfaccia “outside”

<img src="/media/NAT_04.png" style="width:700px;margin:auto; margin-top:20px;"/>

---

# NAT

Tipi di NAT

`NAT many-to-many` Il NAT many-to-many o `DINAMICO` associa gli indirizzi IP della LAN a più indirizzi IP pubblici (`pool`)

<img src="/media/NAT_05.png" style="width:700px;margin:auto; margin-top:20px;"/>

---

# NAT

Configurazione Generale

- Per impostare un'interfaccia come `NAT Inside`

<br>

```bash
Router(config-if)#ip nat inside
```

<br><br>

- Per impostare un'interfaccia come `NAT Outside`

<br>

```bash
Router(config-if)#ip nat outside
```

---

# NAT

Configurazione 1-to-1

- Per configurare la traslazione degli indirizzi IP sorgente `SOURCE NAT - SNAT`

<br>

```bash
Router(config)#ip nat inside source static <IP_locale> <IP_globale>
```

<br>

- Traduce l'indirizzo sorgente dei pacchetti che vanno dall'interno all'esterno.
- Traduce l'indirizzo destinazione dei pacchetti che vanno dall'esterno all'interno.

<br>

<img src="/media/NAT_07.png" style="width:600px;margin:auto;"/>

---

# NAT

Configurazione 1-to-1

- Per configurare la traslazione degli indirizzi IP destinazione `DESTINATITON NAT - DNAT`

<br>

```bash
Router(config)#ip nat outside source static <IP_locale> <IP_globale>
```

<br>

- Traduce l'indirizzo destinazione dei pacchetti che vanno dall'interno verso l'esterno.
- Traduce l'indirizzo sorgente dei pacchetti che vanno dall'esterno verso l'interno.

<br>

<img src="/media/NAT_08.png" style="width:600px;margin:auto;"/>

---

# NAT

Configurazione many-to-1

- Per configurare il `NAT Overload` è necessario definire una **ACL** che definisce quali host o quale sottorete saranno processati dal NAT

<br>

```bash
Router(config)#access-list <numero_ACL> permit <subnet> <wildcard>
Router(config)#ip nat inside source list <numero_ACL> interface <interfaccia> overload
```

<br>

<img src="/media/NAT_04.png" style="width:500px;margin:auto;"/>

---

# NAT

Configurazione many-to-many

- Per configurare il `NATT Dinamico` è necessario definire un **pool** di indirizzi outside
- Come per il many-to-one è anche necessario definire un ACL che regola quali host o sottorete saranno processati dal NAT

<br>

```bash
Router(config)#ip nat pool <nome_pool> <ip_iniziale> <ip_finale> netmask <netmask>
Router(config)#access-list <numero_ACL> permit <subnet> <wildcard>
Router(config)#ip nat inside source list <numero_ACL> pool <nome_pool>
```

<br>

<img src="/media/NAT_05.png" style="width:500px;margin:auto;"/>

---

# Carrier Grade NAT

- Il NAT di livello carrier (CGN o CGNAT), noto anche come NAT su larga scala (LSN), è un tipo di traduzione degli indirizzi di rete (NAT) utilizzato dagli ISP nella progettazione di reti IPv4.
- Con CGNAT, i siti finali, in particolare le reti residenziali, sono configurati con indirizzi di rete privati ​permettendo un immenso risparmio di indirizzi IP.
- Questo meccanismo consente la condivisione di piccoli pool di indirizzi pubblici tra molti utenti finali . Ciò ripete essenzialmente la tradizionale funzione NAT presso la sede del cliente a livello di ISP.

<img src="/media/NAT_15.png" style="width:400px;margin:auto;"/>

---

# Carrier Grade NAT

RFC 6598 - IANA-Reserved IPv4 Prefix for Shared Address Space

- Questo RFC riserva un blocco di indirizzi IP per gli operatori ISP per permettere di implementare il Carrier Grade NAT.
- Questi indirizzi non vanno confusi con quelli tradizionali specificati dal RFC 1918 (10.0.0.0, 172.16.0.0, 192.168.0.0)

<br><br>

<Banner padding=20px>
 Lo spazio di indirizzi riservati al CGN è 100.64.0.0/10
</Banner>

---

# Carrier Grade NAT

- In tal modo si viene a creare un doppio livello di NAT
- Il primo livello avviene a casa dell'utenet residenziale
- Qui il NAT trasforma indirizzi privatti (es: 192.168.x.x) in un indirizzo CGN
- Ciò è necessario alttrimenti gli indirizzi privati residenziali dovrebbero essere univoci
- Al contrario in tal modo ciò che è univoco è l'indirizzo CGN assegnato ad ogni route casalingo
- Il secondo NAT avviene nella rete del ISP che traduce (many-to-many) gli indirizzi CGN in indirizzi pubblici di proprietà del ISP stesso

<img src="/media/NAT_16.png" style="width:450px;margin:auto; margin-top:-30px;margin-left:230px;"/>

---

# Carrier Grade NAT

- [CGNAT](../06_nat-CGN.pkt)

<img src="/media/NAT_17.png" style="width:900px;margin:auto; margin-top:0px;"/>

---

# Carrier Grade NAT

<img src="/media/NAT_18.png" style="width:900px;margin:auto; margin-top:0px;"/>

---

# NAT

Esercitazione_01 - 1-to-1

- [Eserciatzione_01 - NAT 1-to-1](../01_nat-one2one_studente.pkt)
- Partendo dalla rete rappresenttatta nella figura, si richiede di configurare il router R1 in modo che permetta al PC1 di raggiungere Intetrnet e di potersi collegare al Web Server di Google
- Si suggerisce di verificare la corretttezza della configurazione di tutti gli host e apparati presenti nella rete
- Consegnare su github il file |cognome|\_01_nat-one2one.pkt

<br>

<img src="/media/NAT_09.png" style="width:900px;margin:auto;"/>

---

# NAT

Esercitazione_02 many-to-1

- [Esercitatzione_02 - NAT many-to-1](../02_nat-many2one_studente.pkt)
- Partendo dalla rete rappresenttatta nella figura, si richiede di configurare il router R1 in modo che permetta a tutta la subnett 192.168.1.0/24 di raggiungere Intetrnet e di potersi collegare al Web Server di Google
- Si suggerisce di verificare la corretttezza della configurazione di tutti gli host e apparati presenti nella rete
- Consegnare su github il file |cognome|\_02_nat-many2one.pkt

<br>

<img src="/media/NAT_09.png" style="width:900px;margin:auto;"/>

---

# NAT

Esercitazione_03 many-to-1

- [Esercitazione_03 NAT many-to-1 filtered](../03_nat-many2one-filtered_studente.pkt)
- Partendo dalla rete rappresenttatta nella figura, si richiede di configurare il router R1 in modo che permetta a tutta la subnett 192.168.1.0/24, tranne il PC3, di raggiungere Intetrnet e di potersi collegare al Web Server di Google
- Si suggerisce di verificare la corretttezza della configurazione di tutti gli host e apparati presenti nella rete
- Consegnare su github il file |cognome|\_03_nat-many2one-filtered.pkt

<br>

<img src="/media/NAT_10.png" style="width:900px;margin:auto;"/>

---

# NAT

Esercitazione_04 many-to-many

- [Esercitazione_04 NAT many-to-many](../04_nat-many2many_studente.pkt)
- Partendo dalla rete rappresenttatta nella figura, si richiede di configurare il router R1 in modo che permetta a tutta la subnett 192.168.1.0/24 di raggiungere Intetrnet tramite un pool di ip pubblici e di potersi collegare al Web Server di Google.
- Si suggerisce di verificare la corretttezza della configurazione di tutti gli host e apparati presenti nella rete
- Consegnare su github il file |cognome|\_04_nat-many2many.pkt

<br>

<img src="/media/NAT_11.png" style="width:900px;margin:auto;"/>

---

# NAT

Port Forwarding

- Il [Port Forwarding](../05_nat-static-PAT.pkt) è utile quando vogliamo accedere ad un servizio su un server che ha un indirizzo privato
- Per accedere al servizio abbiamo bisogno di un router che espone un `VIP` (**Virtual IP address**)
- In tal modo i client accederanno al servizio attraverso l'indirizzo VIP, il quale subirà un Por tForwarding verso il vero server intterno alla LAN o DMZ

<img src="/media/NAT_12.png" style="width:900px;margin:auto;"/>

---

# NAT

Port Forwarding

<img src="/media/NAT_13.png" style="width:800px;margin:auto;"/>

---

# NAT

Port Forwarding

<img src="/media/NAT_14.png" style="width:900px;margin:auto;"/>

---

# NAT

Port Forwarding

```bash
!
interface GigabitEthernet8/0
 ip address 200.100.50.25 255.255.255.0
 ip nat outside
 duplex auto
 speed auto
!
interface GigabitEthernet9/0
 ip address 192.168.100.254 255.255.255.0
 ip nat inside
 duplex auto
 speed auto
!
ip nat inside source static tcp 192.168.100.1 80 200.100.50.25 80
ip classless
ip route 0.0.0.0 0.0.0.0 200.100.50.24
!
ip flow-export version 9
!
```
