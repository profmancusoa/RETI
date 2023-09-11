---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080
background: /media/cover.png
class: 'text-center'
# https://sli.dev/custom/highlighters.html
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
materia: RETI 3
as: 2023/2024
version: '1.0.1'
---  

<!-- https://www.linuxjournal.com/content/linux-command-line-interface-introduction-guide#firstlook -->

# RETI 3

Linux CLI

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# Linux CLI 

<img src="/media/cli_00.png" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# Linux CLI 

<img src="/media/c_01.jpg" width="650" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# Linux CLI 

<img src="/media/c_02.jpg" width="600" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# Linux CLI 

<img src="/media/c_03.jpg" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# Linux CLI 
 
Introduzione

- Unix e Linux hanno una lunga tradizione nel fornire degli ambienti grafici per le proprie versioni o distribuzioni.
- Oggi ci sono decine di ambienti desktop diversi per Linux, al contrario di 1 solo per Windows e MAC
- Questo è legato a motivi storici e legato al concetto che ogni utente può scegliere veramente l'ambiente che preferisce ed è maggiormente congeniale per lui
- Alcuni tra i più popolari ambienti desktop sono
  - Gnome
  - KDE
  - XFCE
  - LXQt
  - Cinnamon
  - Mate
  - Unit

---

# Linux CLI 
 
Introduzione

- Gli ambienti desktop sono molto evoluti e permettono all'utente di svolgere qualsiasi funzione necessaria durante l'utilizzo convenzionale del PC con Linux, esattamente come avviene per un utente Windows o Mac
- Oggi un utente Desktop Linux non sente la mancanza di nessuno strumento disponibile su Windows o Mac
- Tuttavia per quanto un'ambiente possa essere evoluto, per sfruttare al meglio e al massimo le funzionalità di un sistema Linux è necessario utilizzare uno strumento imprescindibile che si chiama `CLI`

<span class="cli" style="font-size:3rem; margin:70px auto; text-align: center; display:block; width:85%;color: #00fe00; background: black; line-height: 4rem; height: 4rem;">Command Line Interface</span>


---

# Linux CLI 
 
Introduzione

<img src="/media/cli_01.png" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# Linux CLI 
 
Introduzione

- La Linea di Comando di Linux (Command Line Interface, CLI) è un'interfaccia testuale che consente agli utenti di comunicare direttamente con il sistema operativo Linux attraverso comandi testuali. 

<img src="/media/cli_02.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# Linux CLI 
 
Introduzione

- A differenza delle interfacce grafiche, che utilizzano icone e finestre, la CLI richiede l'uso di comandi testuali    per eseguire operazioni sul sistema.
- La CLI di Linux offre numerosi vantaggi, tra cui:
  - il controllo più preciso e potente sul sistema (*root mode*)
  - crea i tuoi comandi per risolvere i tuoi problemi (*god mode*)
  - l'automazione delle attività ripetitive (*Productive laziness - Do it right, do it once. That’s the lazy option.*)
  - la possibilità di lavorare in ambienti in cui le interfacce grafiche non sono disponibili (server remoti, sistemi embedded).
  - maggior velocità, flessibilità ed efficienza

---

# Linux CLI 
 
Breve Storia

- La *Bourne Shell* (sh) è stata originariamente sviluppata da Stephen Bourne mentre lavorava ai Bell Labs.
- Rilasciato nel 1979 nella versione Unix versione 7 distribuita a college e università.
- La `Bourne Again Shell` (**bash**) è stata scritta come sostituto gratuito e open source della Bourne Shell.
- Data la natura aperta di Bash, nel tempo è stata adottata come shell predefinita sulla maggior parte dei sistemi Linux.
- Esistono molte altre shell (csh, ksh) ed in epoca più moderna **zsh** e **fish**


<img src="/media/cli_16.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# Linux CLI 
 

<img src="/media/cli_04.png" width="700" style="margin:auto;position:relative; left: 0px; top: -10px;">

---

# Linux CLI 
 
<img src="/media/cli_03.png" width="600" style="margin:auto;position:relative; left: 0px; top: -10px;">

---

# Linux CLI 

<div style="width:50%">

Ecco alcuni concetti chiave relativi alla CLI di Linux:

- **Terminale**: Il terminale è l'ambiente in cui vengono inseriti i comandi. E' un'applicazione che fornisce un'interfaccia testuale per interagire con il sistema operativo. Mostra un prompt, di solito indicato dal simbolo del dollaro ($) per gli utenti normali e dal cancelletto (#) per l'utente root con privilegi amministrativi.
- **Comandi**: I comandi sono le istruzioni testuali che vengono inserite nel terminale per eseguire azioni specifiche. Un comando è generalmente composto da un nome di comando seguito da argomenti e opzioni. Ad esempio, il comando ls -l elenca i file e le directory con dettagli.

</div>

<img src="/media/cli_05.png" width="450" style="margin:auto;position:relative; left: 250px; top: -450px;">


---

# Linux CLI 
 
File System

<div style="width:50%">

**File System**: 
- Linux organizza file e directory in una struttura ad albero chiamata file system. 
- Il file system di Linux segue la filosofia "tutto è un file", che significa che anche le periferiche hardware sono rappresentate come file.

**Path**: 
- Il percorso è la posizione di un file o di una directory all'interno del File System. 
- Il percorso assoluto inizia dalla radice del sistema (/)
- Il percorso relativo si basa sulla posizione corrente.

</div>

<div style="width:50%; position: relative;top: -490px; left:450px;">

```bash
❯❯❯ tree -L 1
/
├── bin -> usr/bin
├── boot
├── dev
├── etc
├── home
├── lib -> usr/lib
├── lib32 -> usr/lib32
├── lib64 -> usr/lib64
├── libx32 -> usr/libx32
├── lost+found
├── media
├── mnt
├── opt
├── proc
├── root
├── run
├── sbin -> usr/sbin
├── srv
├── sys
├── tmp
├── usr
└── var
22 directories, 0 files
```

</div>

---

# Linux CLI 
 
File System

**/bin**: è la directory che contiene i file binari, ovvero alcune applicazioni e programmi che è possibile eseguire. Troverai il programma ls menzionato sopra in questa directory, così come altri strumenti di base per creare e rimuovere file e directory, spostarli e così via. 

**/boot**: contiene i file necessari per avviare il sistema. Il boot loader, il kernel etc... <mark>NON TOCCARE</mark> Modificando i file contenuti in questa directory potresti non essere in grado di riavviare correttamente Linux

**/dev**: contiene i file dei dispositivi logici e HW (terminale, console, SSD, scheda video, scheda di rete, ...). Molti di questi vengono generati all'avvio o addirittura al volo. Ad esempio, se colleghi una nuova webcam o una chiavetta USB al tuo computer, una nuova voce relativa al dispositivo verrà automaticamente visualizzata qui.

**/etc**: è la directory che contiene la maggior parte, se non tutti, i file di configurazione a livello di sistema. Ad esempio, i file che contengono il nome del tuo sistema, gli utenti e le loro password, i nomi delle macchine sulla tua rete e quando e dove dovrebbero essere montate le partizioni sui tuoi dischi rigidi sono tutti qui. E' una directory da <mark>MANEGGIARE CON CURA</mark>.

---

# Linux CLI 
 
File System

**/home**: contiene le directory personali degli utenti del sistema. Normalmente il nome della directory coincide con il nome dell'utente (utente *antonio*, home dir: */home/antonio*)

**/lib o /usr/lib**: contiene le librerie di sistema che permettono l'esecuzione degli applicativi, della shell ed in genere di tutti i programmi che girano sul PC. In breve contengono frammenti di codice utilizzati dalle applicazioni per disegnare finestre sul desktop, controllare le periferiche o inviare file al disco rigido.

Una sotto directory importantissima è *modules* contiene gli importantissimi moduli del kernel. I moduli del kernel sono driver che fanno funzionare cose come la scheda video, la scheda audio, il WiFi, la stampante e così via.

**/media**: è dove la memoria esterna verrà montata automaticamente quando la colleghi e provi ad accedervi (pendrive, dischi USB, schede SD, ecc.)

**/mnt**: luogo dove monterai manualmente i dispositivi di archiviazione o le partizioni. 


---

# Linux CLI 
 
File System

**/opt**:  contiene tradizionalmente il software opzionale, non di sistema, spesso quello installato dall'utente. Le applicazioni finiranno nella directory /opt/bin e le librerie nella directory /opt/lib.

Un'altra directory in cui finiscono applicazioni opzionali e librerie è /usr/local. Quando il software viene installato qui, ci saranno anche le directory /usr/local/bin e /usr/local/lib. Ciò che determina quale software va dove è il modo in cui gli sviluppatori hanno configurato i file che controllano il processo di compilazione e installazione.

**/proc**: come /dev, è una directory virtuale. Contiene informazioni sul tuo computer, come informazioni sulla CPU, sul kernel su cui è in esecuzione il tuo sistema Linux, sui processi che stanno girando, sulla rete, .... Come con /dev, i file e le directory vengono generati all'avvio del computer o al volo, mentre il sistema è in esecuzione e le cose cambiano.

**/root**: è la directory home del **superutente** <mark>root</mark> (noto anche come "Amministratore") del sistema. È separato dal resto delle directory home degli utenti in quanto non è un utente normale. 

---

# Linux CLI 
 
File System

**/run**: è una directory utilizzata dai processi di sistema per archiviare dati temporanei utili all'esecuzione. Questa è un'altra di quelle cartelle da <mark>NON TOCCARE</mark>.

**/sbin o /usr/bin**: è simile a /bin, ma contiene applicazioni di cui avrà bisogno solo il superutente (da qui la **s** iniziale). Pertanto le applicazioni qui contenute possono essere eseguite solo da root o dagli utenti a cui viene concesso un permesso temporaneo. Come puoi immaginare, alcune di queste istruzioni sono letali se le usi in modo improprio, quindi <mark>MANEGGIALE CON CURA</mark>.

**/srv**: la directory contiene dati per i server. Oggi tendenzialmente vuota.

**/sys**: è un'altra directory virtuale come /proc e /dev e contiene anche informazioni dai dispositivi collegati al tuo computer.

In alcuni casi puoi anche manipolare questi dispositivi. Posso, ad esempio, cambiare la luminosità dello schermo del mio portatile modificando il valore memorizzato in /sys/devices/pci0000:00/0000:00:02.0/drm/card0/card0-eDP-1/intel_backlight.Anche per questa directory è consigliato di <mark>NON TOCCARE</mark> finché non sei sicuro di sapere esattamente cosa stai facendo.

---

# Linux CLI 
 
File System

**/tmp**: contiene file temporanei, solitamente inseriti lì dalle applicazioni in esecuzione. I file e le directory spesso contengono dati di cui un'applicazione non ha bisogno in questo momento, ma che potrebbe aver bisogno in seguito.
Puoi anche usare /tmp per archiviare i tuoi file temporanei: /tmp è una delle poche directory appese / con cui puoi effettivamente interagire senza diventare superutente.

**/usr**: conteneva le directory utente quando /home non esisteva. Al giorno d'oggi, /usr contiene un miscuglio di directory che a loro volta contengono applicazioni, librerie, documentazione, sfondi, icone e un lungo elenco di altre cose che devono essere condivise da applicazioni e servizi.

**/var**: è stato originariamente dato questo nome perché il suo contenuto era considerato variabile, nel senso che cambiava frequentemente. Oggi è un termine un po' improprio perché ci sono molte altre directory che contengono dati che cambiano frequentemente, soprattutto le directory virtuali che abbiamo visto sopra.
Comunque sia, /var contiene cose come i log di sistema e delle applicazioni, lo spool della stampante, ed altri tipi di dati. Alcuni web server impostano la document root di default in /var/www

---

# Linux CLI 
 
File System

<div style="width:50%">

Il percorse `ASSOLUTO` del file *README.md* è:

`/home/antonio/SARP/README.md`

- **/** (*root directory, radice dell'albero del filesystem*)
- **home**: sotto directory di /
- **antonio**: sotto directory di home
-  **SARP**: sotto directory di antonio
-  **README.md**: file di testo (*foglia dell'albero*)
</div>

<img src="/media/cli_06.png" width="450" style="margin:auto;position:relative; left: 250px; top: -350px;">

---

# Linux CLI 
 
File System

In ogni directory ci sono due directory speciali `.` e `..`

```bash
❯❯❯ ls -la                           
totale 1836
drwxrwxr-x 2 antonio antonio   4096 set  1 14:48 .  <------ directory corrente
drwxrwxr-x 3 antonio antonio   4096 ago 16 15:18 .. <------ directory precedente
-rw-rw-r-- 1 antonio antonio 119686 ago 29 10:29 c_01.jpg
-rw-rw-r-- 1 antonio antonio  73756 ago 29 10:29 c_02.jpg
-rw-rw-r-- 1 antonio antonio  25078 ago 29 10:29 c_03.jpg
-rw-rw-r-- 1 antonio antonio 699558 ago 16 16:11 cli_00.png
-rw-rw-r-- 1 antonio antonio 108107 ago 16 16:29 cli_01.png
-rw-rw-r-- 1 antonio antonio  79049 ago 29 10:42 cli_02.png
-rw-rw-r-- 1 antonio antonio 119269 ago 29 11:02 cli_03.png
-rw-rw-r-- 1 antonio antonio 177065 ago 29 11:22 cli_04.png
-rw-rw-r-- 1 antonio antonio  60778 ago 29 11:37 cli_05.png
-rw-rw-r-- 1 antonio antonio  54990 set  1 14:40 cli_06.png
-rw-rw-r-- 1 antonio antonio  55905 set  1 14:46 cli_07.png
-rw-rw-r-- 1 antonio antonio  41286 set  1 14:48 cli_08.png
-rw-rw-r-- 1 antonio antonio 222693 ago 29 10:24 cover.png
```

---

# Linux CLI 
 
File System

<div style="width:50%">

Il percorse `RELATIVO` alla home del file *README.md* è:

`./SARP/README.md` o `SARP/README.md`

- **/** (*root directory, radice dell'albero del filesystem*)
- **home**: sotto directory di /
- **antonio**: sotto directory di home
-  **SARP**: sotto directory di antonio
-  **README.md**: file di testo (*foglia dell'albero*)
</div>

<img src="/media/cli_07.png" width="450" style="margin:auto;position:relative; left: 250px; top: -370px;">

---

# Linux CLI 

&nbsp;

Ecco alcuni concetti chiave relativi alla CLI di Linux:

- **Utenti**: Linux utilizza un sistema di autorizzazioni basato su `utenti` e `gruppi` univoci per controllare l'accesso ai file e alle risorse del sistema (ricorda *everything is a file*). 
  - L'utente **root** ha privilegi amministrativi completi (*god*), mentre gli utenti normali hanno **accesso limitato**.
  - Ogni utente appartiene ad uno o più gruppi

<img src="/media/cli_08.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">

---

# Linux CLI 

- **Permessi**: Ogni gruppo ed ogni utente ha una serie di permessi su ogni risorsa (file). Con questo livello di granularità è possibile creare policy dei permessi molto dettagliate e garantire la sicurezza del sistema operativo (*es: non voglio che l'utente Jon possa leggere i miei file*)

<img src="/media/cli_09.png" width="950" style="margin:auto;position:relative; left: 0px; top: 10px;">


---

# Linux CLI 

<img src="/media/cli_10.png" width="950" style="margin:auto;position:relative; left: 0px; top: 80px;">


---

# Linux CLI 

<img src="/media/cli_11.png" width="950" style="margin:auto;position:relative; left: 0px; top: 50px;">

---

# Linux CLI 

&nbsp;
 
Ecco alcuni concetti chiave relativi alla CLI di Linux:

**Completamento del Tab**: Puoi premere il tasto Tab per completare automaticamente nomi di file, directory e comandi. Questa funzionalità aiuta a risparmiare tempo e riduce gli errori di battitura.

In shell moderne come *zsh* e *fish* il tab può anche completare i comandi e il manuale di sistema


---

# Linux CLI 


<img src="/media/cli_12.gif" width="700" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# Linux CLI 

&nbsp;
 
Ecco alcuni concetti chiave relativi alla CLI di Linux:

**Redirezione**: Puoi redirigere l'output di un comando su file file utilizzando i simboli > o >> 

```bash
$ echo "ciao io sono Linux"

ciao io sono Linux

$ echo "ciao io sono Linux" > file.txt
$ ls -la file.txt
-rw-rw-r-- 1 antonio antonio 19 set  3 17:57 file.txt

$ more file.txt
ciao io sono Linux

$ echo "ed io sono Babbo Natale" >> file.txt
$ more file.txt 
ciao io sono Linux
ed io sono Babbo Natale
```

---

# Linux CLI 


<img src="/media/cli_12.png" width="900" style="margin:auto;position:relative; left: 0px; top: 100px;">



---

# Linux CLI 

Filosofia Linux

[La filosofia di Unix](http://www.catb.org/esr/writings/taoup/html/ch01s06.html) (in inglese: Unix philosophy) è una metodologia di sviluppo del software proposta nel 1969 da Ken Thompson e adottata dagli sviluppatori del sistema operativo Unix e Linux

<br>

<Banner padding=30px>
Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface. (Doug McIlroy)
</Banner>

<img src="/media/cli_13.png" width="250" style="margin:auto;position:relative; left: 0px; top: 10px;">


---

# Linux CLI 

&nbsp;
 
 **Pipe**: (Doug McIlroy) La pipe `|` permette di concatenare più comandi shell insieme per creare un nuovo comando che risolve un problema specifico.
 Il concetto è che l'output di un programma viene utilizzato come input di un altro comando.
 Questo concetto è un meccanismo **POTENTISSIMO** che rende la CLI di Unix/Linux infinitamente potente e flessibile

```bash
$ cat file.txt
2
4
6
7
3
1
2
1
4
6
5
2
```

---

# Linux CLI 

&nbsp;

**Domanda**: Qual'è il comando che mi permette di ottenere una lista di numeri univoci ordinati in senso crescete partendo da file.txt?
**Risposta**: NON ESISTE

Ma niente paura, possiamo creare noi stessi questo comando a partire da comandi esistenti e quindi risolvere il problema. Una volta appreso questo concetto, si dimostrerà un meccanismo incredibilmente potente

<img src="/media/cli_14.png" width="850" style="margin:auto;position:relative; left: 0px; top: 10px;">


---

# Linux CLI 

&nbsp;

- Proviamo ad implementare la pipeline descritta prima con comandi linux
- La prima cosa dobbiamo leggere il file, quindi usiamo il comando `cat` che prende in input il nome del file e genera in output la lettura del file
- Questo output (lista di numeri non ordinati e duplicati) viene preso in input dal comando `sort` che in output produce l'input ma ordinato
- A questo punto avremo una lista di numeri ordinati ma ancora duplicati, quindi forniamo questa lista in input al comando `uniq` che in output rimuove tutti i numeri duplicati
- In questo modo all'output della pipeline avremo una lista di numeri ordinati ed univoci, che è esattamente la soluzione al problema posto


<img src="/media/cli_15.png" width="500" style="margin:auto;position:relative; left: 100px; top: -40px;">


---

# Linux CLI 

&nbsp;

```bash
$ cat file.txt  # prende in input il file e in output lo stampa
2
4
6
7
3
1
2
1
4
6
5
2
```


---

# Linux CLI 

&nbsp;

```bash
# l'output di cat viene usato come input da sort che in output stampa il file ordinato

$ cat file.txt | sort 
1
1
2
2
2
3
4
4
5
6
6
7
```

---

# Linux CLI 

&nbsp;

```bash
# l'output ordinato di sort viene preso in input da uniq che in output elimina le occorrenze multiple

$ cat file.txt | sort | uniq
1
2
3
4
5
6
7
```

---

# Linux CLI 

&nbsp;

```bash
# l'output della pipeline viene rediretto e quindi scritto sul file file_ord.txt

$ cat file.txt | sort | uniq > file_ord.txt

$ cat file_ord.txt 
1
2
3
4
5
6
7

# quindi in ingresso alla pipeline abbiamo il file di numeri  non ordinati e duplicati
# in uscita abbiamo la lista di numeri ordinati e de-duplicati
# abbiamo così creato un nuovo comando che risolve esattamente il nostro problema
```

---

# Linux CLI 

&nbsp;
 

- La CLI di Linux offre una vasta gamma di comandi per eseguire varie attività, tra cui:
  -  la navigazione del sistema di file
  -  la gestione dei processi
  -  la configurazione di rete
  -  la gestione degli utenti 
  -  .......e molto altro. 

Vediamo ora i principali comandi base per poter iniziare ad usare Linux in modo efficiente ed agevole dalla linea di comando

---

# Linux CLI 
 
Sintassi Generale

- I comandi possono essere eseguiti da soli o possono accettare argomenti per alterarne il comportamento.

Una sintassi tipica può essere simile a questa:

```bash
comando [-argomento] [--argomento-lungo] file

$ ls -l -a - h
```

<br>

- **ls** è il nome del comando (list)
- -l è un parametro che modifica l'output di ls in modo da visualizzare una lista di file uno per ogni riga
- -a è un parametro che indica ad ls di far vedere tutti i file anche quelli nascosti (come . e ..)
- -h è un parametro che dice a ls di visualizzare un output facilmente leggibile da un umano(stampa la dimensione del file in un formato leggibile dall'uomo)

---
layout: section
---

<h1>Indice Comandi</h1>

---

# Linux CLI 


<img src="/media/cli_17.png" width="900" style="margin:auto;position:relative; left: 0px; top: -20px;">

---

# Linux CLI 


<img src="/media/cli_18.png" width="900" style="margin:auto;position:relative; left: 0px; top: -20px;">

---

# Linux CLI 


<img src="/media/cli_19.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">


---

# Linux CLI 


<img src="/media/cli_20.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">


---
layout: section
---

<h1>Comandi di uso Generale</h1>


---

# Linux CLI 
 
man - un'interfaccia ai manuali di riferimento in linea

- Il comando più importante di tutti è `man` che permette di accedere al manuale di sistema e di TUTTI i comandi 
- E' buona regola consultare SEMPRE il manuale per capire come funziona un comando, quali sono i suoi parametri e conoscere le particolarità del singolo comando

```bash
$ man <nome comando>
$ man ls
LS(1)                                   User Commands                                   LS(1)

NAME
       ls - list directory contents

SYNOPSIS
       ls [OPTION]... [FILE]...

DESCRIPTION
       List  information  about  the FILEs (the current directory by default).  Sort entries 
       nor --sort is specified.
```

---

# Linux CLI 
 
man - un'interfaccia ai manuali di riferimento in linea

- Ecco alcuni parametri utili

```bash
-K: cerca e visualizza i manuali compatibili con la parola chiave
-k: visualizza possibili comandi compatibili con la parola chiave  
```

<br>

```bash
$ man -K  "concatenate files"

$ man -k  "concatenate files"
cat (1)              - concatenate files and print on the standard output
```

---

# Linux CLI 
 
info - read Info documents

- Un'altro comando utilissimo per reperire informazione è `info`. 
- Si usa esattamente come man

```bash
$ info <nome comando>
$ info ls
10.1 ‘ls’: List directory contents
==================================

The ‘ls’ program lists information about files (of any type, including
directories).  Options and file arguments can be intermixed arbitrarily,
as usual.

   For non-option command-line arguments that are directories, by
default ‘ls’ lists the contents of directories, not recursively, and
omitting files with names beginning with ‘.’.  For other non-option
arguments, by default ‘ls’ lists just the file name.  If no non-option
argument is specified, ‘ls’ operates on the current directory, acting as
if it had been invoked with a single argument of ‘.’.

```

---

# Linux CLI 
 
apropos - ricerca nei nomi e nelle descrizioni delle pagine di manuale

- Effettua una ricerca all'interno dei manuali. Molto utile quando non sappiamo esattamente il nome di un comando ma ne conosciamo il suo contesto.

```bash
$ apropos <parole chiave>

$ apropos "concatenate files"
cat (1)              - concatenate files and print on the standard output

$ apropos "remove files"
git-rm (1)           - Remove files from the working tree and from the index
rm (1)               - remove files or directories
```

Se apropos non trova nessun suggerimento potrebbe essere utile eseguire il seguente comando

```bash
$ sudo mandb -c
```

In questo modo si ricrea il DB per apropos

---

# Linux CLI 
 
clear - clear the terminal screen

- Alle volte è utile svuotare e cancellare la finestra di terminale
- Ciò si può ottenere con il comando clear

<br>

 ```bash
 $ clear
 ```
<br>

Si può anche utilizzare uno shortcuts da tastiera che è `CTRL + L`

---

# Linux CLI 
 
reset - terminal initialization

- In alcuni scenari clear può non essere efficace, quindi per resettare un terminale al suo stato iniziale possiamo usare il comando reset

<br>

```bash
$ reset
```

---
layout: section
---

<h1>FileSystem</h1>


---

# Linux CLI 
 
pwd - output the current working directory

- Per conosce l'attuale posizione nel filesystem, in altre parole per sapere in quale directory ci troviamo basta eseguire il comando **pwd**

```bash
$ pwd
/home/antonio/tmp/SARP

$ pwd
/media/antonio/NAS
```


---

# Linux CLI 
 
cd - change directory

- Permette di cambiare directory e quindi di spostarsi da una directory all'altra

<br>
```bash
$ cd <percorso assoluto o relativo della directory destinazione>

$ pwd
/home/antonio/tmp/SARP/src/routes

$ cd tools/  # questo è un percorso relativo
$ pwd
/home/antonio/tmp/SARP/src/routes/tools

$ cd .. # torna indietro di una directory (o torna alla directory padre)
$ pwd                                                                    
/home/antonio/tmp/SARP/src/routes

$ cd ../.. # torna indietro di due livelli
$ pwd                                      
/home/antonio/tmp/SARP
```

---

# Linux CLI 
 
cd - change directory

<br>
```bash
$ cd # torna alla HOME directory
$ pwd
/home/antonio

$ cd /usr/bin # questo è un percorso assoluto
$ pwd
/usr/bin

$ cd ~ # torna alla HOME directory
$ pwd
/home/antonio

$ cd - # torna alla directory in cui eravamo prima
$ pwd
/usr/bin
```

---

# Linux CLI 
 
ls - list directory contents

- Il comando ls (list) permette di vedere (listare) il contenuto della directory corrente o di una directory specifica

```bash
$ ls <file> o <directory>

$ ls #list della directory corrente
151.101.242.137.00443-192.168   CMakeTools            index.html.5       recently-used.xbel
 192.168.001.077.37480-151.101  Desktop               keyrings           regole01.jpg
'2023-07-28 18-52-21.mkv'       desktop-directories   linked_list,h      report.html
'2023-07-28 18-55-11.mkv'       Documents             linked_list.h      report.xml
 Android                        Downloads             LocalSend-1.deb    scripts
'Android Open Source Project'   espedito.keys.asc     mime               static.key
 android-studio                 espedito.pub.asc      mimeapps.list      TBR.pdf
 AndroidStudioProjects          evolution             msgFilterRules.dat Templates
```

---

# Linux CLI 
 
ls - list directory contents

```bash
$ ls /usr/bin/ # lista il contenuto della directory /usr/bin
'['                                                gtscompare                         ppmtolj
 411toppm                                          gts-config                         ppmtomap
 aa-enabled                                        gtstemplate                        ppmtomitsu
 aa-exec                                           gucharmap                          ppmtompeg
 aa-features-abi                                   guestfish                          ppmtoneo
 ab                                                guestmount                         ppmtopcx
 aclocal                                           guestunmount                       ppmtopgm
 aclocal-1.16                                      gunzip                             ppmtopi1

$ ls ~ # list della home directory
151.101.242.137.00443-192.168   CMakeTools            index.html.5       recently-used.xbel
 192.168.001.077.37480-151.101  Desktop               keyrings           regole01.jpg
'2023-07-28 18-52-21.mkv'       desktop-directories   linked_list,h      report.html
'2023-07-28 18-55-11.mkv'       Documents             linked_list.h      report.xml
 Android                        Downloads             LocalSend-1.deb    scripts
'Android Open Source Project'   espedito.keys.asc     mime               static.key
 android-studio                 espedito.pub.asc      mimeapps.list      TBR.pdf
 AndroidStudioProjects          evolution             msgFilterRules.dat Templates
```

---

# Linux CLI 
 
ls - list directory contents

- ls possiede 55 parametri e quindi è un comando molto complesso
- tuttavia nella maggioranza dei casi ci servono solo 2 o 3 parametri
- in queste situazioni l'uso del manuale è fondamentale

Ecco alcuni parametri utili

```bash
-1: lista il contenuto dei file su una singola colonna
-l: long list format
-a: visualizza tutti i file anche quelli nascosti come . e ..
-F: appende un indicatore per ogni entry indicandone il tipo
-h: visualizza le dimensioni dei file in un formato utile per gli umani
-S: ordina per dimensione del file in ordine decrescente
-r: inverte l'ordine di visualizzazione
```

---

# Linux CLI 
 
ls - list directory contents

```bash
$ ls -lah
totale 62M
drwxr-xr-x  95 antonio antonio  12K set  4 14:59  .
drwxr-xr-x   5 root    root    4,0K ago  1  2022  ..
-rw-r--r--   1 root    root      24 nov 13  2022  151.101.242.137.00443-192.168.001.077.37480
-rw-r--r--   1 root    root      24 nov 13  2022  192.168.001.077.37480-151.101.242.137.00443
-rw-rw-r--   1 antonio antonio 2,0M lug 28 18:52 '2023-07-28 18-52-21.mkv'
-rw-rw-r--   1 antonio antonio 7,3M lug 28 18:55 '2023-07-28 18-55-11.mkv'
drwxrwxr-x   6 antonio antonio 4,0K giu  4  2022  .android
drwxrwxr-x   3 antonio antonio 4,0K mar  4  2022  Android
drwx------   3 antonio antonio 4,0K mar  4  2022 'Android Open Source Project'
drwxrwxr-x   7 antonio antonio 4,0K mar  4  2022  android-studio
drwxrwxr-x   3 antonio antonio 4,0K mar 14  2022  AndroidStudioProjects
drwxr-xr-x  48 antonio antonio 4,0K set  7  2022  antonio
-rw-rw-r--   1 antonio antonio 5,1K set  4  2022  antonio.pub.asc
-rw-rw-r--   1 antonio antonio 2,4K set  4  2022  antonioy.pub.asc
drwxr-xr-x   2 antonio staff   4,0K ago 30  2022  app
-rwxr-xr-x   1 antonio antonio  649 ago 12  2022  appimagekit-openshot-qt.desktop
-rwxr-xr-x   1 antonio antonio  351 ago 12  2022  appimagekit-shotcut.desktop
```

---

# Linux CLI 
 
ls - list directory contents

```bash
$ ls -lahFS
totale 62M
-rw-rw-r--   1 antonio antonio  34M giu 10  2022  aws.tgz
-rw-rw-r--   1 antonio antonio 8,5M giu  2 14:15  LocalSend-1.10.0-linux-x86-64.deb
-rw-rw-r--   1 antonio antonio 7,3M lug 28 18:55 '2023-07-28 18-55-11.mkv'
-rw-rw-r--   1 antonio antonio 3,6M lug 11  2022  TBR.pdf
-rw-rw-r--   1 antonio antonio 3,4M nov 19  2022  _HR.pdf
-rw-rw-r--   1 antonio antonio 2,0M lug 28 18:52 '2023-07-28 18-52-21.mkv'
-rw-------   1 antonio antonio 488K set  4 10:33  .zsh_history
-rw-------   1 antonio antonio 336K set  4 10:33  .bash_history
drwxrwxr-x 223 antonio antonio 236K set  4 08:46  tmp/ ----------> directory
-rw-rw-r--   1 antonio antonio 215K lug 17 11:12  index.html.3
-rw-rw-r--   1 antonio antonio 215K lug 17 11:13  index.html.4
-rw-rw-r--   1 antonio antonio 194K lug 29 17:52  index.html.5
-rw-rw-r--   1 antonio antonio 185K set 13  2022  regole01.jpg
-rw-rw-r--   1 antonio antonio 136K lug 13 15:56  package-lock.json
-rw-r--r--   1 antonio antonio  88K set  5  2022  report.html
-rw-rw-r--   1 antonio antonio  51K ago 22 02:54  .zcompdump-asus-5.8.1
-rw-rw-r--   1 antonio antonio  50K ago 29 10:15  .zcompdump
```

---

# Linux CLI 
 
alias

- Alle volte ricordarsi comandi lunghi come `ls -lahFSr` può essere poco conveniente
- Allora la shell ci viene in aiuto con il concetto di `alias`
- Gli `alias` non è un comando, ma una funzionalità della shell
- Gli `alias` consentono di sostituire una stringa con una parola quando viene utilizzata come prima parola di un comando semplice

Quindi ogni utente può creare tutti gli alias che desidera per rendersi la vita più semplice.

```bash
$ alias <nome alias>=<comando>

$ alias lo='ls -lahFSr'
$ alias l1='ls -1'
alias | grep -E '^l1|^lo'
l1='ls -1'
lo='ls -lahFSr'
```

---

# Linux CLI 
 
alias

- Quindi ora abbiamo due nuovi comandi (o alias) chiamati lo e l1 che possiamo usare esattamente come ogni altro comando linux

```bash
$  lo ----> equivale a ls -lahFSr
totale 62M
-rw-rw-r--   1 antonio antonio    0 set  2  2022  .zshenv
-rw-rw-r--   1 antonio antonio    0 gen  7  2022  .todo.bak
-rw-r--r--   1 antonio antonio    0 dic 27  2021  .sudo_as_admin_successful
-rw-rw-r--   1 antonio antonio    0 gen  2  2022  mimeapps.list

$ l1 ----> equivale a ls -1
'2023-07-28 18-52-21.mkv'
'2023-07-28 18-55-11.mkv'
Android
'Android Open Source Project'
android-studio
AndroidStudioProjects
antonio
```
---

# Linux CLI 
 
File Timestamps

- Ogni file e directory una serie di timestamp che ci indicano esattamente quando sono avvenute particolari operazioni sul file stesso
- Nello specifico i 4 principali timestamp sono:
  - **Accesso**: indica l'ultima volta che è stato effettuato l'accesso al file
  - **Modifica**: indica l'ultima volta che è stato modificato il contenuto del file
  - **Cambio**: indica l'ultima volta che è stato effettuato un cambio ai metadata del file
  - **Creazione**: indica quando il file è stato creato e rimane costante


---

# Linux CLI 
 
stat - visualizza i timestamp di un file

- Per visualizzare le informazioni relative ad un file o directory, quali dimensione e timestamp si utilizza il comando **stat**

```bash
$ stat <file/dir name>

$stat README.md                                                     main
  File: README.md
  Dim.: 1164      	Blocchi: 8          Blocco di IO: 4096   file regolare
Device: 10305h/66309d	Inode: 11665449    Coll.: 1
Accesso: (0664/-rw-rw-r--)  Uid: ( 1000/ antonio)   Gid: ( 1000/ antonio)
Accesso  : 2022-08-27 11:11:42.197271632 +0200
Modifica : 2022-08-27 11:11:42.197271632 +0200
Cambio   : 2022-08-27 11:11:42.197271632 +0200
Creazione: 2022-08-27 11:11:42.197271632 +0200
```

---

# Linux CLI 
 
stat - visualizza i timestamp di un file

```bash
stat code                                                          main
  File: code
  Dim.: 4096      	Blocchi: 8          Blocco di IO: 4096   directory
Device: 10305h/66309d	Inode: 16777517    Coll.: 5
Accesso: (0775/drwxrwxr-x)  Uid: ( 1000/ antonio)   Gid: ( 1000/ antonio)
Accesso  : 2023-07-09 10:18:25.132871216 +0200
Modifica : 2023-07-16 17:41:17.282502735 +0200
Cambio   : 2023-07-16 17:41:17.282502735 +0200
Creazione: 2023-07-09 10:18:25.132871216 +0200
```

---

# Linux CLI 
 
cp - copiare file e directory

- Spesso è molto utile **copiare** un file o un'intera directory all'interno del filesystem

```bash
$ cp < - parametri opzionali> <file sorgente> <file destinazione>
$ cp < - parametri opzionali> <file sorgente>...<file sorgente> <directory destinazione>
$ cp < - parametri opzionali> <directory sorgente> <directory destinazione>
```

<br>

- cp ha 24 parametri e i più utili sono:

<br>

```bash
- r: copia ricorsivamente un albero di directory e il suo contenuto
- v: verbose permette di vedere lo stato della copia
- a: copia in modalità archivio preservando ownership, timestamps, mode
- i: copia in modalità interattiva (chiede conferma in caso di overwrite)
- f: forza la copia anche in caso di overwrite 
```

---

# Linux CLI 
 
cp - copiare file e directory

```bash
$ ls -la 
drwxrwxr-x   3 antonio antonio   4096 set 10 12:30 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 10 12:30 DIR1
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1

$ cp file1 file # crea una copia di file1 nella directory corrente chiamato file2

$ ls -la
drwxrwxr-x 2 antonio antonio 4,0K set 10 12:30 DIR1
-rw-rw-r-- 1 antonio antonio    5 set 10 12:30 file1
-rw-rw-r-- 1 antonio antonio    5 set 10 12:31 file2

```

---

# Linux CLI 
 
cp - copiare file e directory

```bash
$ ls -la DIR1
drwxrwxr-x 2 antonio antonio 4096 set 10 12:30 .
drwxrwxr-x 3 antonio antonio 4096 set 10 12:31 ..

$ cp file1 DIR1 # crea una copia di file1 nella directory DIR1 con nome file1

$ ls -la DIR1
drwxrwxr-x 2 antonio antonio 4096 set 10 12:33 .
drwxrwxr-x 3 antonio antonio 4096 set 10 12:31 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
```
---

# Linux CLI 
 
cp - copiare file e directory

```bash
$ ls -la DIR1
drwxrwxr-x 2 antonio antonio 4096 set 10 12:33 .
drwxrwxr-x 3 antonio antonio 4096 set 10 12:31 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1

$ cp file1 DIR1/fileDIR1 # crea una copia di file1 nella directory dIR1 con nome fileDIR1

$ ls -la DIR1
drwxrwxr-x 2 antonio antonio 4096 set 10 12:34 .
drwxrwxr-x 3 antonio antonio 4096 set 10 12:31 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
-rw-rw-r-- 1 antonio antonio    5 set 10 12:34 fileDIR1
```

---

# Linux CLI 
 
cp - copiare file e directory

```bash 
$ ls -la
drwxrwxr-x   3 antonio antonio   4096 set 10 12:31 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 10 12:34 DIR1
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 file2

$ cp -rv DIR1 DIR2
'DIR1' -> 'DIR2'
'DIR1/file1' -> 'DIR2/file1'
'DIR1/fileDIR1' -> 'DIR2/fileDIR1'

$ ls -la
drwxrwxr-x   4 antonio antonio   4096 set 10 12:35 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 10 12:34 DIR1
drwxrwxr-x   2 antonio antonio   4096 set 10 12:35 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 file2

```

---

# Linux CLI 
 
cp - copiare file e directory

```bash
$ touch file3 file4

$ cp -v file3 file4 DIR2
'file3' -> 'DIR2/file3'
'file4' -> 'DIR2/file4'

ls -la DIR2
drwxrwxr-x 2 antonio antonio 4096 set 10 12:37 .
drwxrwxr-x 4 antonio antonio 4096 set 10 12:36 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:35 file1
-rw-rw-r-- 1 antonio antonio    0 set 10 12:37 file3
-rw-rw-r-- 1 antonio antonio    0 set 10 12:37 file4
-rw-rw-r-- 1 antonio antonio    5 set 10 12:35 fileDIR1
```

---

# Linux CLI 
 
cp - copiare file e directory

```bash
$ cp -vi file3 file4 DIR2

cp: sovrascrivere 'DIR2/file3'? y
'file3' -> 'DIR2/file3'
cp: sovrascrivere 'DIR2/file4'? y
'file4' -> 'DIR2/file4'

```

---

# Linux CLI 
 
mv - muove o rinomina file

- Il comando **mv** è utilizzato per spostare un file o una directory da una directory ad un altra nel filesystem
- Il comando è anche utilizzato per rinominare un file nel caso la directory sorgente e destinazione siano le stesse

<br>

```bash
$ mv <source file> <destination dir> # muove un file dalla directory corrente ad un'altra directory
# sposta il file in una directory diversa e lo rinomina
$ mv <source file> <destination dir/destination file> 
$ mv <source dir> <destination dir> # sposta o rinomina una directory
$ mv <source file> <destination file> # rinomina un file nella stessa directory
```

---

# Linux CLI 
 
mv - muove o rinomina file

```bash
$ ls -la DIR1/
drwxrwxr-x 2 antonio antonio 4096 set 11 19:10 .
drwxrwxr-x 4 antonio antonio 4096 set 11 19:10 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
-rw-rw-r-- 1 antonio antonio    5 set 10 12:34 fileDIR1

$ mv file4 DIR1

$ls -la DIR1/
drwxrwxr-x 2 antonio antonio 4096 set 11 19:10 .
drwxrwxr-x 4 antonio antonio 4096 set 11 19:10 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
-rw-rw-r-- 1 antonio antonio    0 set 10 12:36 file4
-rw-rw-r-- 1 antonio antonio    5 set 10 12:34 fileDIR1
```

---

# Linux CLI 
 
mv - muove o rinomina file


```bash
$ls -la DIR1/
drwxrwxr-x 2 antonio antonio 4096 set 11 19:10 .
drwxrwxr-x 4 antonio antonio 4096 set 11 19:10 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
-rw-rw-r-- 1 antonio antonio    0 set 10 12:36 file4
-rw-rw-r-- 1 antonio antonio    5 set 10 12:34 fileDIR1

$ mv file3  DIR1/file33

$ls -la DIR1/
drwxrwxr-x 2 antonio antonio 4096 set 11 19:11 .
drwxrwxr-x 4 antonio antonio 4096 set 11 19:11 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
-rw-rw-r-- 1 antonio antonio    0 set 10 12:36 file33
-rw-rw-r-- 1 antonio antonio    0 set 10 12:36 file4
-rw-rw-r-- 1 antonio antonio    5 set 10 12:34 fileDIR1
```

---

# Linux CLI 
 
mv - muove o rinomina file

```bash
$ ls -la
drwxrwxr-x   4 antonio antonio   4096 set 11 19:11 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR1
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 file2

$ mv DIR1 DIR11

$ ls -la
drwxrwxr-x   4 antonio antonio   4096 set 11 19:11 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 file2
```

---

# Linux CLI 
 
mv - muove o rinomina file

```bash
$ ls -la
drwxrwxr-x   4 antonio antonio   4096 set 11 19:13 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 file2

$ mv file2 fileAAA2

$ls -la
drwxrwxr-x   4 antonio antonio   4096 set 11 19:14 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 fileAAA2
```

---

# Linux CLI 
 
mv - muove o rinomina file

```bash
$ls -la
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 fileAAA2

$ mv file1 fileAAA2 /tmp

$ls -la
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2

$ls -la /tmp/
srwx------  1 antonio antonio     0 set 11 12:59 '844uMDg5r12KpmxXG2wGOx0Hlsvelh2xjo6CL4epTjM='
drwx------  2 antonio antonio  4096 set 11 18:53  .com.google.Chrome.RGR4te
-rw-rw-r--  1 antonio antonio     5 set 10 12:30  file1
-rw-rw-r--  1 antonio antonio     5 set 10 12:31  fileAAA2
```

---

# Linux CLI 
 
rm - rimuove file o directory

- Per cancellare un file in modo permanente (non c'è il cestino nella CLI) si utilizza il comando **rm (remove)**
```bash
$ rm <- parametri opzionali> <file o directory>

$ ls -la
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 fileAAA2

$ rm file1

ls -la
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 fileAAA2
```

---

# Linux CLI 
 
rm - rimuove file o directory

- I parametri più utilizzati sono:

<br>

```bash
-i: interactive chiede conferma prima di rimuovere
-d: rimuove una directory vuota
-r: rimuove ricorsivamente il contenuto nelle sotto directory
-f: forza il comando anche in caso di directory non vuote
```

<br>

```bash
$ rm -i fileAAA2 
rm: rimuovere file regolare 'fileAAA2'? y

```
---

# Linux CLI 
 
rm - rimuove file o directory

```bash
$ ls -la DIR3
drwxrwxr-x 2 antonio antonio 4096 set 11 19:21 .
drwxrwxr-x 5 antonio antonio 4096 set 11 19:20 ..
-rw-rw-r-- 1 antonio antonio    0 set 11 19:21 file13

$  rm DIR3                                                                                 ✘ 1
rm: impossibile rimuovere 'DIR3': È una directory

$ rm -d DIR3                                                                              ✘ 1
rm: impossibile rimuovere 'DIR3': Directory non vuota

# svuotiamo la directory 3

$rm -d DIR3                                                                             ✘ 1

$ ls -la
drwxrwxr-x 2 antonio antonio 4,0K set 11 19:11 DIR11
drwxrwxr-x 2 antonio antonio 4,0K set 10 12:37 DIR2
-rw-rw-r-- 1 antonio antonio    5 set 10 12:31 fileAAA2
```

---

# Linux CLI 
 
rm - rimuove file o directory

- Per rimuovere una directory e tutto il suo contenuto senza priam svuotarla possiamo fare così

```bash
$ rm -dr DIR3

oppure

$ rm -rf DIR3

```
<br>

- Entrambi i comandi hanno lo stesso effetto ma il secondo è più comune tra gli amministratori di sistemi Linux

---

# Linux CLI 
 
more - visualizzazione file paginata

---

# Linux CLI 
 
less - visualizzazione file avanzata


---

# Linux CLI 
 
cat - concatenazione file

---

# Linux CLI 
 
head - visualizzare la parte iniziale di un file

---

# Linux CLI 
 
tail - visualizzare la parte finale di un file

---

# Linux CLI 
 
sort - ordinare le linee di un file di testo

---

# Linux CLI 
 
uniq - rimuovere le linee occorrenti di un file

---

# Linux CLI 
 
wc - contare caratteri, parole e linee di un file

---

# Linux CLI 
 
touch - creare un file vuoto

---

# Linux CLI 

mkdir - creare una directory

---

# Linux CLI 

du - calcola lo spazio disco occupato da una directory

---

# Linux CLI 

df - visualizza lo spazio disponibile su un filesystem

---

# Linux CLI 
 
find - search for files in a directory hierarchy

- Spesso quando navighiamo nel filesystem abbiamo la necessità di cercare dei file
- `find` è un comando potentissimo che permette di fare ricerche nel filesystem molto sofisticate
- **find** ha 71 parametri, ma non abbiamo bisogno di conoscerli tutti. CI ricordiamo i principali e quando ci serve qualcosa di particolare consultiamo il manuale

<br>
```bash
$ find <directory iniziale> < - parametri opzionali>

# partendo dalla directory corrente scandisce tutti i file e sottodirectory alla ricerca 
# di ogni file che fa match con pillole*.png
$ find . -name 'pillole*.png'  --> il carattere * rappresenta uno o più caratteri
 
./Downloads/pillole-di-css.png
./Downloads/img/pillole.png
./Downloads/pillole-css.png
./tmp/profmancusoa.github.io/pillole-css.png
```

---

# Linux CLI 
 
find - search for files in a directory hierarchy

Vediamo alcuni parametri utili

```bash
-type: specifica il tipo di file da ricercare (f file, d directory, ...)
-user: specifica l'owner del file (nome utente o id)
-atime: cerca un file che a cui è stato fatto accesso -n, n o +n giorni fà
-mtime: cerca un file o directory che è stata modificato -n, n o +n giorni fà
-size: cerca file di dimensione -n, n o +n unità di spazio (b,c,k,M,G)
-exec: esegue un comando per ogni file selezionato
```

<br>

```bash
$ find . -type d # cerca tutte le sottodirectory a partire dalla directory corrente
$ find . -type f  -user root # cerca tutti i file di proprietà root
$ find . -mtime -2 # cerca tutti i file che sono stati modificati meno di 2 giorni fà
$ find . -mtime 2 # cerca tutti i file che sono stati modificati esattamente 2 giorni fà
$ find . -mtime +2 # cerca tutti i file che sono stati modificati più di 2 giorni fà
$ find . -size 512c # cerca tutti i file di 512 byte
$ find . -size +100M -exec rm {} \; # rimuove tutti i file più grandi di 100MByte
```

---

# Linux CLI 

watch - eseguire un programma periodicamente (monitoring)



---

# Linux CLI 
 
chown - cambiare proprietario di un file

- xxxxx


---

# Linux CLI 
 
chmod - cambiare permessi di un file

- xxxxx

---
layout: section
---

<h1>Gestione dei processi</h1>

---

# Linux CLI 
 
ps - visualizza i processi di sistema

- xxxxx

---

# Linux CLI 
 
top - monitor dei processi

- fedwsa

---

# Linux CLI 
 
kill - inviare un segnale ad un processo (uccidere un processo)

- xxxxx

---

# Linux CLI 
 
free - visualizzare la memoria disponibile

- xxxxx

---
layout: section
---

<h1>Comandi di sistema</h1>

---

# Linux CLI 
 
sudo - eseguire un comando come un'altro utente

- xxxxx
  
---

# Linux CLI 
 
apt search - ricerchiamo un programma da installare

- xxxxx

---

# Linux CLI 
 
apt install - installare un software

- xxxxx


---

# Linux CLI 
 
apt remove - disinstallare un software

- xxxxx

