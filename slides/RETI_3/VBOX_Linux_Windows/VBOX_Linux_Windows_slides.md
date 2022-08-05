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

<style>
  .alto {
    width: 50%;
    position: absolute;
    margin: auto;
    top: -40%;
    left: 50%;
    right: 0%;
    bottom: 0%;
  }

  .centro {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 50%;
    position: absolute;
    margin: auto;
    top: 0%;
    left: 45%;
    right: 0%;
    bottom: 0%;
  }
</style>


# SISTEMI & RETI

Virtualizzazione e Virtual Box

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---
layout: cover
---

# Virtualizzazione

PC e Macchine Virtuali


--- #slide 1

# Virtualizzazione

- ```Virtuale``` *agg. [dal lat. mediev. (dei filosofi scolastici) virtualis, der. di virtus «virtù; facoltà; potenza»: v. virtù]. – 1. a. In filosofia, sinon. di potenziale, cioè ```«esistente in potenza» (contrapp. a attuale, reale, effettivo).``` b. In fisica, in matematica e nella tecnica, ```in contrapp. a reale, effettivo```, si dice di enti o grandezze che, pur non corrispondendo a oggetti o quantità reali, possono essere introdotti o considerati per determinati scopi*

*da: [https://www.treccani.it/vocabolario/virtuale/](https://www.treccani.it/vocabolario/virtuale/)*

--- #slide 1

# Virtualizzazione

Un Computer Virtuale

- In informatica il termine `virtualizzazione` si riferisce alla possibilità di astrarre, i componenti hardware del calcolatore, al fine di renderli disponibili al software in forma di `risorsa virtuale`.
- In altre parole, la **virtualizzazione** permette di creare, uno o più, PC/Server virtuale dotato di tutti i componenti (Disco fisso, RAM, CPU, Scheda di rete), che fisicamente "girano" su un unico PC/Server fisico.

- Questo PC/Server Virtuale, prende il nome di `macchina virtuale`.


- Il computer fisico si chiama ```host```
- Il computer virtuale si chiama ```guest```
- Pertanto 1 singolo computer ***host*** ospita molte Virtual Machine ***guest***

---
layout: two-cols
---

# Modello Fisico

<img src="/media/vboxaa.png" width="300"/>

::right::

# Modello Virtuale

<img src="/media/vboxab.png" width="400" />

--- #slide 1

# Virtualizzazione

Host & Guest

<center>
<img src="/media/vboxac.png" width="450" />
</center>

--- #slide 1

# Virtualizzazione

Un Computer Virtuale

- Tramite questo processo è quindi possibile installare più sistemi operativi diversi su hardware virtuale.
- Per esempio posso installare:
  - Windows su Linux
  - Linux su Mac OS
  - Windows su Mac OS
  - Android su Linux
  - ...
-  Tale tecnica è applicabile sia su sistemi desktop che su sistemi server. 
-  Ha inizio negli anni sessanta con i mainframe (System/360 model 67), come metodo per dividere logicamente le risorse di sistema fornite dal mainframe tra le diverse applicazioni.


--- #slide 1

# Virtualizzazione

PC/Server Virtuali

<center>
<img src="/media/vboxad.png" width="450" />
</center>

--- #slide 1

# Virtualizzazione

PC/Server Virtuali

<center>
<img src="/media/vboxae.png" width="450" />
</center>

--- #slide 1

# Virtualizzazione

PC/Server Virtuali

<center>
<img src="/media/vboxaf.png" width="450" />
</center>

--- #slide 1

# Virtualizzazione

PC/Server Virtuali

- Esistono vari tipi e metodi per virtualizzare le risorse HW e SW
- Linux: supporta a livello nativo del Kernel la virtualizzazione tramite ***KVM (Kernel Virtual Machine)***
  
- Su Windows si possono usare vari software:
  - Hyper-V
  - VMWare
  - **Virtual Box**
  - Qemu
  
- Su MAC il più noto è:
  - Parallels

*Noi vederemo come installare e configurare Virtual Box per realizzare delle macchine virtuali sui computer del laboratorio*

---
layout: cover
---

# VirtualBox

Installazione


--- #slide 1

# VirtualBox

Installazione

<img src="/media/vbox01.png" class="centro" />

- [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)
- Scarichiamo il pacchetto per Windows
- Al termine, avviamo l'installazione di VirtualBox

--- #slide 2

# VirtualBox

Installazione

<img src="/media/vbox02.png" class="centro" />

- Seguiamo le istruzioni a video
- Accettiamo le impostazioni di default
  
--- #slide 3

# VirtualBox

Installazione

<img src="/media/vbox03.png" class="centro" />

--- #slide 4

# VirtualBox

Installazione

<img src="/media/vbox04.png" class="centro" />

- Terminiamo l'installazione
- Appena finito VirtualBox si avvierà dasolo
  
---
layout: cover
---

# VirtualBox

Creazione di una Macchina Virtuale (VM)


--- #slide 5

# Virtual Machine

Creazione

<img src="/media/vbox05.png" class="centro" />

- Crea una nuova Virtual Machine
- Premi il pulsante **Nuova**

--- #slide 6

# Virtual Machine

Creazione

<img src="/media/vbox06.png" class="centro" />

- Assegna un nome alla VM
- Scegli un percorso dove salvare la VM
  - Sostituisci ADMIN con il tuo account
- Seleziona il tipo di sistem operativo 
- Seleziona la versione del sistema operativo

- NOTA: **(Operating System = OS)**

--- #slide 7

# Virtual Machine

Creazione

<img src="/media/vbox07.png" class="centro" />

- Definisci la capacità della RAM
  - 2GB è un valore ottimo come default
  - Se vuoi maggior prestazioni assegna 4GB
- Chiaramente la dimensione della RAM virtuale <br />deve essere minore della capacità  <br />della RAM fisica


- NOTA:
  - Anche il sistema operativo host  <br />ha bisogno di RAM

--- #slide 8

# Virtual Machine

Creazione

<img src="/media/vbox08.png" class="centro" />

- Ora crea un nuovo HDD virtuale
  
- NOTA: in alcune situazioni è utile poter usare <br />un disco virtuale già esistente
--- #slide 9

# Virtual Machine

Creazione

<img src="/media/vbox09.png" class="centro" />

- Sleziona il tipo di disco fisso che vuoi creare
- I 3 formati sono:
  - **VDI**: Default per Virtual Box di Oracle
  - **VHD**: formato di Microsfot ormai obsoleto
  - **VMDK**: formato di VMWare
  
- Per i nostri usi VDI è la scelta ideale
  
--- #slide 10

# Virtual Machine

Creazione

<img src="/media/vbox10.png" class="centro" />

- Ora scegli il tipo di allocazione:
  - **Dinamica** : alloca solo lo spazio effetivamente <br />usato dal sistema. Più lento a run-time
  - **Statica**: alloca tutto lo spazio assegnato.<br /> Più veloce rispetto all'allocazione dinamica.
  
  - Per i nostri scopi l'allocazione Dinamica<br /> è preferibile


--- #slide 11

# VirtualBox

Creazione

<img src="/media/vbox11.png" class="centro" />

- Scegli il percorso dove risiederà <br />il disco fisso virtuale
  - Sostituisci ADMIN con il tuo account
- Alloca una capacità sufficiente per <br />il sistema operatico e gli applicativi

- NOTA: con allocazione dinamica, <br />il valore scelto rappresenta la massima<br /> dimensione dell'HDD
   
--- #slide 12

# VirtualBox

Creazione

<img src="/media/vbox12.png" class="centro" />

- Ora che la VM è creata è disponibile per l'uso
- I passi svolti fino ad ora, rappresentano <br />l'assemblaggio di un PC nel mondo fisico.
- Al momento la VM, come un PC appena <br />assemblato, non è dotata ancora di un <br />sistema operativo

- ESERCIZIO #01: 
  - Avvia la VM appena creata
  - Riscontra il funzionamento
  - Non ti aspettavi questo comportamento?
  - Come ti aspettavi si comportasse?
  
---
layout: cover
---

# VirtualBox

Configurazione della VM per Win10

--- #slide 13

# VirtualBox

Configurazione

<img src="/media/vbox13.png" class="centro" />

- Inizia la configurazione della VM
- Premi ***Impostazioni***
  
--- #slide 14

# VirtualBox

Configurazione

<img src="/media/vbox14.png" class="centro" />

- Seleziona **Sistema**
- Imposta l'avvio dal disco ottico
- Abilita I/O APIC
- Abilita EFI

- NOTA: questi sono i passi che su un PC reale <br /> faresti nel BIOS
  
--- #slide 15

# VirtualBox

Configurazione

<img src="/media/vbox15.png" class="centro" />

- Seleziona la TAB **Processore**
- In questa sezione configura i parametri <br />della CPU virtuale
- Assegna 2 CPU
- Abilita le estensioni per la virtualizzazione
  
- NOTA: se assegni troppi core virtuali, <br />poi il sistema host sarà fortemente rallentato
  
--- #slide 16

# VirtualBox

Configurazione

<img src="/media/vbox16.png" class="centro" />

- Seleziona **Achiviazione**
- Qui vedrai l'HDD precedentemente creato
- Un CD-ROM vuoto
- Ora dobbiamo "inserire" un CD nel CD-ROM
- Pertanto scegli un file da disco
  
--- #slide 17

# VirtualBox

Configurazione

<img src="/media/vbox17.png" class="centro" />

- Seleziona la ISO di Windows 10

- NOTA: questa operazione è l'equivalente <br />virtuale di inserire un CD fisico nel <br />lettore CD-ROM del computer
--- #slide 18

# VirtualBox

Configurazione

<img src="/media/vbox18.png" class="centro" />

- Come vedi, ora il CD (ISO) di Windows 10 <br />è presente nel computer virtuale
- La confiigurazione base è terminata
- Premi OK per procedere

---
layout: cover
---

# VirtualBox

Avvio ed installazione di Windows 10

--- #slide 19

# VirtualBox

Installazione Windows 10

<img src="/media/vbox19.png" class="centro" />

- Ora che hai creato e configurato la VM <br />puoi procedere con l'avvio
- Premi **Avvia**
  
- ESERCIZIO #02:
  - Cosa ti aspetti che succeda?
  - Ragionaci prima di avviare la VM
  - Verifica se quanto immaginato è corretto


--- #slide 20

# VirtualBox

Installazione Windows 10

<img src="/media/vbox20.png" class="centro" />

- Il sistema ti chiede conferma per <br />l'avvio da CD-ROM
- Premi un tasto qualsiasi entro 2 secondi


--- #slide 21

# VirtualBox

Installazione Windows 10

<img src="/media/vbox21.png" class="centro" />

- Ora il sistema fa il boot da CD-ROM

--- #slide 22

# VirtualBox

Installazione Windows 10

<img src="/media/vbox22.png" class="centro" />

- Come puoi notare è partito l'installer <br />di Windows 10
- Segui le istruzioni a video
  
--- #slide 23

# VirtualBox

Installazione Windows 10

<img src="/media/vbox23.png" class="centro" />

- Avvia l'installazione di Windows 10
  
--- #slide 24

# VirtualBox

Installazione Windows 10

<img src="/media/vbox24.png" class="centro" />

- Siccome non hai un codice seriale
- Premi la scritta indicata


--- #slide 25

# VirtualBox

Installazione Windows 10

<img src="/media/vbox25.png" class="centro" />

- Seleziona la versione di Windows 10 <br />che vuoi installare
  
--- #slide 26

# VirtualBox

Installazione Windows 10

<img src="/media/vbox26.png" class="centro" />

- Accetta le condizioni della licenza
  
--- #slide 27

# VirtualBox

Installazione Windows 10

<img src="/media/vbox27.png" class="centro" />

- Scegli  l'installazione completa di Windows 10
  
--- #slide 28

# VirtualBox

Installazione Windows 10

<img src="/media/vbox28.png" class="centro" />

- Scegli l'unico HDD disponibile

- ESERCIZIO #03:
  - Perchè c'è un solo HDD disponibile?
  - Ti aspettavi una configurazione diversa?
  
--- #slide 29

# VirtualBox

Installazione Windows 10

<img src="/media/vbox29.png" class="centro" />

- Ok l'installazione è partita
- Porta pazienza qualche minuto....
  
--- #slide 30

# VirtualBox

Installazione Windows 10

<img src="/media/vbox30.png" class="centro" />

- Ora Windows fà il reboot

--- #slide 31

# VirtualBox

Installazione Windows 10

<img src="/media/vbox31.png" class="centro" />

- Abbi pazienza, è Windows!! :)
  
--- #slide 32

# VirtualBox

Installazione Windows 10

<img src="/media/vbox32.png" class="centro" />

- Inizia la configurazione di Windows 10
- Segui i passi a video
  
--- #slide 33

# VirtualBox

Installazione Windows 10

<img src="/media/vbox33.png" class="centro" />

--- #slide 34

# VirtualBox

Installazione Windows 10

<img src="/media/vbox34.png" class="centro" />

--- #slide 35

# VirtualBox

Installazione Windows 10


<img src="/media/vbox35.png" class="centro" />

- Usa un tuo indirizzo di email privato
- ***Non usare l'email istituzionale Agnelli***
  
--- #slide 36

# VirtualBox

Installazione Windows 10


<img src="/media/vbox36.png" class="centro" />

- Non dimenticare la password!!
  
--- #slide 37

# VirtualBox

Installazione Windows 10

<img src="/media/vbox37.png" class="centro" />

--- #slide 38

# VirtualBox

Installazione Windows 10


<img src="/media/vbox38.png" class="centro" />

- Imposta un PIN e ***NON DIMENTICARLO***
  
--- #slide 39

# VirtualBox

Installazione Windows 10

<img src="/media/vbox39.png" class="centro" />


--- #slide 40

# VirtualBox

Installazione Windows 10


<img src="/media/vbox40.png" class="centro" />


--- #slide 41

# VirtualBox

Installazione Windows 10


<img src="/media/vbox41.png" class="centro" />


--- #slide 42

# VirtualBox

Installazione Windows 10


<img src="/media/vbox42.png" class="centro" />

- Come noti Windows non sà minimamente<br /> che sta girando in una VM
- Infatti ti chiede di non spegnere il PC :)
  
--- #slide 43

# VirtualBox

Installazione Windows 10


<img src="/media/vbox43.png" class="centro" />

- Perfetto: Windows 10 è installato <br />correttamente in una VM
  
--- #slide 44

# VirtualBox

Installazione Windows 10


<img src="/media/vbox44.png" class="centro" />

- Ora rimuovo il CD di Windows 10 (ISO)dal lettore CD-ROM
  
--- #slide 45

# VirtualBox

Installazione Windows 10


<img src="/media/vbox45.png" class="centro" />

- Inserisci il CD delle ***Guest Additions***
- Così potrai avere driver video migliori <br />che ti permettono una visualizzazione <br />full screen

--- #slide 46

# VirtualBox

Installazione Windows 10

<img src="/media/vbox46.png" class="centro" />

- Installa le ***Guest Additions***
- Fai doppio-click sull'icona del CD-ROM
  

--- #slide 47

# VirtualBox

Installazione Windows 10

<img src="/media/vbox47.png" class="centro" />

--- #slide 48

# VirtualBox

Installazione Windows 10

<img src="/media/vbox48.png" class="centro" />

- Ora fai il rebbot
  
--- #slide 49

# VirtualBox

Installazione Windows 10

<img src="/media/vbox49.png" class="centro" />

- Perfetto, Windows 10 ora è pronto <br />per essere utilizzato

--- #slide 50

# VirtualBox

Installazione Windows 10

<img src="/media/vbox50.png" class="centro" />

- Per passare a schermo intero premi ```Host + F```
- Su un PC il tasto **Host** <br />equivale al tasto ```CTRL destro```

---
layout: cover
---

# VirtualBox

Creazione di una VM Linux

--- #slide 51

# VirtualBox

Creazione

<img src="/media/vbox51.png" class="centro" />

- La creazione di una VM per Linux <br />è ***esattamente uguale*** alla creazione di una <br />VM per Windows

- ESERCIZO #04:
  - Come mai la VM si crea nello stesso modo?
  - Ti aspettavi una procedura diversa?


--- #slide 52

# VirtualBox

Creazione

<img src="/media/vbox52.png" class="centro" />

--- #slide 53

# VirtualBox

Creazione

<img src="/media/vbox53.png" class="centro" />


--- #slide 54

# VirtualBox

Creazione

<img src="/media/vbox54.png" class="centro" />

--- #slide 55

# VirtualBox

Creazione

<img src="/media/vbox55.png" class="centro" />

--- #slide 56

# VirtualBox

Creazione

<img src="/media/vbox56.png" class="centro" />

--- #slide 57

# VirtualBox

Creazione

<img src="/media/vbox57.png" class="centro" />

--- #slide 58

# VirtualBox

Configurazione

<img src="/media/vbox58.png" class="centro" />

- In modo analogo a Windows 10 configuriamo <br />la VM per l'installazione di Linux

--- #slide 59

# VirtualBox

Configurazione

<img src="/media/vbox59.png" class="centro" />

- Non abilitare EFI
- Per Linux non è necessario
  
--- #slide 60

# VirtualBox

Configurazione

<img src="/media/vbox60.png" class="centro" />

--- #slide 61

# VirtualBox

Configurazione

<img src="/media/vbox61.png" class="centro" />

- Seleziona la TAB **Accelerazione** e scegli KVM

--- #slide 62

# VirtualBox

Configurazione

<img src="/media/vbox62.png" class="centro" />

- Seleziona **Schermo**
- Assegna 128 MB alla scheda video
- Abilita l'accelerazione 3D
  
--- #slide 63

# VirtualBox

Configurazione

<img src="/media/vbox63.png" class="centro" />

- Inserisci la ISO di Linux Mint
  
--- #slide 64

# VirtualBox

Configurazione

<img src="/media/vbox64.png" class="centro" />

--- #slide 65

# VirtualBox

Configurazione

<img src="/media/vbox65.png" class="centro" />

- Configurazione completata
- Premi OK per procedere con l'installazione
  
---
layout: cover
---

# VirtualBox

Installazione di Linux Mint

--- #slide 66

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox66.png" class="centro" />

- Avvia la VM di Linux
  
--- #slide 67

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox67.png" class="centro" />

- Il sistema fà il boot dal CD-ROM
- Parte l'installer di Linux Mint


--- #slide 68

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox68.png" class="centro" />

- Questa è una distribuzione Live quindi <br />puoi usare Linux anche senza installazione
- Per installare fai doppio-click sull'icona <br />del CD-ROM presente sul desktop
  
--- #slide 69

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox69.png" class="centro" />

- Segui le istruzioni a video
  
--- #slide 70

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox70.png" class="centro" />

--- #slide 71

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox71.png" class="centro" />

--- #slide 72

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox72.png" class="centro" />

- Conferma lo schema delle partizioni

--- #slide 73

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox73.png" class="centro" />

- Configura il tuo account
- NON dimenticare la password
  
--- #slide 74

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox74.png" class="centro" />

- Attendi qualche minuto
  
--- #slide 75

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox75.png" class="centro" />

- Riavvia la VM
  
--- #slide 76

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox76.png" class="centro" />

--- #slide 77

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox77.png" class="centro" />

- OK Linux Mint è installato
- Inserisci la tua password per accedere
  
--- #slide 78

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox78.png" class="centro" />

- Leggi brevemente le informazioni di benvenuto

--- #slide 79

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox79.png" class="centro" />

- Anche per Linux installa le Guest Additions

--- #slide 80

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox80.png" class="centro" />

--- #slide 81

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox81.png" class="centro" />

- Premi ```INVIO``` nella finestra di terminale

--- #slide 82

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox82.png" class="centro" />

- Riavvia Linux
  
--- #slide 83

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox83.png" class="centro" />

--- #slide 84

# VirtualBox

Installazione Linux Mint

<img src="/media/vbox84.png" class="centro" />

- Come prima per full screen ```HOST + F```
  
---
layout: cover
---

# VirtualBox

Installazione di Linux e Windows dual boot

--- #slide 85

# VirtualBox

Linux Dual Boot

- Un PC in cui è installato sia Windows che Linux, si dice che è configurato in ```dual boot```, in quanto l'utente può scegliere quale dei due (dual) sistemi operativi avviare (boot)
- Infatti una situazione molto comune è quella di voler installare Linux su un PC già dotato di Windows 10.
- Tuttavia questo processo comporta alcuni rischi in quanto è necessario effettuare delle operazioni avanzate.
- Nessun problema? Tramite la virtualizzazione possiamo apprendere la procedura senza nessun rischio fisico per il PC host.
- Una volta imparata la procedura la potremo applicare ad un computer fisico senza rischi.
 
--- #slide 85

# VirtualBox

Linux Dual Boot

<img src="/media/vbox85.png" class="centro" />

- Il fornitore del PC ha installato Windows 10, <br />allocando tutto lo l'HDD
- Per tale motivo per poter installare Linux <br />sullo stesso HDD (dual boot) è necessario <br />liberare dello spazio
- Successivamente Linux sarà installato <br /> in questo spazio libero
- In questo modo sia Linux che Windows<br /> potranno coesistere sullo stesso HDD
- L'utente potrà scegliere quale <br />dei due OS avviare
  
- Avvia il tool di gestione delle partizioni di Windows
  
--- #slide 86

# VirtualBox

Linux Dual Boot

<img src="/media/vbox86.png" class="centro" />

- Come vedi, tutto lo spazio dell'HDD è allocato
- Seleziona il volume (disco) C:
- Fai right-click e seleziona **Riduci Volume**
  
--- #slide 87

# VirtualBox

Linux Dual Boot

<img src="/media/vbox87.png" class="centro" />

- Ora devi scegliere quanto spazio liberare
- Lo spazio sarà sottratto a Windows e <br />reso disponibile al sistema
- La schermata mostra chiaramente lo spazio <br />che rimarrà allocato a Windows dopo<br /> la riduzione
- Viene anche visualizzato lo spazio <br />che sarà liberato
- Premi **Riduci** quando hai impostato <br />i valori preferiti
  
--- #slide 88

# VirtualBox

Linux Dual Boot

<img src="/media/vbox88.png" class="centro" />

- Come vedi ora non tutto l'HDD è <br />allocato per il disco C: di Windows
- La porzione prima specificata è ora disponibile <br />o **non allocata**
- In questo spazio libero, installerai Linux
  
--- #slide 89

# VirtualBox

Linux Dual Boot

<img src="/media/vbox89.png" class="centro" />

- Ora **Arresta** Windows prima di procedere <br />con il prossimo passo

--- #slide 90

# VirtualBox

Linux Dual Boot

<img src="/media/vbox90.png" class="centro" />

- Configura la VM di Windows, in modo che <br />faccia il boot da CD-ROM

--- #slide 91

# VirtualBox

Linux Dual Boot

<img src="/media/vbox91.png" class="centro" />

- Assicurati che nel CD-ROM sia inserita <br />la ISO di Linux Mint

--- #slide 92

# VirtualBox

Linux Dual Boot

<img src="/media/vbox92.png" class="centro" />

- Terminata la configurazione, avvia la VM
  
--- #slide 93

# VirtualBox

Linux Dual Boot

<img src="/media/vbox93.png" class="centro" />

- In caso in cui Linux non parta da CD-ROM
- Da Windows, selezionare **Riavvio** <br />tenendo premuto il tasto ```SHIFT```
  
--- #slide 94

# VirtualBox

Linux Dual Boot

<img src="/media/vbox94.png" class="centro" />

- Scegliere il boot dal CD-ROM

--- #slide 95

# VirtualBox

Linux Dual BootlBox

<img src="/media/vbox95.png" class="centro" />

- Avviare l'installazione di Linux
- L'installazione in dual boot è **esattamente** <br />uguale a quella single boot vista in precedenza
--- #slide 96

# VirtualBox

Linux Dual Boot

<img src="/media/vbox96.png" class="centro" />

--- #slide 97

# VirtualBox

Linux Dual Boot

<img src="/media/vbox97.png" class="centro" />

- L'installer di Linux riconosce la presenza di Windows
- Selezionare l'opzione indicata, che permette <br />di installare Linux "a fianco" <br />a Windows (dual boot)
- Questa opzione ci garantisce che <br />Windows NON sarà rimosso ma mantenuto
  
--- #slide 98

# VirtualBox

Linux Dual Boot

<img src="/media/vbox98.png" class="centro" />

- Confermare il partizionamento dello spazio libero assegnato a Linux

--- #slide 99

# VirtualBox

Linux Dual Boot

<img src="/media/vbox99.png" class="centro" />

- Configurare il proprio l'account

--- #slide 100

# VirtualBox

Linux Dual Boot

<img src="/media/vbox100.png" class="centro" />

- Attendi qualche minuto...
  
--- #slide 101

# VirtualBox

Linux Dual Boot

<img src="/media/vbox101.png" class="centro" />

--- #slide 102

# VirtualBox

Linux Dual Boot

<img src="/media/vbox102.png" class="centro" />

- Ora all'avvio della VM, non parte <br />immediatamente Windows
- Viene visualizzato un menù di scelta
- Da qui l'utente può decidere di fare il <br />boot di Windows 10 o di Linux Mint
- In questo modo il sistema è effettivamente <br />configurato in dual boot 

- ESERCIZIO #05: 
  - Provare a fare il boot di Window 
  - Provare a fare il boot di Linux Mint