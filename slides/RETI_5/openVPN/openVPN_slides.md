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
materia: "RETI"
as: "2022/2023"
version: '1.0.0'

---  

# SISTEMI & RETI

OpenVPN

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

--- 

# OpenVPN

Intro

- ***OpenVPN Community Edition (CE)*** è un progetto SSL VPN (Virtual Private Network) open source. Crea connessioni sicure su Internet utilizzando un protocollo di sicurezza personalizzato che utilizza SSL/TLS. Questo progetto OSS (Open Source Software) supportato dalla comunità, che utilizza una licenza GPL, è supportato da molti sviluppatori e collaboratori di OpenVPN Inc., nonché dalla comunità estesa di OpenVPN. CE può essere distribuito gratuitamente, ma richiede una profonda conoscenza di Linux e l'utilizzo dell'interfaccia della riga di comando.

<br><br>

<img src="/media/openvpn_00.png" style="width:450px;margin:auto;"/>


--- 

# OpenVPN

Intro

**OpenVPN Tunneling Protocol**

- Il protocollo di tunneling OpenVPN utilizza il protocollo di crittografia Secure Socket Layer (SSL) per garantire che i dati condivisi tramite Internet rimangano privati ​​utilizzando la crittografia AES-256. Poiché il codice è disponibile per gli audit, chiunque può trovare e correggere le vulnerabilità. Non solo è considerato il protocollo di tunneling VPN più sicuro, ma offre anche connessioni più veloci e può aggirare la maggior parte dei firewall.


<img src="/media/openvpn_00a.png" style="width:550px;margin:auto;"/>

--- 

# OpenVPN

Intro

I principali vantaggi di openVPN sono:

- VPN su qualsiasi sottorete IP o adattatore ethernet virtuale (Cloud) su una singola porta UDP (user datagram protocol) o TCP (transmission control protocol).
- VPN su reti i cui endpoint pubblici sono dinamici come DHCP o client dial-in.
- VPN su reti protette da firewall stateful, orientati alla connessione, senza dover utilizzare regole firewall esplicite.
- VPN su reti con NAT
- Utilizza e supporta tutte le funzionalità di crittografia, autenticazione e certificazione della libreria OpenSSL per proteggere il traffico della tua rete privata da malintenzionati e ISP mentre transita su Internet.
- Supporto alla crittografia convenzionale basata su chiave statica o crittografia a chiave pubblica basata su certificato.

--- 

# OpenVPN

Intro

I principali vantaggi di openVPN sono:

- Supporta chiavi statiche, pre-condivise o scambio di chiavi dinamico basato su TLS
- Funzioni per la compressione adattiva del collegamento in tempo reale e modellazione del traffico per gestire l'utilizzo della larghezza di banda del collegamento.
- Supporta il deployment in server farm VPN per aumentare la scalabilità
- Supporto al bilanciamento del carico utilizzando una o più macchine in grado di gestire migliaia di connessioni dinamiche dai client VPN in entrata.
- Disponibilità di interfacce di controllo su Windows o macOS.
- Crea bridge Ethernet sicuri utilizzando dispositivi tun/tap virtuali.


--- 

# OpenVPN

Linux TUN/TAP

- TUN/TAP è un'interfaccia del sistema operativo per la creazione di interfacce di rete gestite dallo spazio utente. 
- Di solito viene utilizzato per implementare le reti private virtuali2 (VPN) dello spazio utente, ad esempio con OpenVPN, OpenSSH (configurazione del tunnel o argomento -w)
- Questa interfaccia è esposta tramite il file di dispositivo /dev/net/tun

<br>

<img src="/media/openvpn_00b.png" style="width:450px;margin:auto;"/>

--- 

# OpenVPN

Linux TUN/TAP

- Può essere visto come un semplice dispositivo Point-to-Point o Ethernet che, invece di ricevere pacchetti da supporti fisici, li riceve dal programma dello spazio utente e invece di inviare pacchetti tramite supporti fisici li scrive al programma dello spazio utente.
- Un dispositivo di rete apparirà come tunXX o tapXX, a seconda delle opzioni scelte. 
- A seconda del tipo di dispositivo scelto il programma userspace deve leggere/scrivere pacchetti IP (con tun) o frame ethernet (con tap). 

<img src="/media/openvpn_00c.png" style="width:350px;margin:auto;"/>


--- 

# OpenVPN

Configurazione openVPN server

- In questa esercitazione configuriamo un server **openVPN** pronto ad accettare connessioni sicure dai suoi client
- Vederemo anche come configurare il client per stabilire il tunnel sicuro e poter quindi accedere alla propria rete in modo sicuro da qualsiasi ambiente pubblico (Internet)

<img src="/media/openvpn_00d.png" style="width:550px;margin:auto;"/>


--- 

# OpenVPN

Configurazione openVPN server

- Installiamo openvpn dal packet manager

````bash
sudo apt install openvpn
````

se tutto ok

````bash
root@raspberrypi:/home/pi# openvpn --version
OpenVPN 2.5.1 arm-unknown-linux-gnueabihf [SSL (OpenSSL)] [LZO] [LZ4] [EPOLL] [PKCS11] [MH/PKTINFO] [AEAD] built on May 14 2021
library versions: OpenSSL 1.1.1k  25 Mar 2021, LZO 2.10
````

--- 

# OpenVPN

Configurazione openVPN server

- La configurazione di un server openVPN richiede molti passi tra cui l'installazione di una Certification AUthority
- Al fine di semplificare l'installazione utilizzeremo un tool molto valido chiamato `PiVPN`
- PiVPN è un insieme di script di shell sviluppati per trasformare facilmente un Raspberry Pi in un server VPN utilizzando due protocolli open source gratuiti:
  - Wireguard
  - OpenVPN
- Questo tool funziona anche su un comune PC/server e non solo su RaspberryPi
- Pertanto noi faremo l'instllazione sia su un Raspberry che su un Server

Vediamo ora tutti i passi

--- 

# OpenVPN

Configurazione openVPN server

- Installiamo **pivpn** e configuriamo il server openVPN

````bash
sudo curl -L https://install.pivpn.io | bash
````
<br>
<img src="/media/openvpn_02.png" style="width:750px;margin:auto;"/>


--- 

# OpenVPN

Configurazione openVPN server


<img src="/media/openvpn_03.png" style="width:650px;margin:auto;"/>


--- 

# OpenVPN

Configurazione openVPN server

<img src="/media/openvpn_04.png" style="width:650px;margin:auto;"/>


--- 

# OpenVPN

Configurazione openVPN server

<img src="/media/openvpn_05.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

- Seleziona l'interfaccia che espone l'interfaccia di terminazione del tunnel 

<br>

<img src="/media/openvpn_06.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

<img src="/media/openvpn_07.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

<img src="/media/openvpn_08.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

- Impostiamo l'indirizzo statico dell'interfaccia esterna del server VPN

<br>

<img src="/media/openvpn_09.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

- Impostiamo il default gateway in modo appropriato alla rete a cui siamo collegati

<br>

<img src="/media/openvpn_10.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

<img src="/media/openvpn_11.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

- Selezioniamo un utente disponibile

<br>
<img src="/media/openvpn_12.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

- Siccome stiamo configurando un server openVPN facciamo la scelta giusta

<br>
<img src="/media/openvpn_13.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

- Scegliamo la personalizzazione delle opzioni 

<br>
<img src="/media/openvpn_14.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

- openVPN può stabilire un tunnel via UDP o TCP
- UDP è un'ottima scelta

<br>
<img src="/media/openvpn_15.png" style="width:600px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

- Possiamo scegliere una porta non standard

<br>
<img src="/media/openvpn_16.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

- Se non abbiamo un dominio registrato associato al nostro IP, scegliamo **custom**

<br>
<img src="/media/openvpn_17.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

- Impostiamo il DNS a localhost

<br>
<img src="/media/openvpn_18.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

<img src="/media/openvpn_19.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

- Dinuovo selezioniamo IP se non abbiamo un dominio registrato
  
<br>
<img src="/media/openvpn_20.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

<img src="/media/openvpn_21.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

- 256 è un valore adatto, ma se vogliamo possiamo andare a **paranoid level**

<br>
<img src="/media/openvpn_22.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

<img src="/media/openvpn_23.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

- Meglio gestire direttamente gli update del server

<br>
<img src="/media/openvpn_24.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

- Ok quasi fatto, ancora alcuni passi

<br>
<img src="/media/openvpn_25.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

<img src="/media/openvpn_26.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN server

- Ora editiamo il file **/etc/openvpn/server.conf** e modificare

<br>

````bash
push "redirect-gateway def1"
````

in

````bash
push "redirect-gateway autolocal"
````

<br>

- Ciò è necessario per impostare il defualt gateway sul client in modo automatico
- L'obiettivo è di inviare tutto il traffico attraverso il tunnel VPN
- Ora far ripartire il server openVPN

````bash
sudo systemctl restart openvpn
````

<br>

`Complienti,la configurazione del Server è terminata!!!`
  
--- 

# OpenVPN

Configurazione openVPN client

- Ora creiamo la configurazione per un client openVPN
- Utilizziamo sempre il tool **pivpn** e seguiamo le istruzioni a video
- Un file per ogni utente della VPN
    
<br>

<img src="/media/openvpn_27.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN client

- Ora modifichiamo il file **/homr/pi/ovpn/vpnClient.ovpn** (home dell'utente scelto durante l'installazione server)
- Modificare la linea

````bash
remote 93.39.136.162 8080
````

in 

````bash
remote <public ip> 8080
````

--- 

# OpenVPN

Configurazione openVPN client

- Ora è necessario copiare quetao file sul client in modo sicuro (contiene le chiavi e i certificati SSL)
- Il file è un file testuale quindi possiamo anche fare cut & paste
- Ora dal client collegarsi al server openVPN per stabilire il tunnel sicuro    

```bash
sudo openvpn --config vpnClient.ovpn
```

- Inserire la password creata durante la configurazione

--- 

# OpenVPN

Configurazione openVPN client

- Se tutto ha funzionato correttamente dovremmo vedere un output simile a questo

````bash
antonio@asus  ~  sudo openvpn --config vpnClient.ovpn 
2023-02-05 18:00:12 DEPRECATED OPTION: --cipher set to 'AES-256-CBC' but missing in --data-ciphers (AES-256-GCM:AES-128-GCM). Future OpenVPN version will ignore --cipher for cipher negotiations. Add 'AES-256-CBC' to --data-ciphers or change --cipher 'AES-256-CBC' to --data-ciphers-fallback 'AES-256-CBC' to silence this warning.
2023-02-05 18:00:12 OpenVPN 2.5.5 x86_64-pc-linux-gnu [SSL (OpenSSL)] [LZO] [LZ4] [EPOLL] [PKCS11] [MH/PKTINFO] [AEAD] built on Jul 14 2022
2023-02-05 18:00:12 library versions: OpenSSL 3.0.2 15 Mar 2022, LZO 2.10
🔐 Enter Private Key Password: ******                  
2023-02-05 18:00:13 Outgoing Control Channel Encryption: Cipher 'AES-256-CTR' initialized with 256 bit key
2023-02-05 18:00:13 Outgoing Control Channel Encryption: Using 256 bit message hash 'SHA256' for HMAC authentication
2023-02-05 18:00:13 Incoming Control Channel Encryption: Cipher 'AES-256-CTR' initialized with 256 bit key
2023-02-05 18:00:13 Incoming Control Channel Encryption: Using 256 bit message hash 'SHA256' for HMAC authentication
2023-02-05 18:00:13 TCP/UDP: Preserving recently used remote address: [AF_INET]192.168.1.183:8080
2023-02-05 18:00:13 Socket Buffers: R=[212992->212992] S=[212992->212992]
2023-02-05 18:00:13 UDP link local: (not bound)
2023-02-05 18:00:13 UDP link remote: [AF_INET]192.168.1.183:8080
2023-02-05 18:00:14 TLS: Initial packet from [AF_INET]192.168.1.183:8080, sid=54e88a0c 50b9e861
2023-02-05 18:00:14 VERIFY OK: depth=1, CN=Easy-RSA CA
2023-02-05 18:00:14 VERIFY KU OK
````

---

# OpenVPN

Configurazione openVPN client

````bash
2023-02-05 18:00:14 Validating certificate extended key usage
2023-02-05 18:00:14 ++ Certificate has EKU (str) TLS Web Server Authentication, expects TLS Web Server Authentication
2023-02-05 18:00:14 VERIFY EKU OK
2023-02-05 18:00:14 VERIFY X509NAME OK: CN=raspberrypi_1a5ad65e-5bb3-4924-a49c-4493a1e00f56
2023-02-05 18:00:14 VERIFY OK: depth=0, CN=raspberrypi_1a5ad65e-5bb3-4924-a49c-4493a1e00f56
2023-02-05 18:00:14 Control Channel: TLSv1.3, cipher TLSv1.3 TLS_AES_256_GCM_SHA384, peer certificate: 256 bit EC, curve prime256v1, signature: ecdsa-with-SHA256
2023-02-05 18:00:14 [raspberrypi_1a5ad65e-5bb3-4924-a49c-4493a1e00f56] Peer Connection Initiated with [AF_INET]192.168.1.183:8080
2023-02-05 18:00:14 PUSH: Received control message: 'PUSH_REPLY,dhcp-option DNS 127.0.0.1,block-outside-dns,redirect-gateway autolocal,route-gateway 10.211.225.1,topology subnet,ping 15,ping-restart 120,ifconfig 10.211.225.2 255.255.255.0,peer-id 0,cipher AES-256-GCM'
2023-02-05 18:00:14 Options error: Unrecognized option or missing or extra parameter(s) in [PUSH-OPTIONS]:2: block-outside-dns (2.5.5)
2023-02-05 18:00:14 OPTIONS IMPORT: timers and/or timeouts modified
2023-02-05 18:00:14 OPTIONS IMPORT: --ifconfig/up options modified
2023-02-05 18:00:14 OPTIONS IMPORT: route options modified
2023-02-05 18:00:14 OPTIONS IMPORT: route-related options modified
2023-02-05 18:00:14 OPTIONS IMPORT: --ip-win32 and/or --dhcp-option options modified
2023-02-05 18:00:14 OPTIONS IMPORT: peer-id set
2023-02-05 18:00:14 OPTIONS IMPORT: adjusting link_mtu to 1624
2023-02-05 18:00:14 OPTIONS IMPORT: data channel crypto options modified
````


---

# OpenVPN

Configurazione openVPN client

````bash
2023-02-05 18:00:14 Data Channel: using negotiated cipher 'AES-256-GCM'
2023-02-05 18:00:14 Outgoing Data Channel: Cipher 'AES-256-GCM' initialized with 256 bit key
2023-02-05 18:00:14 Incoming Data Channel: Cipher 'AES-256-GCM' initialized with 256 bit key
2023-02-05 18:00:14 net_route_v4_best_gw query: dst 0.0.0.0
2023-02-05 18:00:14 net_route_v4_best_gw result: via 192.168.1.254 dev wlo1
2023-02-05 18:00:14 ROUTE_GATEWAY 192.168.1.254/255.255.255.0 IFACE=wlo1 HWADDR=40:ec:99:e2:f1:85
2023-02-05 18:00:14 TUN/TAP device tun0 opened
2023-02-05 18:00:14 net_iface_mtu_set: mtu 1500 for tun0
2023-02-05 18:00:14 net_iface_up: set tun0 up
2023-02-05 18:00:14 net_addr_v4_add: 10.211.225.2/24 dev tun0
2023-02-05 18:00:14 ROUTE remote_host is LOCAL
2023-02-05 18:00:14 net_route_v4_del: 0.0.0.0/0 via 192.168.1.254 dev [NULL] table 0 metric -1
2023-02-05 18:00:14 net_route_v4_add: 0.0.0.0/0 via 10.211.225.1 dev [NULL] table 0 metric -1
2023-02-05 18:00:14 Initialization Sequence Completed
````

--- 

# OpenVPN

Configurazione openVPN client

- Bene ora il tunnel sicuro VPN è stato stabilito
- E' possibile notare (ifconfig) la presenza dell'interfaccia **TUN**
- Ora possiamo verificarfe la raggiungibilità di un host nella rete privata dall'altro capo del tunnel
  
<br>

<img src="/media/openvpn_28.png" style="width:750px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN client

- Adesso configuriamo il client openVPN presente in molte distribuzioni Linux

<br>
<img src="/media/openvpn_29.png" style="width:500px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN client

<img src="/media/openvpn_30.png" style="width:550px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN client

<img src="/media/openvpn_31.png" style="width:550px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN client

- Selezioniamo il file che abbiamo copiato dal server openVPN

<br>

<img src="/media/openvpn_32.png" style="width:650px;margin:auto;"/>


--- 

# OpenVPN

Configurazione openVPN client

- Tutti i parametri sono automaticamente configurati 

<br>
<img src="/media/openvpn_31a.png" style="width:350px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN client

- Impostiamo la porta custom che avevamo configurato lato server

<br>

<img src="/media/openvpn_31b.png" style="width:650px;margin:auto;"/>


--- 

# OpenVPN

Configurazione openVPN client

<img src="/media/openvpn_33.png" style="width:400px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN client

- Ok la connessione VPN è configurata correttamente 

<br>

<img src="/media/openvpn_34.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN client

- Ora colleghiamoci al server VPN per stabilire il tunnel

<br>

<img src="/media/openvpn_35.png" style="width:300px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN client

- Inseriamo la password configurata durante la creazione del server

<br>

<img src="/media/openvpn_36.png" style="width:550px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN client

- Se tutto ha funzionato correttamente, vediamo che la VPN è stabilita correttamente

<br>
<br>

<img src="/media/openvpn_37.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN client

- Ora verifichiamo la raggiungibilità di un host nella rete privata all'altro capo del tunnel

<br>

<img src="/media/openvpn_39.png" style="width:650px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN client

- Lato server possiamo verificare le connessioni attive

<br>

<img src="/media/openvpn_38.png" style="width:850px;margin:auto;"/>

--- 

# OpenVPN

Configurazione openVPN client

- Infine proviamo ad accedere al web server privato presente all'altro capo del tunnel VPN

<br>

<img src="/media/openvpn_40.png" style="width:850px;margin:auto;"/>

--- 

# OpenVPN

Conclusioni

- Bene con pochi semplici passi, abbiamo configurato un server openVPN sicuro ed affidabile
- In questo modo possiamo collegarci alla nostra rete (aziendale, casalinga) in totale sicurezza ovunque siamo (Internet)

<img src="/media/openvpn_41.webp" style="width:450px;margin:auto;"/>


--- 

# Esercitazione

OpenVPN

Lavorando a gruppi di 2 studenti:

1. Selezionare 2 computer del laboratorio. Chiamiamoli per semplicità **VPNServer** e **WebServer**
2. Configurare  sul PC VPNServer:
   - un server openVPN
   - usare l'interfaccia Wireless come end-point del tunnel
   - usare l'interfaccia ethernet come accesso alla rete privata
3. Configurare sul PC WebServer
   - Un web server NGINX
   - Esporre una pagina HTML a piacere    
4. Configurare sul proprio smartphone o PC un client openVPN
5. Instaurare il tunnel VPN dal PC/Telefono al VPNServer
6. Accedere al webserver privato e visualizzare la pagina di benvenuto







