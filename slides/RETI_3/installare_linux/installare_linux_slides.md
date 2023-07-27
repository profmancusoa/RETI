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
materia: RETI 3
as: 2023/2024
version: '1.0.0'

---  

# RETI 3

Installare Linux

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>


---

# Installazione di Linux 
 
Intro

- Windows e macOS sono sistemi operativi
- Android e iOS sono sistemi operativi
- Comunemente quando ci riferiamo a Linux, pensiamo ad un sistema operativo

- Tuttavia questo non è tecnicamente corretto
- Quando parliamo di `Linux` stiamo parlando del `kernel` di un sistema operativo e non del sistema operativo stesso

<br>
<Banner padding=20px>
Il kernel si trova al centro del sistema operativo e controlla tutte le funzioni più importanti del sistema hardware (CPU, Memoria, Disco, Rete,...)
</Banner>

---

# Installazione di Linux 
 
Intro


- Nel mondo Linux ci sono moltissimi sisteemi operativi **basati** su Linux e prendono il nome di `distribuzioni`

<br><br>
<Banner padding=30px>
Una distribuzione GNU/Linux, in informatica, è una distribuzione software di un sistema operativo realizzato a partire dal kernel Linux e da un sistema di base di applicativi GNU. Tali distribuzioni appartengono quindi alla sottofamiglia dei sistemi operativi GNU e, più in generale, alla famiglia dei sistemi Unix-like, perché ispirati a Unix e in certa misura compatibili con esso.
</Banner>

---

# Installazione di Linux 
 
Intro

- Ci sono centinaia di [distribuzioni Linux](https://upload.wikimedia.org/wikipedia/commons/8/8c/Linux_Distribution_Timeline_Dec._2020.svg)

<img src="/media/install_27_17-04-59.png" width="950" style="margin:auto;position:relative; left: 0px; top: 20px;">


---

# Installazione di Linux 
 
Intro


<img src="/media/install_27_17-06-34.png" width="800" style="margin:auto;position:relative; left: 0px; top: -20px;">


---

# Installazione di Linux 
 
Intro

- `SLS` è la prima distribuzione della storia (oggi non esiste più)
- Ci sono poi essenzialmente 3 distribuzioni che sono alla radice dei loro rispettivi alberi

`Slackware`: derivata direttamente da SLS - Distro, un tempo, solo per mega smanettoni

`Debian`: basata solo su software open e quella con l'albero più grande di tutte. `Ubuntu` è nella catena gerarchica di Debian

`Red Hat`: importante per il mondo business

Negli ultimi anni, una distro di Linux chiamata `Android` si è diffusa su miliardi di dispositivi mobili

---

# Installazione di Linux 
 
Intro

- Ogni distribuzioni ha delle caratteristiche proprie che la rendono differenti dalle altre
- Tuttavia tutte sono accumunate da un unico kernel Linux
- Noi prenderemo come riferimento le distribuzioni basate si `Debian` in quanto sono le più diffuse
- Tuttavia imparare ad usare una distribuzione, conoscendone altre, è un lavoro abbastanza facile

- Nello specifico useremo una derivata di Ubuntu che si chiama `ZorinOS`

<img src="/media/install_27_17-06-35.png" width="350" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# Installazione di Linux 
 
Intro

<br>
<Banner padding=30px>
Zorin OS è una distribuzione GNU/Linux multilingua derivata da Ubuntu, sviluppata con l'obiettivo di creare un'alternativa in grado di facilitare il passaggio degli utenti di Microsoft Windows a GNU/Linux.
</Banner>
<br><br>

- Nello specifico useremo la versione [Zorin OS 16.2 Education](https://zorin.com/os/education/)

<br><br>

> We believe computers have the power to make learning better and more impactful. That's why we created Zorin OS Education. It helps prepare students with the skills they need to understand the world of today and build their world of tomorrow.

---

# Installazione di Linux 
 
Intro

<img src="/media/install_27_17-20-25.png" width="800" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# Installazione di Linux 
 
Intro

<img src="/media/install_27_17-22-19.png" width="650" style="margin:auto;position:relative; left: 0px; top: -30px;">

---

# Installazione di Linux 
 
Intro

<img src="/media/install_27_17-23-40.png" width="800" style="margin:auto;position:relative; left: 0px; top: 20px;">

---

# Installazione di Linux 
 
Intro

<img src="/media/install_27_17-24-18.png" width="650" style="margin:auto;position:relative; left: 0px; top: -40px;">

---

# Installazione di Linux 
 
Intro

- In passato installare Linux era un'operazione che richiedeva moltissime competenze ed una conoscenza del proprio ssistema dettagliata
- Ricordo le mie prime installazioni di Linux negli anni '90 su floppy disk
- Lente, spesso non funzionanti e poco documentate


- Fortunatamente oggi la situazione è notevolmente migliorata
- L'installazione di Linux con le  moderne distribuzioni non richiede nessuna competenza particolare 
- Il processo è facilissimo, veloce e indolore
- Vediamo in dettaglio i pochi passi necessari

---

# Installazione di Linux 
 
Passo #1

<div style="width:40%;height: 85%;">

- All'avvio della ISO di installazione di ZorinOS viene presentato questo menù

- Seleziona la prima voce (caso normale) 

- Seleziona la seconda voce in caso di problemi con la scheda grafica

- Premi `INVIO` o `ENTER` per dare inizio al processo di installazione

</div>

<img src="/media/install_27_15-20-23.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #2

<div style="width:40%;height: 85%;">

- Seleziona `Italiano` come lingua di installazione

- Premi `Installa Zorin OS` per procedere con l'installazione

</div>

<img src="/media/install_27_15-27-23.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #3

<div style="width:40%;height: 85%;">

- Scegli il `layout` della tastiera

- Viene selezionato un valore di default in funzione della lingua scelta al passo precedente
  
- Puoi ovviamente cambiarlo a piacimento

- Premi *Avanti*

</div>

<img src="/media/install_27_15-28-26.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #4

<div style="width:40%;height: 85%;">

- Seleziona tutte le voci come indicato in modo da:

    - Scaricare tutti gli aggiornamenti durante l'installazione
    - Installare componenti di terze parti, come per esempio driver per NVIDIA o per moduli WiFi
    - Non partecipare alla raccolta dati 

- Premi *Avanti*

</div>

<img src="/media/install_27_15-29-06.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #5

<div style="width:40%;height: 85%;">

- Per un'installazione `single boot`, in cui si utilizza tutto lo spazio disponibile sul disco, scegliere la prima opzione come in figura

- Le altre funzioni disponibili sono da utilizzare in scenari avanzati come un'installazione `dual boot`

- Premi *Installa*
  
</div>

<img src="/media/install_27_15-29-45.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #6

<div style="width:40%;height: 85%;">

- Conferma la scelta fatta sul partizionamento automatico del disco

- Premi *Avanti*

</div>

<img src="/media/install_27_15-30-32.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #7

<div style="width:40%;height: 85%;">

- Scegli il fuso orario in cui ti trovi

- Al termine dell'installazione avrai così un sistema con le impostazioni di data e ora corrette

- Premi *Avanti*

</div>

<img src="/media/install_27_15-30-41.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #8

<div style="width:40%;height: 85%;">

- Configura il tuo `account`

- Inserisci ul tuo nome e cognome
  
- Scegli il nome del computer (il sistema propone un nome che puoi cambiare)
  
- Scegli il tuo nome utente

- Inserisci una password sicura (se la dimentichi  non potrai accedere al tuo sistema)

- Seleziona *Richiedere la password personale per accedere*
  
- Premi *Avanti*

</div>

<img src="/media/install_27_15-32-35.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #9

<div style="width:40%;height: 85%;">

- Ora il sistema inizia a copiare tutti i file necessari per creare un0installazione completa di Linux

- Attendi il completamento di questa fase

</div>

<img src="/media/install_27_15-32-51.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #9

<div style="width:40%;height: 85%;">

- Terminata la copia dei file il sistema si aggiorna automaticamente e scarica altri pacchetti dalla rete

- Attendi il completamento di questa fase
  
</div>

<img src="/media/install_27_15-40-50.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #9

<div style="width:40%;height: 85%;">

- Il sistema di installazione effettua la configurazione dei pacchetti software e del sistema

- Attendi il completamento di questa fase

</div>

<img src="/media/install_27_15-49-13.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #10

<div style="width:40%;height: 85%;">

- **MOLTO BENE**

- L'installazione di ZorinOS è terminata

- Premi *Riavvia Ora*

</div>

<img src="/media/install_27_15-53-05.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #11

<div style="width:40%;height: 85%;">

- ZorinOS sta effettuando il boot

- Attendi qualche instante che il sistema operativo venga caricato

</div>

<img src="/media/install_27_15-54-06.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #12

<div style="width:40%;height: 85%;">

- **MOLTO BENE**

- Se vedi lo schermo di login significa che tutto è andato bene

- Seleziona con il mouse il tuo account

- Inserisci la password che hai digitato durante l'installazione (ricorda la password è *case sensitive*)

- Premi *Invio*
  
</div>

<img src="/media/install_27_15-54-29.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #13

<div style="width:40%;height: 85%;">

- Bene ora hai effettuato il primo login alla tua nuova installazione di Linux ZorinOS 

- Al primo boot Zorin ci offre una visita guidata del sistema

- Premi *Avvia visita* e segui le istruzioni su schermo
  
</div>

<img src="/media/install_27_15-55-04.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #14

<div style="width:40%;height: 85%;">

- **OTTIMO**

- Ora sei pronto ad utilizzare il sistema operativo più diffuso al mondo (LINUX)

</div>

<img src="/media/install_27_15-58-34.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #15

<div style="width:40%;height: 85%;">

- Quando vuoi spegnere il sistema o fare lo `shut down`

- Seleziona l'icona in basso a destra

- Seleziona *Spegni / Termina sessione*

</div>

<img src="/media/install_27_16-00-08.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #16

<div style="width:40%;height: 85%;">

- Seleziona *Spegni*

</div>

<img src="/media/install_27_16-00-30.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

---

# Installazione di Linux 
 
Passo #17

<div style="width:40%;height: 85%;">

- Conferma di voler effettivamente fare lo shut down del sistema

- Attendi pochi istanti affinchè il sistema sia completamente spento

</div>

<img src="/media/install_27_16-00-38.png" width="550" style="margin:auto;position:relative; left: 200px; top: -420px;">

