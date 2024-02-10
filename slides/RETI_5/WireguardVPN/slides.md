---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
#highlighter: shikiji
lineNumbers: false
info: |
    Slides sulle VPN con protocollo Wireguard
drawings:
  persist: false
transition: slide-left
title: Wireguard VPN 
mdc: true
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
materia: "RETI"
as: "2022/2023"
version: '1.0.0'
---

# Wireguard VPN

"Extremely simple yet fast and modern VPN"

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# Cos'è Wireguard?

"Extremely simple yet fast and modern VPN"

Wireguard è un protocollo VPN moderno(2015) scritto da Jason A. Donenfeld pensato per essere veloce, semplice e sicuro.

Wireguard usa una connessione UDP per garantire una maggiore velocità degli altri protocolli. Inoltre, su Linux e Windows, il protocollo viene eseguito a livello kernelspace che garantisce velocità maggiori di altri protocolli userspace. 

Wireguard non prevede la necessità di certificati rilasciati da una CA ma semplicemente uno scambio di chiavi pubbliche.

La sicurezza è garantita dall'utilizzo di 5 algoritmi di crittografia moderni e molto sicuri, Wireguard quando stabilisce la prima connessione scambia una handshake contenente delle chiavi simmetriche con il peer e ogni pochi minuti(configurabili) queste chiavi cambiano.
Inoltre, per mitigare attacchi DoS wireguard non alloca le risorse della connessione finchè la sequenza iniziale di handshake non termina, questo viene fatto mettendo un token univoco impossibile da decriptare senza possedere la chiave pubbliche del peer.

---

# Configuriamo il server Wireguard

```bash
# Abilitiamo l'IP forwarding sulla nostra macchina
sysctl -w net.ipv4.ip_forward=1
# Abilitiamo la porta sul firewall(debian o altre distribuzioni)
iptables -I INPUT -p udp --dport 51820 -j ACCEPT
```

Generiamo la coppia chiave pubblica-privata. DA FARE SIA SUL SERVER CHE SUL CLIENT

```bash
wg genkey | tee privatekey | wg pubkey > publickey
```

Scriviamo la config del server che chiameremo wg0.conf:

```toml
[Interface]
PrivateKey = <Contenuto del file privatekey>
Address = 10.0.0.1/24
PostUp = iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o <NOME_INTERFACCIA> -j MASQUERADE
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT; iptables -t nat -D POSTROUTING -o <NOME_INTERFACCIA> -j MASQUERADE
ListenPort = 51820

[Peer]
PublicKey = <Contenuto del file publickey del client>
AllowedIPs = 10.0.0.2/32
```

---

# Abilitiamo il server Wireguard e creaiamo il primo peer

Facciamo partire il server
```bash
wg-quick up wg0
# Controlliamo che il tunnel sia attivo
wg show
```

Generiamo una chiave privata e creiamo un file sul client chiamato wg0.conf e mettiamoci la seguente config:

```toml
[Interface]
Address = 10.0.0.2/32
PrivateKey = <Chiave privata del client>
DNS = 1.1.1.1

[Peer]
PublicKey = <Chiave pubblica del server>
Endpoint = <SERVER_IP>:51820
AllowedIPs = 0.0.0.0/0, ::/0
```

Facciamo partire il tunnel anche qui.

---

# Proviamo la connessione

Eseguiamo il ping dal client al server:

```bash
ping 10.0.0.1
```

Se il ping avverrà con successo, il tunnel funziona correttamente
