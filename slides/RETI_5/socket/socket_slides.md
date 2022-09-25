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

- Windows espone un API chiamata `WinSock`, molto simile(copiata) da quella Berkley, tuttavia non sarà oggetto del nostro studio
- **Linux implementa l'API Berkley socket pertanto l'esercitazione si svolgerà su Linux**

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

`socket` - `man socket` - client/server

```c
int socket(int domain, int type, int protocol);
```

***crea un endpoint (socket) per la comunicazione con un altro processo remoto e restituisce un file descriptor (everything is a file in UNIX)***

- **domain**: dominio di comunicazione (**AF_INET**) per i socket IP
- **type**: tipo di socket (**SOCK_STREAM**) per TCP e (**SOCK_DGRAM**) per UDP
- **protocol**: protocollo da usare in funzione del dominio. (vedi  /usr/include/netinet/in.h e /etc/protocols)
- **return value**: -1 in caso di errore, file descriptor del socket in caso positivo 

--- 

# La comunicazione client-server 

Socket API

`bind` - `man bind` - server

```c
int bind(int sockfd, const struct sockaddr *addr, socklen_t addrlen);
```

***associa un indirizzo IP ad un socket esistente***

- **sockfd**: il file descriptor del socket precedentemente creato
- **addr**: indirizzo e porta da associare (bind) al socket
- **addrlen**: specifica la lunghezza dell'indirizzo. 
- **return value**: -1 in caso di errore, 0 in caso positivo
  
--- 

# La comunicazione client-server 

Socket API

`bind` - `man bind` - server

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
    in_port_t sin_port;		    /* Numero di porta  in network byte order*/
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

- Quindi un numero, per esempio su 16 bit, rappresentato in big endian ha un valore diverso rispetto allo stesso numero rappresentato in little endian

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
- E' chiaro che se mittente e ricevente utilizzano endianess differenti la comunicazione risulterà incorretta
  - il mittente little endian invia una word 0xA5F2 per rappresentare il numero 42482 mentre il ricevente bigendian penserà di aver ricevuto 61117


- Per tale motivo, è stato definito un metodo per rappresentare i numeri in modo indipendente dall'architettura HW, nominato `NETWORK ORDER`

<br>

<div style="background: green; color:yellow;padding: 2rem;font-size:2rem;">
Il <b>NETWORK ORDER</b> è convenzionalmente definito come BIG ENDIAN
</div>


--- 

# La comunicazione client-server 

host vs network byte order

<div style="width:50%;">

- Quindi utilizzando il **NETWORK ORDER** per le comunicazioni di rete si possono traferire le informazioni correttamente indipendentemente dall'endianess degli host coinvolti
- Pertanto due host, uno little endian e uno big endian, possono comunicare senza problemi adottando il NETWORK ORDER
- Per uno dei due host il network order coincide con l'endianess nativa. L'altro host deve tradurre i valori prima di inviarli e dopo averli ricevuti

</div>

<img src="/media/socket10.png" style="position: relative; top: -300px; left: 450px;" width="500">


--- 

# La comunicazione client-server 

host vs network byte order

- La libreria C mette a disposizioni una serie di funzione adibite esattamente allo scopo di convertire da host a network byte order e viceversa

<div style="width:60%;">

- **htonl()** 
  
  converte un unsigned long da host a network order
- **htons()** 
  
  converte un unsigned short da host a network order
- **ntohl()** 
  
  converte un unsigned long da network a host
- **ntohs()** 
  
  converte un unsigned short da network a host

</div>

<img src="/media/socket11.png" style="position: relative; top: -300px; left: 500px;" width="400">

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
  - 19875
  - 5499
  - 59821
  - 43120
  - 26489
- consegnare il codice in C senza errori e che compila correttamente
- consegnare il file .c su github con il seguente nome: *|cognome|_es1_byte_order.c*

--- 

# La comunicazione client-server 

Socket API

`listen` - `man listen` - server

```c
int listen(int sockfd, int backlog);
```

***mette il socket in ascolto e quindi in attesa di connessioni in entrara***


- **sockfd**: il file descriptor del socket precedentemente creato
- **backlog**: specifica la luinghezza della coda di attesa delle richieste di connessione
-  **return value**: -1 in caso di errore, 0 in caso positivo

--- 

# La comunicazione client-server 

Socket API

`connect` - `man connect` - client

```c
int connect(int sockfd, const struct sockaddr *addr, socklen_t addrlen);
```

***crea una connessione tra il socket locale e quello remoto***


- **sockfd**: il file descriptor del socket precedentemente creato
- **addr**: indirizzo e porta del socket remoto
- **addrlen**: specifica la lunghezza dell'indirizzo. 
- **return value**: -1 in caso di errore, 0 in caso positivo

- In caso di socket UDP, addr rappresenta l'indirizzo e porta a cui inviare il datagram
  
--- 

# La comunicazione client-server 

Socket API

`accept` - `man accept` - server

```c
 int accept(int sockfd, struct sockaddr *addr, socklen_t *addrlen);
```

***accetta la prima richiesta, presente in coda di listening e crea la connessione (socket connesso) con il socket remoto***

- **sockfd**: il file descriptor del socket precedentemente creato
- **addr**: indirizzo e porta del socket locale e remoto
- **addrlen**: dimensione dell'indirizzo addr
- **return value**: -1 in caso di errore, socket descriptor del socket connesso
  
- **Questa chiamata, per default, è bloccante e blocca il processo finchè non sarà presente una richiesta nella coda di listening**

--- 

# La comunicazione client-server 

Socket API

`recv` - `man recv` - client/server

```c
ssize_t recv(int sockfd, void *buf, size_t len, int flags);
```

***riceve un messaggio da un socket***


- **sockfd**: socket descriptor del connection socket
- **buf**: buffer di ricezione in cui memorizzare il messaggio ricevuto
- **len**: dimensione del buffer di ricezione. Deve avere capienza sufficiente per tutto il messaggio pena la perdita dei byte in eccesso
- **flags**: abilità funzionalità avanzate
- **return value**: -1 in caso di errore locale oppure il numero di byte ricevuti dal socket
  
- al posto di recv si può utilizzare `read` in quanto conf flag = 0 è esattamente uguale (everything is a file in UNIX)
--- 

# La comunicazione client-server 

Socket API

`send` - `man send` - client/server

```c
ssize_t send(int sockfd, const void *buf, size_t len, int flags);
```

***invia un messaggio su un socket***

- **sockfd**: socket descriptor del connection socket
- **buf**: buffer di trasmissione 
- **len**: dimensione del buffer di trasmissione. Deve avere dimensione inferiore o uguale alla massima lunghezza del campo dati TCP/UDP
- **flags**: abilità funzionalità avanzate
- **return value**: -1 in caso di errore locale oppure il numero di byte inviati
  
- al posto di send si può utilizzare `write` in quanto con flag = 0 è esattamente uguale (everything is a file in UNIX)

--- 

# La comunicazione client-server 

Socket API

- Vediamo in dettaglio l'implementazione di un server TCP tramite le API Berkley Socket

[Qui il codice completo del server TCP](https://github.com/profmancusoa/RETI/code/RETI5/tcp_server.c)

<br>

```c
int main(int argc, char **argv) 
{
    unsigned short tcp_port; /* TCP port in ascolto */
    int socket_fd;           /* welcoming socket file descriptor */
    int connection_fd;       /* connection socket file descriptor */
    char buf[BUFSIZE];       /* RX buffer */
    int msg_size;            /* dimensione messaggio ricevuto */

    /* Verifico la presenza del parametro porta e lo leggo*/ 
    if(argc ! = 2) {
        printf("uso: %s <porta>\n", argv[0]);
        exit(1);
    }
    ...
```

--- 

# La comunicazione client-server 

Socket API

- Vediamo in dettaglio l'implementazione di un client TCP tramite le API Berkley Socket

[Qui il codice completo del client TCP](https://github.com/profmancusoa/RETI/code/RETI5/tcp_client.c)

<br>

```c
int main(int argc, char **argv) 
{
    unsigned short tcp_port; /* porta tcp di destinazione */
    char *ip;                /* indirizzo ip di destinazione */
    int socket_fd;           /* connection socket */    
    int byte_sent;           /* numero byte inviati */

    /* Verifico la presenza dei parametre IP e porta */ 
    if(argc != 4) {
        printf("uso: %s <IP> <porta> <string>\n", argv[0]);
        exit(1);
    }
    ...
```

--- 

# Esercizio 2

TCP echo server

> Un echo server è un'applicazione di rete che serve per testare il corretto funzionamento di una connessione tra client e server. Consiste in un server TCP che invia al client esattamente il testo che ha ricevuto dal client stesso.

- scrivere un programma in C che:
  - implementi un echo server TCP
  
- consegnare il codice in C senza errori e che compila correttamente
- consegnare il file .c su github con il seguente nome: *|cognome|_echo_server_tcp.c*

--- 

# Esercizio 3

TCP echo client

> Un echo server è un'applicazione di rete che serve per testare il corretto funzionamento di una connessione tra client e server. Consiste in un server TCP che invia al client esattamente il testo che ha ricevuto dal client stesso.

- scrivere un programma in C che:
  - implementi un echo client TCP
  
- consegnare il codice in C senza errori e che compila correttamente
- consegnare il file .c su github con il seguente nome:  *|cognome|_echo_client_tcp.c*

--- 

# Esercizio 4

TCP Socket

- tramite lo sniffer di rete (Wireshark) verificare:
  - il 3 way handshake tra client e server per la creazione di una connessione
  - lo scambio dei messaggi da client a server e viceversa
  - il 4 way haddshake per l'abbattimento della connessione

--- 

# La comunicazione client-server 

Socket UDP

<div style="width: 50%;">

- Siccome UDP è connectionless client e server per comunicare non devono instaurare la connessione
- Pertanto il flusso tra client e server risulta semplificato
- Alcune delle API usate per TCP non sono quindi più necessarie
  - server: listen() e accept() non servono in quanto non si instaura nessuna connessione e non ci sono richieste da gestire
  - client: connect() per lo stesso motivo non è presente
- Ovviamente il 3 e 4 way handshake non avviene

</div>

<img src="/media/socket13.png" style="position: relative; top: -400px; left: 500px;" width="350">

--- 

# La comunicazione client-server 

Socket API

`recvfrom` - `man recv` - client/server

```c
ssize_t recvfrom(int sockfd, void *buf, size_t len, int flags,
                        struct sockaddr *src_addr, socklen_t *addrlen);
```

***riceve un messaggio da un socket non connesso - Normalmente recv() si usa solo per socket connessi***

- **sockfd**: socket descriptor del connection socket
- **buf**: buffer di ricezione in cui memorizzare il messaggio ricevuto
- **len**: dimensione del buffer di ricezione. Deve avere capienza sufficiente per tutto il messaggio pena la perdita dei byte in eccesso
- **flags**: abilità funzionalità avanzate
- **src_ddr**: indirizzo e porta del client da cui proviene il datagram
- **return value**: -1 in caso di errore locale oppure il numero di byte ricevuti dal socket
  
- al posto di recv si può utilizzare `read` in quanto conf flag = 0 è esattamente uguale (everything is a file in UNIX)
--- 

# La comunicazione client-server 

Socket API

`sendto` - `man send` - client/server

```c
ssize_t sendto(int sockfd, const void *buf, size_t len, int flags,
                      const struct sockaddr *dest_addr, socklen_t addrlen);
```

***invia un messaggio su un socket non connesso - Normalmente send() si usa solo per socket connessi***

- **sockfd**: socket descriptor del connection socket
- **buf**: buffer di trasmissione 
- **len**: dimensione del buffer di trasmissione. Deve avere dimensione inferiore o uguale alla massima lunghezza del campo dati TCP/UDP
- **flags**: abilità funzionalità avanzate
- **dest_addr**: indirizzo e porta del server a cui inviare il datagram
- **return value**: -1 in caso di errore locale oppure il numero di byte inviati
  
- al posto di send si può utilizzare `write` in quanto con flag = 0 è esattamente uguale (everything is a file in UNIX)

--- 

# La comunicazione client-server 

Socket UDP


- Vediamo in dettaglio l'implementazione di un server UDP tramite le API Berkley Socket

[Qui il codice completo del server UDP](https://github.com/profmancusoa/RETI/code/RETI5/udp_server.c)

<br>

```c
int main(int argc, char **argv) 
{
    unsigned short udp_port; /* UDP port in ascolto */
    int socket_fd;           /* welcoming socket file descriptor */
    char buf[BUFSIZE];       /* RX buffer */
    int msg_size;            /* dimensione messaggio ricevuto */

    /* Verifico la presenza del parametro porta e lo leggo*/ 
    if(argc ! = 2) {
        printf("uso: %s <porta>\n", argv[0]);
        exit(1);
    }
    udp_port = (unsigned short)atoi(argv[1]);
    ...
```

--- 

# La comunicazione client-server 

Socket UDP

- Vediamo in dettaglio l'implementazione di un client UDP tramite le API Berkley Socket

[Qui il codice completo del client UDP](https://github.com/profmancusoa/RETI/code/RETI5/udp_client.c)

<br>

```c
int main(int argc, char **argv) 
{
    unsigned short udp_port; /* porta tcp di destinazione */
    char *ip;                /* indirizzo ip di destinazione */
    int socket_fd;           /* connection socket */  
    int byte_sent;           /* numero byte inviati */

    /* Verifico la presenza dei parametre IP e porta */ 
    if(argc != 4) {
        printf("uso: %s <IP> <porta> <string>\n", argv[0]);
        exit(1);
    }
    ...
```

--- 

# Esercizio 5

UDP echo server

- scrivere un programma in C che:
  - implementi un echo server UDP
  
- consegnare il codice in C senza errori e che compila correttamente
- consegnare il file .c su github con il seguente nome: *|cognome|_echo_server_udp.c*

--- 

# Esercizio 6

UDP echo client

- scrivere un programma in C che:
  - implementi un echo client UDP
  
- consegnare il codice in C senza errori e che compila correttamente
- consegnare il file .c su github con il seguente nome:  *|cognome|_echo_client_udp.c*

--- 

# Esercizio 7

UDP Socket

- tramite lo sniffer di rete (Wireshark) verificare:
  - l'asssenza del 3 way handshake tra client e server per la creazione di una connessione
  - lo scambio dei messaggi da client a server e viceversa
  - l'assenza del 4 way haddshake per l'abbattimento della connessione


--- 

# La comunicazione client-server 

Socket UDP

- Si fornisce solo per completezza la macchina a stati di una connessione TCP


<img src="/media/socket12.png" style="margin: auto;" width="500">

--- 

# La comunicazione client-server 

Socket TCP in Java

- Vediamo in dettaglio l'implementazione di un server TCP tramite in Java

[Qui il codice completo del server TCP](https://github.com/profmancusoa/RETI/code/RETI5/tcp_server.java)

<br>

```java
public class tcp_server {
    public static void main(String[] args) {
        ServerSocket server_socket;
        Socket client_connection;
        
        /* Verifico la presenza del parametro porta e lo leggo*/ 
        if (args.length != 1) {
            System.out.println("uso: tcp_server <PORT>");
            return;
        }
    ...
```

--- 

# La comunicazione client-server 

Socket TCP in Java

- Vediamo in dettaglio l'implementazione di un client TCP tramite in Java

[Qui il codice completo del client TCP](https://github.com/profmancusoa/RETI/code/RETI5/tcp_client.java)

<br>

```java
public class tcp_client {
    public static void main(String[] args) {
        Socket client_socket;
        
        /* Verifico la presenza del parametro porta e lo leggo*/ 
        if (args.length != 3) {
            System.out.println("uso: tcp_client  <IP> <porta> <string>");
            return;
        }
    ...
```

--- 

# Esercizio 8

Java TCP echo server

- scrivere un programma in Java che:
  - implementi un echo server TCP
  
- consegnare il codice in java senza errori e che compila correttamente
- consegnare il file .java su github con il seguente nome: *|cognome|_tcp_server.java*

--- 

# Esercizio 9

Java TCP echo client

- scrivere un programma in Java che:
  - implementi un echo client TCP
  
- consegnare il codice in java senza errori e che compila correttamente
- consegnare il file .java su github con il seguente nome: *|cognome|_tcp_client.java*

--- 

# Esercizio 10

TCP in Java

- utilizzare il server echo TCP in Java 
- utilizzare il client echo TCP in Java
- tramite lo sniffer di rete (Wireshark) verificare:
  - il 3 way handshake tra client e server per la creazione di una connessione
  - lo scambio dei messaggi da client a server e viceversa
  - il 4 way haddshake per l'abbattimento della connessione


--- 

# Esercizio 11

TCP Socket C e Java

- utilizzare il server echo TCP in C 
- utilizzare il client echo TCP in Java
- tramite lo sniffer di rete (Wireshark) verificare:
  - il 3 way handshake tra client e server per la creazione di una connessione
  - lo scambio dei messaggi da client a server e viceversa
  - il 4 way haddshake per l'abbattimento della connessione

--- 

# Esercizio 12

TCP Socket C e Java

- utilizzare il server echo TCP in Java 
- utilizzare il client echo TCP in C
- tramite lo sniffer di rete (Wireshark) verificare:
  - il 3 way handshake tra client e server per la creazione di una connessione
  - lo scambio dei messaggi da client a server e viceversa
  - il 4 way haddshake per l'abbattimento della connessione


