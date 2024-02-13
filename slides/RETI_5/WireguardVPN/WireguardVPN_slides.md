---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
#highlighter: shikiji
lineNumbers: false
title: Wireguard VPN 
aspectRatio: '16_/9'
routerMode: 'hash'
materia: "RETI"
as: "2023/2024"
version: '1.0.0'
---

# Wireguard VPN

Extremely simple yet fast and modern VPN

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# Cos'è Wireguard?

Extremely simple yet fast and modern VPN

- Wireguard è un protocollo VPN moderno(2015) scritto da Jason A. Donenfeld pensato per essere veloce, semplice e sicuro.
- Wireguard usa una connessione UDP per garantire una maggiore velocità degli altri protocolli. 
- Inoltre, su Linux e Windows, il protocollo viene eseguito a livello kernelspace che garantisce velocità maggiori di altri protocolli userspace. 
- Wireguard non prevede la necessità di certificati rilasciati da una CA ma semplicemente uno scambio di chiavi pubbliche.
- La sicurezza è garantita dall'utilizzo di 5 algoritmi di crittografia moderni e molto sicuri
- Wireguard quando stabilisce la prima connessione scambia una handshake contenente delle chiavi simmetriche con il peer e ogni pochi minuti(configurabili) queste chiavi cambiano.
- Inoltre, per mitigare attacchi DoS wireguard non alloca le risorse della connessione finchè la sequenza iniziale di handshake non termina, questo viene fatto mettendo un token univoco impossibile da decriptare senza possedere la chiave pubbliche del peer.

---

# Scenario di Test

Network Diagram

<img src="/media/vpn01.png">

---

# Server Wireguard

Configurazione

- Installiamo Wireguard

```bash
$ sudo apt install wireguard

Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  wireguard-tools
The following NEW packages will be installed:
  wireguard wireguard-tools
0 upgraded, 2 newly installed, 0 to remove and 11 not upgraded.
Need to get 84.4 kB of archives.
After this operation, 302 kB of additional disk space will be used.
Do you want to continue? [Y/n] 
Get:1 http://ftp.arnes.si/mirrors/raspbian/raspbian bullseye/main armhf wireguard-tools  [76.2 kB]
Get:2 http://ftp.arnes.si/mirrors/raspbian/raspbian bullseye/main armhf wireguard  [8164 B]

```
---

# Server Wireguard

Configurazione

- Abilitiamo l'IP forwarding sulla nostra macchina, aggiungendo la seguente linea al file `/etc/sysctl.conf `

```bash
net.ipv4.ip_forward=1
```

- e applichiamo le modifiche con

```bash
$ sudo sysctl --system
```

<br>

- Se necessario, abilitiamo la porta sul firewall(debian o altre distribuzioni)

```bash
$ iptables -I INPUT -p udp --dport 51820 -j ACCEPT
```

<br>

- Generiamo la coppia di chiavi pubblica-privata

<br>

```bash
wg genkey | tee privatekey | wg pubkey > publickey
```

---

# Server Wireguard

Configurazione

- Configuriamo il server creando il file `/etc/wireguard/wg0.conf` ed inseriamo la config seguente:

```toml
[Interface]
PrivateKey = <chiave privata del server>
Address = 10.20.20.254/24
PostUp = iptables -A FORWARD -i %i -j ACCEPT; iptables -A FORWARD -o %i -j ACCEPT; iptables -t nat -A POSTROUTING -o ens5 -j MASQUERADE 
PostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -D FORWARD -o %i -j ACCEPT; iptables -t nat -D POSTROUTING -o ens5 -j MASQUERADE
ListenPort = 51820

[Peer]
PublicKey = <chiave pubblica del client>
AllowedIPs = 10.20.20.1/32
```

---

# Server Wireguard

Configurazione

- Facciamo partire il server

```bash
$ wg-quick up wg0

[#] ip link add wg0 type wireguard
[#] wg setconf wg0 /dev/fd/63
[#] ip -4 address add 10.0.0.1/24 dev wg0
[#] ip link set mtu 1420 up dev wg0
[#] iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o wg0 -j MASQUERADE

# Controlliamo che il tunnel sia attivo
$ sudo wg show

interface: wg0
  public key: tg/HNCscb0vfqZ1tROCPwiM1fc0HeRovLBLecl3ZkgI=
  private key: (hidden)
  listening port: 51820

peer: odtaqHFGwWF55nbucGvQ/OvU8LBHZVcDMX+Gz02ydVY=
  allowed ips: 10.20.20.1/32
```

---

# Client Wireguard

Configurazione

- Installiamo Wireguard

```bash
$ sudo apt install wireguard

Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  wireguard-tools
The following NEW packages will be installed:
  wireguard wireguard-tools
0 upgraded, 2 newly installed, 0 to remove and 11 not upgraded.
Need to get 84.4 kB of archives.
After this operation, 302 kB of additional disk space will be used.
Do you want to continue? [Y/n] 
Get:1 http://ftp.arnes.si/mirrors/raspbian/raspbian bullseye/main armhf wireguard-tools  [76.2 kB]
Get:2 http://ftp.arnes.si/mirrors/raspbian/raspbian bullseye/main armhf wireguard  [8164 B]
```

---

# Client Wireguard

Configurazione

- Generiamo una coppia di chiavi pubblica-privata per il client(peer)

```bash
wg genkey | tee privatekey | wg pubkey > publickey
```

<br>

- Configuriamo il client creando il file `/etc/wireguard/wg0.conf` ed inseriamo la config seguente::

```toml
[Interface]
Address = 10.20.20.1/32
PrivateKey = <chiave privata del client>
DNS = 1.1.1.1

[Peer]
PublicKey = <chiave pubblica del server>
Endpoint = <SERVER_PUBLIC_IP>:51820
AllowedIPs = 0.0.0.0/0, ::/0
```


---

# Client Wireguard

Configurazione

- Creiamo il tunnel VPN

```bash
$ wg-quick up wg0


# Controlliamo che il tunnel sia attivo
$ sudo wg show

interface: wg0
  public key: odtaqHFGwWF55nbucGvQ/OvU8LBHZVcDMX+Gz02ydVY=
  private key: (hidden)
  listening port: 52098
  fwmark: 0xca6c

peer: tg/HNCscb0vfqZ1tROCPwiM1fc0HeRovLBLecl3ZkgI=
  endpoint: 172.16.10.1:51820
  allowed ips: 0.0.0.0/0, ::/0
```

---

# Test del tunnel

Test 

- Eseguiamo il ping dal client al web server:

```bash
$ ping 10.0.0.1

PING 10.10.10.1 (10.10.10.1) 56(84) bytes of data.
64 bytes from 10.10.10.1: icmp_seq=1 ttl=63 time=32.0 ms
64 bytes from 10.10.10.1: icmp_seq=2 ttl=63 time=13.2 ms
64 bytes from 10.10.10.1: icmp_seq=3 ttl=63 time=15.6 ms

```
<br>

- Se il ping avverrà con successo, il tunnel funziona correttamente


---

# Test del tunnel

Test 

- Ora possiamo accedere al web server remoto in modo sicuro

```bash
$ wget http://10.10.10.1:8000

Connecting to 10.10.10.1:8000... connected.
HTTP request sent, awaiting response... 200 OK
Length: 14 [text/html]
Saving to: ‘index.html’

index.html          100%[===================>]      14  --.-KB/s    in 0.007s  

2024-02-13 11:57:19 (1.85 KB/s) - ‘index.html’ saved [14/14]

```


---

# Ringraziamenti

Grazie

Si ringrazia lo studente Andrea Canale (5INFO 2023/2024) per il contributo a queste slide