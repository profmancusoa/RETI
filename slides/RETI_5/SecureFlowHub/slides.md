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

# Secure Flow Hub

Sicurezza sulla gestione dei flussi di connessione

NAT - Port Forwarding
<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
transition: fade-out
---

# NAT - Network Address Translation

 - E' progettato per la conservazione degli indirizzi IP.
 
 Il protocollo NAT funziona su un router [o su un host linux come vedremo in seguito], connettendo solitamente due reti, e converte gli indirizzi privati della LAN in indirizzi conosciuti alla WAN, prima che i pacchetti vengano inoltrati a un'altra rete.

<img src="/media/NAT.png" style="width:700px;margin:auto;"/>


---
transition: fade-out
---

# NAT - Network Address Translation

Quanto visto in precedenza è un esempio di NAT statico .

Nel NAT vi è un **RAPPORTO 1:1** tra ip del server di destinazione e l'indirizzo IP del client.

Quindi per fare il NAT di *n* indirizzi privati ci serviranno altrettanti indirizzi pubblici. 

Come per l'assegnazione degli indirizzi privati, il NAT assegna i suoi indirizzi con 2 tecniche differenti:
 - **Static NAT**
 - **Dynamic NAT**

Il primo ha a disposizione 1 solo indirizzo pubblico e a qualunque pacchetto in uscita assegnerà tale indirizzo. 

Il secondo possiede un *pool* di indirizzi pubblici tra cui sceglierne 1 da assegnare. 

---
transition: fade-out
---

# SNAT e DNAT
Source NAT e Destination NAT

### SNAT
Viene utilizzato quando si ha necessità o si vuole cambiare l'indirizzo IP del sorgente. 

Va eseguito nella fase di **POSTROUTING**, ovvero prima che il pacchetto venga immesso nella rete, così facendo il pacchetto non verrà visto come malformato o modificato ma sarà considerato invariato. 

<img src="/media/SNAT_example.png" style="width:500px;margin:auto;"/>

---
  transition: fade-out
---

# SNAT e DNAT
Source NAT e Destination NAT

### DNAT
Viene particolarmente utilizzato quando si hanno più server in DMZ e un solo firewall con annesso IP pubblico che accede alla WAN.<br>
Il DNAT in questo caso funzionerà come barriera contro gli attachi dall'esterno filtrando il traffico destinato alla DMZ, il firewall farà il NAT solo per i servizi HTTP e FTP. 

Il DNAT va eseguito nella fase di PREROUTING ovvero prima del vero e prorio instradamento. 

<img src="/media/DNAT_example.png" style="width:500px;margin:auto;"/>

---
  transition: fade-out
---

# Static SNAT
Esercitazione: "nascondere" l'ip sorgente sostituendola con uno scelto dal router

La rete:
<img src="/media/static_NAT_net.png" style="width:350px;margin:auto;"/>

Situazione pre-NAT:
<img src="/media/pre-static-NAT.png" style="width:100%;margin:auto;"/>
L'IP del mittente è "in chiaro", non viene modificato dal router. 

---
transition: fade-out
---

# Static SNAT
Esercitazione: configurazione del NAT

Affinchè il NAT funzioni bisogna attivare l'IP forwarding:
```bash
  sudo su
  echo 1 > /proc/sys/net/ipv4/ip_forward
```

Ora utilizizzando iptables configuriamo nel router il SNAT [per mascherare IP sorgente]:
```bash
  iptables -t nat -A POSTROUTING -o ens5 -j SNAT --to-source 192.168.69.69
```
-t definisce la tabella da definire (quella del NAT in questo caso)

-A aggiunge una regola alla tabella (POSTROUTING)

-o definisce l'interfaccia su cui applicare la regola (quella del lato della WAN)

-j specifica il target della regola

---
transition: fade-out
---

# Static SNAT
Esercitazione

Il pacchetto che il server riceverà sarà presenterà ora un diverso IP sorgente:

<img src="/media/SNAT_works.png" style="width:100%;margin:auto;"/>

Nonostante questo il PC sorgente riuscirà a completare il ping correttamente perchè il router provedderà a riscambiare l'indirizzo. 

---
transition: fade-out
---

# [Man](https://man7.org/linux/man-pages/man8/iptables.8.html)
Comandi utili per la gestione del NAT tramite iptables

Visualizzare le tabelle NAT:
```bash
  iptables -t nat -L
```

Pulire le tabelle NAT:
```bash
  iptables -t nat -F
```