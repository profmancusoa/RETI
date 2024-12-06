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

TCP SYN Cookies

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

<!-- https://www.geeksforgeeks.org/differences-between-ripv1-and-ripv2/ -->

---

# L'attacco SYN Flood

TCP security

- Il SYN flood è un attacco di tipo DoS nel quale un utente malevolo invia una serie di richieste SYN verso il sistema oggetto dell'attacco
- Il destinatario risponde con una SYN-ACK, ma il mittente non risponderà mai con una ACK per terminare il three-way handshake 
- In questo modo la connessione TCP non sarà mai realmente stabilita, ma verrà occupato un posto, finchè non scatterà un timeout, nella coda SYN
- Quindi è così possibile saturare la coda backlog del server in modo che non accetti nuove connessioni.
- Per essere maggiormente efficace quest'attacco viene svolto in concomitanza di un `IP spoofing`

---

# L'attacco SYN Flood

TCP security

  <img src="/media/how_syn_flood_work.webp" style="width: 70%; margin:auto;"/>

---

# L'attacco SYN Flood

TCP security

<img src="/media/syn_cookie01.jpg " style="width: 80%; margin:auto;"/>


---

# Il SYN Cookie

TCP security

- Per mitigare questo attacco è stato inventato da Daniel J. Bernstein nel 1991 il `SYN Cookie`
- L'idea che sta alla base di questo meccanismo di protezione e di non gestire la coda SYN del server in modo convenzionale
- In altre parole è necessario fare in modo che questa coda non si saturi mai, altrimenti il server non potrà accettare nuove connessioni
- Quindi al ricevimento di un pacchetto SYN, questo non verrà messo subito nella coda, ma si apsetta il ricevimento del pacchetto ACK per inserirlo nella coda (connessione lecita)
- Se al contrario il pacchetto ACK non arriverà mai (SYN flood attack) il pacchetto verrà scartato permettendo al server di accettare nuove connessioni


---

# Il SYN Cookie

TCP security

- Quindi è necessario poter correlare un pacchetto ACK con il suo corrispondente pacchetto SYN ma senza utilizzare code
- Il SYN Cookie si basa sul fatto che il numero di sequenza del destinatario non è più casuale ma basato sul numero di sequenza nel primo pacchetto SYN inviato al server 
- In questo modo, al ricevimento di un pacchetto SYN, si invia un SYN-ACK con il numero di sequenza calcolato sulla base del primo pacchetto inviato (hash di socket + suqence number)
- Il server quindi aspetta che arrivi il pacchetto ACK dal mittente senza che la connessione sia instaurata e le risorse allocate
- Appena arriva la ACK, si ricalcola l'hash e si verifica se corrisponde a quella iniziale del pacchetto SYN. 
- In caso affermativo il pacchetto viene considerato valido e si crea la entry nella coda SYN, di fatto instaurando la connessione TCP

---

# L'attacco SYN Flood

TCP security

<img src="/media/syn_cookie02.png" style="width: 80%; margin:auto;"/>



---

# Il SYN Cookie

TCP security

- Più in dettaglio, il numero di sequenza del SYN-ACK viene generato in questo modo
  - I primi 5 bit rappresentano un counter che aumenta ogni 64 secondi(non può passare troppo tempo tra un pacchetto e l'altro)
  - I successivi 3 bit rappresentano il MSS
  - Gli ultimi 24 bit rappresentano un hash basata su: 
    - il source IP address
    - il source port number
    - il destination port number
    - il destination IP address
    - il TCP Timestamp

- Da notare che il SYN Cookie viola il principio di TCP in qui il numero di sequenza debba essere randomico e incrementare di 1 alla volta.

---

# Come il SYN Cookies evita il riempimento della coda

TCP security

- Un server che usa SYN cookies non mette subito la connession nella SYN queue ma aspetta che arrivi una ACK con il numero di sequenza che combaci con il pacchetto SYN+ACK mandato in precedenza.
- In questo modo le connessioni malevoli non saranno mai aperte perchè il mittente non manderà mai un ACK valida.
- Quindi di fatto la coda SYN non si riempirà ed il server sarà sempre in grado di gestire nuove richieste, neutralizzando di fatto l'attacco DoS
  
---

# L'attacco SYN Flood

TCP security

<img src="/media/syn_cookie03.png" style="width: 40%; margin:auto;"/>




---

# Svantaggi del SYN Cookie

TCP security

- Il SYN cookie prevede che per ogni pacchetto TCP SYN venga aggiunta un hash nel numero di sequenza, questo chiaramente richiede una elaborazione che tuttavia nei computer moderni non impatta molto le prestazioni generali del sistema.
- Il SYN cookie viola il protocollo TCP dato che il numero di sequenza dovrebbe essere sequenziale
- Il SYN cookie può terminare le connessioni più velocemente se la latenza è molto alta (il contatore 5-bit ha un massimo)

---

# Come funziona SYN cookie nel kernel linux

TCP security

- La funzione `cookie_hash` calcola l'hash tra indirizzo sorgente, destinazione, porta sorgente, porta destinazione e counter.

```c
static unsigned long long cookie_hash(unsigned long long saddr, unsigned long long daddr, 
            unsigned long sport, unsigned long dport,
		        unsigned long long count, int c)
{
	net_get_random_once(syncookie_secret, sizeof(syncookie_secret));  // Numero randomico
	return siphash_4u32(saddr, daddr, // Calcolo dell'hash usando l'algoritmo siphash
			    sport << 16 | dport,
			    count, &syncookie_secret[c]);
}
```

---

# Come funziona SYN cookie nel kernel linux

TCP security

- Composizione del numero di sequenza completo:

```c
static unsigned long long secure_tcp_syn_cookie(unsigned long long saddr, unsigned long long daddr, 
        unsigned long sport, unsigned long dport, unsigned long long sseq, unsigned long long data)
{
	unsigned long long count = tcp_cookie_time(); // Timestamp

    // Generazione del numero di sequenza completo unendo tutti i bit
	return (cookie_hash(saddr, daddr, sport, dport, 0, 0) + 
		sseq + (count << COOKIEBITS) +
		((cookie_hash(saddr, daddr, sport, dport, count, 1) + data)
		 & COOKIEMASK));
}
```

---

# Come funziona SYN cookie nel kernel linux

TCP security

- Controllo validità pacchetto SYN cookie

```c
static unsigned long long check_tcp_syn_cookie(unsigned long long cookie, unsigned long long saddr, unsigned long long daddr, unsigned long sport, unsigned long dport, unsigned long long sseq)
{
	unsigned long long diff;
  unsigned long long count = tcp_cookie_time();  // Timestamp attuale

	cookie -= cookie_hash(saddr, daddr, sport, dport, 0, 0) + sseq; // Togliamo la prima hash e il numero di sequenza

	diff = (count - (cookie >> COOKIEBITS)) & ((unsigned long long) -1 >> COOKIEBITS);  // Differenza tra timestamp attuale e timestamp del pacchetto

	if (diff >= MAX_SYNCOOKIE_AGE)  // Se la differenza è maggiore del limite viene scartato
		return (unsigned long long)-1;

    // Ritorniamo la MSS del pacchetto
	return (cookie - cookie_hash(saddr, daddr, sport, dport, count - diff, 1)) & COOKIEMASK; 
}
```

---

# Esercitazione 01

TCP SYN Cookie

- In questa esercitazione proveremo a vedere come l'attivazione del meccanismo SYN cookie protegge il server da un DoS
- Per questa esercitazione serve una distribuzione Linux, Wireshark e Python installato

- Sul server esegui 
```bash
sudo su # Entro come superuser
echo 0 > /proc/sys/net/ipv4/tcp_syncookies  # Disabilitiamo il SYN Cookie
exit # Usciamo dal superuser

cd /tmp # Andiamo nella cartella temporanea
dd if=/dev/random of=sys_flood_test.raw bs=1M count=100 # Creiamo un file da 100Mb
python3 -m http.server  # Facciamo partire un server HTTP
```
---

# Esercitazione 01

TCP SYN Cookie

- Sulla macchina dell'attaccante installiamo hping3 ed eseguiamo l'attacco

```bash
sudo apt install hping3
sudo hping3 -S <IP_SERVER> -p 8000 --flood  # Facciamo partire l'attacco SYN Flood
```

- Ora iniziamo a sniffare il traffico con Wireshark fermandolo dopo 1-2 secondi dall'inizio dell'attacco.
- Annotiamoci i pacchetti inviati e la sequenza.

---

# Esercitazione 01

TCP SYN Cookie


- Proviamo a scaricare il file


```bash
wget <IP_SERVER>:8000/sys_flood_test.raw
```

- A questo punto la coda SYN del sistema operativo dovrebbe essere piena e il download fallire perchè non vengono aperte nuove connessioni e l'output del comando dovrebbe essere il seguente:


```bash
--2023-06-01 18:04:47--  IP_SERVER/sys_flood_test.raw
Connessione a IP_SERVER:8000...
```

- Il pc non riesce a stabilire una connessione perchè la coda è piena e non riuscirà a gestire nuove richieste finchè non si libereranno degli slot(timeout delle SYN malevole).


---

# Esercitazione 01

TCP SYN Cookie



- Sul server possiamo controllare il numero di richieste SYN ricevute con il seguente comando:

```bash
sudo modprobe sctp
watch -d -n 1 "netstat -s | grep SYN"
```

- Come possiamo vedere i socket aumentano continuamente, e se eseguiamo il comando 

```bash
sudo dmesg | grep SYN 
```

- vedremo che il kernel ha rilevato un flooding sulla porta 8000

---

# Esercitazione 01

TCP SYN Cookie

- Ora verifichiamo cosa succede con il SYN Cookie attivo
- Attiviamo il SYN Cookie e rifacciamo il download

```bash
sudo su # Entro come superuser
echo 1 > /proc/sys/net/ipv4/tcp_syncookies  # Abilitiamo il SYN Cookie
exit # Usciamo dal superuser

cd /tmp # Andiamo nella cartella temporanea
python3 -m http.server  # Facciamo partire un server HTTP
```

- E sul pc dell'attaccante

```bash
sudo hping3 -c 1 -S IP_SERVER -p 8000 --flood  # Facciamo partire l'attacco SYN Flood
# Apriamo un nuovo terminale
wget <IP_SERVER>:8000/sys_flood_test.raw
```

- Sniffiamo il traffico, fermiamo dopo poco e cerchiamo di capire la sequenza senza SYN cookie
- Il wget dovrebbe scaricare il file correttamente senza nessun problema

--- 

# Esercitazione 01

TCP SYN Cookie


- Se noi analizziamo la sequenza con Wireshark notiamo che:

<div class="grid grid-cols-2" >
  <div class="image_container" >
    <img src="/media/no_syn_cookies_wireshark.png" />
    <p>
    Senza SYN cookie: i pacchetti vengono accettati(colore grigio) finchè non finisce lo spazio nella coda(colore nero)
    </p>
  </div>
  <div class="image_container" >
    <img src="/media/syn_cookies_wireshark.png" />
    <p>
    Con SYN cookie: I pacchetti inviati senza ricevere una ACK da parte del mittente vengono scartati e viene mandata una richiesta RST(colore rosso)
    </p>
  </div>
</div>

<style>
  .image_container {
    padding: 1em;
  }
  </style>