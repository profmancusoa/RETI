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

#https://nazarenolatella.myblog.it/tag/isakmp/
---  


# SISTEMI & RETI

IPsec VPN

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

--- 

# IPsec VPN

Intro

- In telecomunicazioni e informatica `IPsec`, abbreviazione di ***IP Security***, è uno standard per reti a pacchetto che permette di ottenere connessioni sicure su reti IP pubbliche. 
- Tale sicurezza viene raggiunta attraverso l'aggiunta di funzionalità di **autenticazione, cifratura e controllo di integrità** dei pacchetti IP. 
- La capacità di fornire protezione e sicurezza viene dunque fornita a livello di rete (diversamente da HTTPS, SSL/TLS), fatto che rende questo protocollo trasparente al livello delle applicazioni che quindi non devono essere modificate.
- IPsec è parte integrante di IPv6, mentre è opzionale in IPv4

<img src="media/vpn_00.png" style="width:450px;margin:auto;"/>

--- 

# IPsec VPN

Intro

- IPsec è una collezione di protocolli formata da:
  1. Protocolli che implementano lo scambio delle chiavi per realizzare il flusso crittografato.
  2. Protocolli che forniscono la cifratura del flusso di dati.

- Per lo scambio delle chiavi esiste un solo protocollo chiamato `IKE` **(Internet Key Exchange)**
- Per quanto riguarda l'autenticazione e integrità dei pacchetti IP si può utilizzare il protocollo `AH` **(Authentication Header (AH)**
- Un terzo protocollo chiamato `ESP` **(Encapsulating Security Payload)** fornisce invece autenticazione, riservatezza e controllo di integrità dei pacchetti IP
- Per questi motivi ESP è molto più usato di AH

--- 

# IPsec VPN

Intro

IPsec supporta due modalità di funzionamento:
- **Transport mode**
  - connessione host-to-host tra due end-point o host-to-router;
  - in caso di cifratura, viene cifrato solo il payload dei datagrammi IP, non l'header
  - computazionalmente leggero;
  - ogni host che vuole comunicare deve avere tutto il software necessario ad implementare IPsec
  - si aggiunge solo l'header IPsec
  - gli indirizzi mittente e destinatario degli end-point sono rilevabili.

<img src="media/vpn_01.png" style="width:550px;margin:auto;"/>


--- 

# IPsec VPN

Intro

IPsec supporta due modalità di funzionamento:
- **Tunnel mode**
  - connessione router-to-router (site-to-site) (sia da AH che da ESP) 
  - in caso di cifratura, viene cifrato tutto il pacchetto IP originale
  - computazionalmente oneroso
  - solo i router devono avere il software IPsec
  - utilizza un doppio incapsulamento o tunneling
  - adottando il protocollo Encapsulating Security Payload, gli indirizzi mittente e destinatario degli end-point non sono quindi più rilevabili

<img src="media/vpn_02.png" style="width:500px;margin:auto;"/>


--- 

# IPsec VPN

Remote VPN e Site-to-Site VPN

- Nel resto di questa esercitazione configureremo i due tipi di VPN studiati
  1. Remote VPN: VPN tra un dipendente mobile e la sede principale dell'azienda ACME

<br>
<img src="media/vpn_03.png" style="width:400px;margin:auto;"/>

<br>

  2. Site-to-Site VPN: tra una sede remota e la la sede principale dell'azienda ACME

<br>
<img src="media/vpn_04.png" style="width:400px;margin:auto;"/>


--- 

# IPsec VPN

Remote VPN

<img src="media/vpn_05.png" style="width:900px;margin:auto;"/>

<br>

- il VPN Router è il modello Cisco c1900

--- 

# IPsec VPN

Remote VPN


**#1 abilitare la licenza per le VPN**

```bash
Router#
Router#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)#license boot module c1900 technology-package securityk9
```
<br>

**#2 salvare la configurazione e fare il reload**

```bash
Router#
Router#copy running-config startup-config 
Destination filename [startup-config]? 
Building configuration...
[OK]
Router#
Router#reload 
```

--- 

# IPsec VPN

Remote VPN

**#3 confermare l'attivazione della licenza per VPN**

```bash
Router#
Router#show version 

----------------------------------------------------------------
Technology    Technology-package          Technology-package
              Current       Type          Next reboot
-----------------------------------------------------------------
ipbase        ipbasek9      Permanent     ipbasek9
security      securityk9    Evaluation    securityk9
data          disable       None          None
```

--- 

# IPsec VPN

Remote VPN

**#4 configurare il pool di indirizzi da assegnare ai client VPN**

```bash
Router#
Router#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)#ip local pool VPN-pool 172.16.32.101 172.16.32.200
Router(config)#
```

<br>

**#5 abilitare il modulo e le fuinzionalità AAA**

```bash
Router(config)#Router(config)#aaa new-model 
Router(config)#
```

--- 

# IPsec VPN

Remote VPN

**#6 abilitare autenticazione con username locale (no RADIUS server)**

```bash
Router(config)#aaa authentication login VPN-client local
```

<br>

**#7 abilitare authorizzazione locale per network client per il gruppo VPN-ATS**

```bash
Router(config)#aaa authorization network VPN-ATS local
```

<br>

**#8 creare un account per ogni remote client ed aggiungerlo al DB locale**

```bash
Router(config)#username ats-dennis secret password1
Router(config)#username ats-linus secret password2
```

--- 

# IPsec VPN

Remote VPN

**#9 creare la policy per isakmp (IKE) per stabilire la SA (Phase 1)**
- si configura il protocollo di encryption
- il protocollo di hashing per l'integrità
- il modello di scambio delle chiavi
- il metodo di scambio delle chiavi DH-5 (1536 bit)

<br>

```bash
Router(config)#crypto isakmp policy 1
Router(config-isakmp)#encryption aes 256
Router(config-isakmp)#hash sha 
Router(config-isakmp)#authentication pre-share
Router(config-isakmp)#group 5
Router(config-isakmp)#lifetime 7200
Router(config-isakmp)#
```

--- 

# IPsec VPN

Remote VPN

**#10 crea la configurazione isakmp client per il gruppo VPN-ATS**
- si configura la password di gruppo
- si assegna il pool di indirizzi al gruppo

<br>

```bash
Router(config)#crypto isakmp client configuration group VPN-ATS
Router(config-isakmp-group)#key atsvpngroupsecret
Router(config-isakmp-group)#pool VPN-pool
Router(config-isakmp-group)#
```

--- 

# IPsec VPN

Remote VPN

**#11 creare la policy per isakmp (IKE) per stabilire la SA (Phase 2)**

```bash
Router(config)#crypto ipsec transform-set VPNipsec esp-aes esp-sha-hmac 
```

<br>

- abilitiamo il protocollo ESP con encryption AES
- per l'integrità utilizziamo sha-hmac

--- 

# IPsec VPN

Remote VPN


**#12 definiamo un dynamic crypto map table (Policy) per il trasnform-setr VPNipsec (SA)**

Un dynamic crypto map è un template per la policy IPsec che verrà successivamente popolato con i parametri negoziati durante la fase di instaurazione della SA

- abilitiamo il reverse route injection in modo da poter comunicare con il client

Il Reverse route injection (RRI)permette al router di aggiungere delle route statiche per gli host presenti all'altro capo della VPN

<br>

```bash
Router(config)#crypto dynamic-map VPNdynset 1
Router(config-crypto-map)#set transform-set VPNipsec 
Router(config-crypto-map)#reverse-route 
Router(config-crypto-map)#
```


--- 

# IPsec VPN

Remote VPN

**#13 definiziamo un crypto map per il client configurando autenticazione e autorizzazione**

Un crypto map è una configurazione software che ha due scopi principali:
1. selezionare i pacchetti che necessità del processamento IPsec
2. definire le policy per questi pacchetti 

- una crypto map deve essere applicata ad un interfaccia

<br>

```bash
Router(config)#
Router(config)#crypto map VPNstaticmap client configuration address respond 
Router(config)#crypto map VPNstaticmap client authentication list VPN-client
Router(config)#crypto map VPNstaticmap isakmp authorization list VPN-ATS
Router(config)#crypto map VPNstaticmap 1 ipsec-isakmp dynamic VPNdynset
```

--- 

# IPsec VPN

Remote VPN

**#14 abilitiamo la VPN sull'interfaccia pubblica**

```bash
Router(config)#interface gigabitEthernet 0/0
Router(config-if)#crypto map VPNstaticmap
*Jan  3 07:16:26.785: %CRYPTO-6-ISAKMP_ON_OFF: ISAKMP is ON
Router(config-if)#end
Router#
%SYS-5-CONFIG_I: Configured from console by console
Router#
```

<br>

- OK!!! ora il VPN router è in attesa di connessioni da parte dei remote client

--- 

# IPsec VPN

Remote VPN

- Ora proviamo a stabilire una connessione tra un remote client (PC2) e la sede aziendale (VPN Router)
- Configuriamo il client nel seguente  modo
 
<img src="media/vpn_06.png" style="width:350px;margin:auto;"/>

--- 

# IPsec VPN

Remote VPN

<img src="media/vpn_07.png" style="width:400px;margin:auto;"/>

--- 

# IPsec VPN

Remote VPN

- Se tutto è stato configurato correttamente, ora il client è connesso in modo sicuro con la sede principale
  
<img src="media/vpn_08.png" style="width:400px;margin:auto;"/>

--- 

# IPsec VPN

Remote VPN

- Al client è stato assegnato un indirizzo del VPN-pool definito lato VPN Router

<br>

<img src="media/vpn_09.png" style="width:380px;margin:auto;"/>

--- 

# IPsec VPN

Remote VPN

- Abbiamo ricevuto il primo indirizzo IP del pool VPN

<br>

<img src="media/vpn_10.png" style="width:380px;margin:auto;"/>

--- 

# IPsec VPN

Remote VPN

- Perfetto ora possiamo raggiungere  il web server nella rete aziendale
  
<img src="media/vpn_11.png" style="width:450px;margin:auto;"/>

--- 

# IPsec VPN

Remote VPN

  
<img src="media/vpn_12.png" style="width:450px;margin:auto;"/>


--- 

# IPsec VPN

Remote VPN

**Esercizio:**

- In  modalità simulazione:
  1. inviare un pacchetto ICMP dal client VPN al web server aziendale
  2. osservare il pacchetto all'uscita del PC2
  3. osservare il pacchetto all'ingresso del router VPN (da Internet)
  4. osservare il pacchetto all'uscita del router VPN (verso la LAN interna)
 - Descrivi cosa osservi?
 - Il comportamento è in linea con le tue aspettative?
    
--- 

# IPsec VPN

Remote VPN

- Alcuni utili comandi per verificare lo stato della VPN sono
  
```bash
Router#
Router#show aaa sessions 
Router#
Router#
Router#show crypto ipsec sa
Router# 
Router#show crypto isakmp sa 
Router# 
Router#show crypto isakmp  policy 
Router# 
```

--- 

# IPsec VPN

Remote VPN

**Esercizio:**

- Ispezionare la tabella di routing
- Identificare le reverse route


--- 

# IPsec VPN

Site-to-Site VPN

- x

--- 

# IPsec VPN

Site-to-Site VPN

- x

--- 

# IPsec VPN

Site-to-Site VPN

- x

--- 

# IPsec VPN

Site-to-Site VPN

- x

--- 

# IPsec VPN

Site-to-Site VPN

- x

--- 

# IPsec VPN

Site-to-Site VPN

- x

--- 

# IPsec VPN

Site-to-Site VPN

- x

--- 

# IPsec VPN

Site-to-Site VPN

- x

--- 

# IPsec VPN

Site-to-Site VPN

- x

--- 

# IPsec VPN

Site-to-Site VPN

- x


--- 

# IPsec VPN

xxxxxxx

--- 

# IPsec VPN

xxxxxxx

--- 

# IPsec VPN

xxxxxxx


