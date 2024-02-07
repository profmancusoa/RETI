---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.
drawings:
  persist: false
transition: slide-left
title: Linux Firewall
mdc: true
---

# Linux firewall

Come funziona il firewall su linux

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
---

# Cos'è un firewall?
Che cos'è un firewall 

Un firewall è un software, talvolta anche un hardware in casi specifici.

Il firewall fa da intermediario in una connessione tra dispositivi, come nello schema.

![Local Image](/media/schema.png)

---
layout: default
---

# Cosa fa un firewall
Azioni dei un firewall

Un firewall è in grado di rifiutare o accettare determinati pacchetti provenienti o verso determinati siti internet e ip.

Il filtraggio avviene tramite una scannerizzazione del pacchetto grazie a delle policy (regole).

Una volta che viene preso in esame un pacchetto, prima è analizzato dal firewall e scansionato, poi viene accettato o rifiutato.

![Local Image](/media/policy.png)

---
level: 2
---

# Le policy
Cosa sono le policy

le policy non sono nient'altro che delle regole che controllano il pacchetto.

Su linux ad esempio per gestire queste policy utilizziamo il tool **iptables** che dopo vedremo più approfonditamente.

Le policy possono essere strutturate concettualmente in due modi differenti:
- blacklist
- whitelist

---
level: 2
---

# Policy blacklist
Cosa sono le policy blacklist

Le policy blacklist hanno un approccio con l'intento di bloccare solo alcuni indirizzi specifici quindi ad esempio in una rete **192.168.1.0/24** potremmo indicare che l'indirizzo **192.168.1.35** non può andare in rete, mentre tutti gli altri indirizzi si.

Potremmo anche immaginarci un flow chart come processo logico
![Local Image](/media/blacklist.png)

---
level: 2
---

# Policy whitelist
Cosa sono le policy whitelist

Le policy whitelist al contrario hanno un approccio con l'intento di bloccare tutti gli indirizzi e di lasciarne passare solo alcuni, quindi ad esempio in una rete **192.168.1.0/24** potremmo indicare che solo l'indirizzo **192.168.1.35** può andare in rete, mentre tutti gli altri indirizzi li blocca.

Potremmo anche immaginarci un flow chart come processo logico
![Local Image](/media/whitelist.png)

---
level: 2
---

# Netfilter
Cos'è Netfilter all'interno di linux

Netfilter rappresenta un insieme di funzionalità all'interno del kernel che permettono la gestione dei pacchetti all'interno della rete.

Il progetto Netfilter consente il filtraggio dei pacchetti, la traduzione degli indirizzi di rete, la registrazione dei pacchetti, l'accodamento dei pacchetti nello spazio utente e altre manipolazioni dei pacchetti.

Netfilter viene usato da altri tool come Iptables <br>
iptables è un software firewall generico che consente di definire set di regole. Ogni regola all'interno di una tabella IP è composta da un numero di classificatori (corrispondenze iptables) e un'azione connessa (destinazione iptables).

---
---

# Iptables
Cosa fa il tool *iptables* su linux

Iptables è uno strumento legacy utilizzato per la gestione delle regole del firewall su sistemi Linux. Può essere utilizzato per configurare le regole del firewall per IPv4 e si installa con: 
```sh
sudo apt install iptables
```

---
level: 2
---

# Iptables
Come gestire il tool *iptables* e le relative policy

Le policy hanno due tipologie di pacchetti:
- INPUT
- OUTPUT

Le regole con *INPUT* rigurdano i pacchetti in entrata, le regole con *OUTPUT* riguardano i pacchetti in uscita dal computer.

Creare una policy per bloccare un indirizzo ip:
```sh
sudo iptables -A OUTPUT -d <indirizzo_IP_da_bloccare> -j DROP
sudo iptables -A INPUT -d <indirizzo_IP_da_bloccare> -j DROP
```

Creare una policy per accettare un indirizzo ip:
```sh
sudo iptables -A OUTPUT -d <indirizzo_IP_da_accettare> -j ACCEPT
sudo iptables -A INPUT -d <indirizzo_IP_da_accettare> -j ACCEPT
```

---
level: 2
---

# Iptable
Policy

Gestire un range di indirizzi
```sh
# rifiutare i pacchetti
sudo iptables -A OUTPUT -m iprange --dst-range <indirizzo_iniziale>-<indirizzo_finale> -j DROP
sudo iptables -A INPUT -m iprange --dst-range <indirizzo_iniziale>-<indirizzo_finale> -j DROP
# accettare i pacchetti
sudo iptables -A OUTPUT -m iprange --dst-range <indirizzo_iniziale>-<indirizzo_finale> -j ACCEPT
sudo iptables -A INPUT -m iprange --dst-range <indirizzo_iniziale>-<indirizzo_finale> -j ACCEPT
```

Visualizzare tutte le policy dichiarate
```sh
sudo iptables -L
```

Per rimuovere una regola puoi utilizzare il comando **iptables -D** seguito dalla tipologia **INPUT/OUTPUT** e dal numero della regola. Se la regola da rimuovere è la seconda regola, puoi usare il numero 2
```sh
sudo iptables -D <INPUT/OUTPUT> 2 # eliminare la seconda regola della lista INPUT o OUTPUT
```

---
level: 2
---

# Iptable
Policy

Policy per bloccare tutti i pacchetti:
```sh
# il firewall bloccherà subito tutti i pacchetti
sudo iptables -A OUTPUT -j DROP # blocca tutti i pacchetti in uscita
sudo iptables -A INPUT -j DROP # blocca tutti i pacchetti in entrata
```

---
level: 2
---

# Esercitazione
Esercitazione sul blocco dei pacchetti con iptables

Lancia sul terminale il comando seguente per bloccare tutti i pacchetti in uscita a prova ad andare su un sito internet.
```sh
sudo iptables -A OUTPUT -j DROP
```

---
level: 2
---

# Iptables
Ripristino dall'esercitazione

Per ripristinare la situazione a quella precente ti basterà lanciare sul terminale:
```sh
sudo iptables -L
```
e cercare la dicitura
```sh
Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination         
DROP       all  --  0.0.0.0/0            0.0.0.0/0 
```
Come puoi vedere la linea ci indica che tutti i pacchetti sono scartati (DROP)
```sh
DROP       all  --  0.0.0.0/0            0.0.0.0/0 
```
ora lancia sul terminale 
```sh
sudo iptables -D OUTPUT 1  
```
perchè è la prima regola della lista degli OUTPUT

---
level: 2
---

# Conclusione
Conclusione della lezione

Ora tocca a voi sparimentare tutte le possibilità che offre il tool iptables.
