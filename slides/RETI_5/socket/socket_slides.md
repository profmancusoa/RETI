---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
#background: https://source.unsplash.com/collection/94734566/1920x1080
background: /media/socket01.png
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
materia: "RETI"
as: "2022/2023"
version: '1.0.0'

---  


https://informatica.unibas.it/moodle/pluginfile.php/19562/mod_resource/content/1/07%20-%20Programmazione%20delle%20socket.pdf

# SISTEMI & RETI

La comunicazione client-server e i socket

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>


--- 

# La comunicazione client-server 

I Socket

- Un `socket` è un’interfaccia di un host locale, creata da un applicazione di livello 7 che permette di inviare e ricevere messaggi a/da un’altra  applicazione (sia sullo stesso host che su un host diverso)

<br>
<img src="/media/socket02.png" style="margin:auto;" width="500">

--- 

# La comunicazione client-server 

I Socket

- Quindi un socket è l'interfaccia/end point di rete di un applicativo

- Il socket è identificato da una quintupla
  1. Protocollo (TCP | UDP)
  2. IP Sorgente
  3. Porta Sorgente
  4. IP Destinazione
  5. Porta Destinazione

<img src="/media/socket03.png" style="position:relative;top: -150px; left:300px;" width="500">


--- 

# La comunicazione client-server 

I Socket

- Un applicativo crea ed utilizza un socket attraverso un set di API definite

- Le API per la programmazione dei socket sono state introdotte in BSD4.1 UNIX nel 1981
- Per take motivo le funzioni di programmazione (API) dei socket vengono chiamate `Berkley socket API`
  - Utilizzano il paradigma client/server
  - Offrono due tipologie di servizi di trasporto
    - Datagramma inaffidabile (UDP)
    - Affidabile, orientato ai byte (TCP)
  
--- 

# La comunicazione client-server 

I Socket

- Il paradigma utilizzato dal Socket API è `client-server`

**Server**
- è sempre in esecuzione e in ascolto su una specifica porta
- questo socket si chiama **welcoming socket** 

**Client**
- Il client crea una socket specificando indirizzo IP e il numero di porta del server
- In questo modo stabilisce una connessione (solo nel caso TCP) effettuando l'handshaking a tre vie

--- 

# La comunicazione client-server 

I Socket

- Al termine della connessione del client, il server TCP crea un nuovo socket, **connection socket**
- In questo modo il server può comunicare con più client contemporaneamente
- I numeri di porta sorgente sono usati per distinguere i client

<img src="/media/socket04.png" style="margin:auto;" width="350">

--- 

# La comunicazione client-server 

I Socket

<div style="width: 50%;">

- Per instaurare una comunicazione client-server via socket è necessario eseguire una specifica serie di chiamate Socket API
- Data la natura diversa del server e del client, ci sono API differenziate per questi due casi

</div>

<img src="/media/socket05.png" style="position: relative; top: -200px; left: 500px;" width="350">

--- 

# La comunicazione client-server 

I Socket

- **socket()**: crea un nuovo end-point di comunicazione
- **bind()**: associa un indirizzo IP locale a un socket
- **listen()**: si mette in ascolto per nuove connessioni al socket (non bloccante)
- **connect()**: inizia una connessione TCP verso un socket (3 way hand-shake)
- **accept()**: rimane in attesa di una nuova connessione da un client (bloccante)
- **recv()**: riceve un messaggio da un socket
- **send()**: invia unmessaggio su un socket
- **close()**: chiude il file descriptor (socket)


--- 

# La comunicazione client-server 

I Socket

- Il manuale dei socket si legge con

```bash
> man 7 ip

SYNOPSIS
       #include <sys/socket.h>
       #include <netinet/in.h>
       #include <netinet/ip.h> /* superset of previous */

       tcp_socket = socket(AF_INET, SOCK_STREAM, 0);
       udp_socket = socket(AF_INET, SOCK_DGRAM, 0);

DESCRIPTION
       Linux implements the Internet Protocol, version 4, described in RFC 791 and RFC 1122.  

```

- Il manuale è esaustivo e fornisce tutte le informazioni necessarie per programmare con i socket in C
- Analizziamo ora le principali API
  
--- 

# La comunicazione client-server 

Socket API

`socket` - `man socket`

```c
int socket(int domain, int type, int protocol);
```

***crea un endpoint (socket) per la comunicazione con un altro processo remoto e restituisce ul file descriptor (everything is a file in UNIX)***

- **domain**: dominio di comunicazione (**AF_INET**) per i socket IP
- **type**: tipo di socket (**SOCK_STREAM**) per TCP e (**SOCK_DGRAM**) per UDP
- **protocol**: protocollo da usare in funzione del dominio. (vedi  /usr/include/netinet/in.h e /etc/protocols)
- **return value**: -1 in caso di errore, file descriptor del socket in caso positivo 

--- 

# La comunicazione client-server 

Socket API

`bind` - `man bind`

```c
int bind(int sockfd, const struct sockaddr *addr, socklen_t addrlen);
```

***associa un indirizzo IP ad un socket esistente***

- **sockfd**: il file descriptor del socket precedentemente creato
- **addr**: indirizzo da associare (bind) al socket
- **addrlen**: specifica la lunghezza dell'indirizzo. 
- **return value**: -1 in caso di errore, 0 in caso positivo
  
--- 

# La comunicazione client-server 

Socket API

`bind` - `man bind`

```c
struct sockaddr *addr
```

- è una struttura generica che va bene per ogni famiglia di indirizzi
- è necessario fare il cast
- per gli indirizzi IP la struttura da usare è

```c
struct sockaddr_in
  {
    sa_family_t  sin_family;  /* Famiglia di indirizzi */
    in_port_t sin_port;		  /* Numero di porta  in network byte order*/
    struct in_addr sin_addr;  /* Indirizzo IP in network byte order*/

    /* Padding alle dimensioni di  `struct sockaddr'.  */
    unsigned char sin_zero[];
  };
```

--- 

# La comunicazione client-server 

endianess

<img src="/media/socket06.jpg" style="position: relative; top: 0px; left: 0px;" width="450">
<img src="/media/socket07.png" style="position: relative; top: -250px; left: 500px;" width="350">

<div style="position:relative; top: -200px;">

> I termini big-endian e little-endian derivano dai nomi di due popolazioni che abitavano le favolose isole di Lilliput e Blefuscu. Queste erano entrate in rivalità per il modo in cui aprivano le uova - rompendo la punta o il fondo: a Lilliput, per editto dell'imperatore il cui figlio una volta si tagliò aprendo un uovo dall'estremità più grande, fu ordinato di aprire le uova dall'estremità più corta (little endians); a Blefuscu si rifugiarono gli oppositori che volevano conservare la tradizione di rompere le uova dall'estremità più grande (big endians). A causa di questa differenza e della sua legittimazione imperiale era scoppiata tra le due isole una guerra sanguinosa.

</div>

--- 

# La comunicazione client-server 

endianess

<div style="width: 60%;">

- In una memoria i byte di una parola possono essere immagazzinati in due modi distinti in base all'ordine

<br>

**BIG ENDIAN** 
- immagazznina prima, ad indirizzi più bassi la parte più significativa  (MSB) (Big End)

<br>

**LITTLE ENDIAN**
- immagazznina prima, ad indirizzi più bassi la parte meno significativa (LSB) (Little End)

</div>

<img src="/media/socket08.png" style="position: relative; top: -400px; left: 550px;" width="350">
<img src="/media/socket09.png" style="position: relative; top: -400px; left: 550px;" width="350">

--- 

# La comunicazione client-server 

endianess

- Quindi un numero, per esempio su 16 bit, rappresentato in big endian ha un valore diverso rispetto allo stesso numero rappresentato in little endia

**0xA5F2**

- BIG ENDIAN: 0xA5F2 --> F2A5 = 61117
- LITTLE ENDIAN: 0x A5F2 --> A5F2 = 42482

**Pertanto è fondamentale conoscere l'endianess di un sistema**
- Tradizionalmente:
  -  le CPU Intel e DEC sono little endian
  - Mentre le CPU IBM, Sun, Motorola sono Big Endian
- ARM supporta entrambe le opzioni

--- 

# La comunicazione client-server 

host vs network byte order

- Quindi in una comunicazione di rete, quale tipo di endianess ha il mittente e quale tipo il ricevente?
- E' chiaro che se mittente e ricevente utilizzano endianess difefrenti la comunicazione risulterà corretta
  - il mittente little endian invia una word 0xA5F2 per rappresentare il numero 42482 mentre il ricevente bigendian penserà di aver ricevuto 61117
- Per tale motivo, è stato definito un metodo per rappresentare i numeri in modo indipendente dall'architettura HW, nominato `NETWORK ORDER`

<div style="background: green; color:yellow;padding: 1rem;">
Il <b>NETWORK ORDER</b> è convenzionalmente definito come BIG ENDIAN
</div>

- Quindi utilizzando il NETWORK ORDER pe rle comunicazioni di rete di possono traferire le informazioni correttamente indipendentemente dall'endianess degli host
- Pertanto due host, uno little endian e uno big endian, possono comunicare senza problemi adottando il NETWORK ORDER
- Per uno dei due host il network order coincide con l'endianess nativa. L'altro host deve tradurre i valori prima di inviarli e dopo averli ricevuti

--- 

# La comunicazione client-server 

host vs network byte order

- La libreria C mette a disposizioni una serie di funzione adibite esattamente allo scopo di convertire da host a network byte order e viceversa

- **htonl()**: converte un unsigned long da host a network order
- **htons()**: converte un unsigned short da host a network order
- **ntohl()**: converte un unsigned long da network a host
- **ntohs()**: converte un unsigned short da network a host

--- 

# Esercizio 1 

Conversione host vs network byte order

- scrivere un programma in C che:
-  converta i seguenti numeri su 16 bit da host a network order e stampi la conversione sulla console in formato esadecimale:
  - 1000
  - 12890
  - 54163
  - 34012
  - 62984
--- 

# Esercizio 1 

Conversione host vs network byte order

- converta i seguenti numeri su 16 bit da network a  host order e stampi la conversione sulla console in formato esadecimale:
  - 5499
  - 19875
  - 59821
  - 43120
  - 26489
- consegnare il codice in C senza errori e che compila correttamente
- consegnare il file .c su github con il seguente nome: *|cognome|_es1_byte_order.c*


--- 

# La comunicazione client-server 

host vs network byte order


--- 

# La comunicazione client-server 

host vs network byte order


--- 

# La comunicazione client-server 

Socket API

`listen` - `man listen`

```c
int socket(int domain, int type, int protocol);
```


- *cosa fa*

- **par1**: x
- **par2**: y
  

--- 

# La comunicazione client-server 

Socket API

`connect` - `man connect`

```c
int socket(int domain, int type, int protocol);
```


- *cosa fa*

- **par1**: x
- **par2**: y

--- 

# La comunicazione client-server 

Socket API

`accept` - `man accept`

```c
int socket(int domain, int type, int protocol);
```


- *cosa fa*

- **par1**: x
- **par2**: y
  
--- 

# La comunicazione client-server 

Socket API

`recv` - `man recv`

```c
int socket(int domain, int type, int protocol);
```


- *cosa fa*

- **par1**: x
- **par2**: y

--- 

# La comunicazione client-server 

Socket API

`send` - `man send`

```c
int socket(int domain, int type, int protocol);
```

- *cosa fa*

- **par1**: x
- **par2**: y

--- 

# La comunicazione client-server 

Socket API

- xxx
- 
