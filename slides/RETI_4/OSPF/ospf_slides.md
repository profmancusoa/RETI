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



# SISTEMI & RETI

OSPF

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

<!-- https://www.geeksforgeeks.org/differences-between-ripv1-and-ripv2/ -->

---

# OSPF   

Esercitazione #1

- In questa esercitazione configuriamo il routing OSPF intra area
- Vediamo quali sono i comandi principali per configurar in modo corretto il protocollo di routing OSPF
  

<img src="/media/ospf_01.png" width="800"/>

---

# OSPF   

Esercitazione #1

- Il subnetting non viene spiegato in quanto a questo punto dell'anno tutti gli studenti sono in grado di creare il piano di indirizzamenti di una rete usando il subnetting VLSM
- La configurazione degli indirizzi IP su tutte le interfacce non viene riportata in quanto non parte di questa lezione
- I comandi principali per la configurazione di OSPF sono:

```bash
R# router ospf <PROCESS ID> 
# è possibile avere più istanze/processi OSPF in parallelo

R# router-id <ID> # normalmente in dotted quad notation

R# network <NET> <WILD CARD> area <AREA ID> 
# bisogna indicare a OSPF quali reti si vuole fare l'advertising

R# show ip ospf  neighbor  
# visualizza le informazioni sui router adiacenti nel dominio OSPF

R# show ip ospf 
# visualizza le informazioni relative al processo OSPF
```

---

# OSPF   

Esercitazione #1

- Cisco IOS in molti comandi richiede l'inserimento di una **WILD CARD BITS**
- La WILD CARD BITS è una maschera a 32 bit che indica al router quali bit dell'indirizzo a cui si applica devono essere presi in considerazione
- Se un bit nella WILD CARD è a 0 allora il corrispondente bit nell'indirizzo verrà preso in considerazione
- Se un bit  nella WILD CARD è a 1 allora il corrispondente bit nell'indirizzo NON verrà preso in considerazione
- In altre parole la WILD CARD MASK è l'opposto della NETMASK
- **Pertanto la WILD CARD MASK si calcola semplicemente sottraendo la NETMASK a 255.255.255.255**


---

# OSPF   

Esercitazione #1

- Esempi

<img src="/media/ospf_02.png" width="800"/>


---

# OSPF   

Esercitazione #1

- Esempi

<img src="/media/ospf_03.png" width="800"/>



---

# OSPF   

Esercitazione #1

- Vediamo ora la configurazione OSPF per il Router R1

```bash
router ospf 1
 router-id 1.1.1.1
 log-adjacency-changes
 network 172.16.16.0 0.0.15.255 area 0
 network 172.16.0.0 0.0.0.3 area 0
```

---

# OSPF   

Esercitazione #1

- Vediamo otra la configurazione OSPF per il Router R2

```bash
router ospf 2
 router-id 2.2.2.2
 log-adjacency-changes
 network 172.16.32.0 0.0.15.255 area 0
 network 172.16.0.0 0.0.0.3 area 0
```

---

# OSPF   

Esercitazione #1

```bash
R1#show ip ospf neighbor 


Neighbor ID     Pri   State           Dead Time   Address         Interface
2.2.2.2           1   FULL/DR         00:00:39    172.16.0.2      FastEthernet8/0
```

<br>

```bash
R1#show ip route 
Codes: C - connected, S - static, I - IGRP, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area
       * - candidate default, U - per-user static route, o - ODR
       P - periodic downloaded static route

Gateway of last resort is not set

     172.16.0.0/16 is variably subnetted, 3 subnets, 2 masks
C       172.16.0.0/30 is directly connected, FastEthernet8/0
C       172.16.16.0/20 is directly connected, FastEthernet9/0
O       172.16.32.0/20 [110/2] via 172.16.0.2, 00:21:42, FastEthernet8/0
```

---

# OSPF   

Esercitazione #1

```bash
R2#show ip ospf neighbor 


Neighbor ID     Pri   State           Dead Time   Address         Interface
1.1.1.1
```

<br>

```bash
R2#show ip route 
Codes: C - connected, S - static, I - IGRP, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area
       * - candidate default, U - per-user static route, o - ODR
       P - periodic downloaded static route

Gateway of last resort is not set

     172.16.0.0/16 is variably subnetted, 3 subnets, 2 masks
C       172.16.0.0/30 is directly connected, FastEthernet8/0
O       172.16.16.0/20 [110/2] via 172.16.0.1, 00:22:12, FastEthernet8/0
C       172.16.32.0/20 is directly connected, FastEthernet9/0
```



---

# OSPF   

Esercitazione #1

- Dal PC1 facciamo ping verso il PC2

```bash
C:\>ping 172.16.32.1

Pinging 172.16.32.1 with 32 bytes of data:

Reply from 172.16.32.1: bytes=32 time<1ms TTL=126
Reply from 172.16.32.1: bytes=32 time<1ms TTL=126
Reply from 172.16.32.1: bytes=32 time<1ms TTL=126
Reply from 172.16.32.1: bytes=32 time<1ms TTL=126
```


---

# OSPF   

Esercitazione #1

- In modo analogo facendo ping dal PC2 al PC1

```bash
C:\>ping 172.16.16.1

Pinging 172.16.16.1 with 32 bytes of data:

Reply from 172.16.16.1: bytes=32 time<1ms TTL=126
Reply from 172.16.16.1: bytes=32 time<1ms TTL=126
Reply from 172.16.16.1: bytes=32 time<1ms TTL=126
Reply from 172.16.16.1: bytes=32 time=6ms TTL=126
```

---

# OSPF   

Esercitazione #2

- Vediamo ora come estendere la configurazione OSFP per una rete multi area
- Data la seguente rete di un AS, configurare l'OSPF per tutte le zone

<img src="/media/ospf_04.png" width="600"/>


- Consegnare il file generato da packet tracer con il nome *|cognome|_ospf_multiarea02.pkt*


---

# OSPF   

Esercitazione #3

- Data la seguente rete di un AS, configurare l'OSPF per tutte le zone

<img src="/media/ospf_05.png" width="400"/>


- Hai a disposizione la seguente rete per l’indirizzamento: 192.168.45.0/24
- Consegnare il file generato da packet tracer con il nome *|cognome|_ospf_multiarea03.pkt*




