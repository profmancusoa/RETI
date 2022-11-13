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
version: '1.0.2'

---  


# SISTEMI & RETI

Firma Digitale e Encryption

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>


--- 

# Firma Digitale

Identità, Autenticità e Integrità

- Ma cos'è la firma digitale?

<br>

<img src="/media/gpg_00.webp" style="width:500px;margin:auto;"/>


--- 

# Firma Digitale

Identità, Autenticità e Integrità

- La firma elettronica o digitale è il risultato di un metodo matematrico e di una procedura informatica, che garantisce:
  -  ***autenticità***: permette di verificare con certezza l'identidà dell'origine del documento
  -  ***integrità***: garantisce che il documento non sia stato alterato in nessun modo
  -  ***non ripudio***: il mittente NON può negare la proprietà del documento ed il suo contenuto
- dei documenti informatici e che consente di scambiare in rete documenti con piena validità legale.


--- 

# Firma Digitale

Identità, Autenticità e Integrità

- Pertanto la firma digitale è un "oggetto" che viene aggiunto al documento originale, che garantisce l'autenticità, l'integrità e la non ripudiabilità del documento stesso


<img src="/media/gpg_00a.png" style="width:250px;margin:auto;"/>


- Pertanto quando ricevo un documento (o un email) firmata digitalmente, sono certo che sia stata creata ed inviata dal suo proprietario
- Perciò mi posso fidare del documento ricevuto (ordine di acquisto, pagamento, documento legale, etc...)

---

# Firma Digitale

PEC

- La ***Posta Elettronica Certificata (PEC)*** è il sistema che consente di inviare e-mail con valore legale equiparato ad una raccomandata con ricevuta di ritorno, come stabilito dalla normativa (DPR 11 Febbraio 2005 n.68).
- Rispetto alla Posta Elettronica ordinaria, la PEC presenta delle caratteristiche aggiuntive che forniscono agli utenti la certezza a valore legale dell’invio e della consegna delle e-mail al destinatario:
  - ha lo stesso valore legale della raccomandata con ricevuta di ritorno con attestazione dell'orario esatto di spedizione
  - grazie ai protocolli di sicurezza utilizzati, è in grado di garantire la certezza del contenuto non rendendo possibile nessun tipo di modifica nè al messaggio nè agli eventuali allegati

<br>

<img src="/media/gpg_00b.png" style="width:400px;margin:auto;"/>

---

# Firma Digitale

PEC

<img src="/media/gpg_00c.png" style="width:550px;margin:auto;"/>

--- 

# Firma Digitale

Email

- Vediamo ora uno dei metodi più semplici per firmare digitalmente un messaggio di posta elettronica
- In questo modo i nostri messaggi di posta elettronica saranno protetti da encription e firmati digitalmente
- Questo ci permetterà di scambiare in modo sicuro e fidato messaggi di posta elettronica con i nostri interlocutori
- Ciò che vederemo è concettualmente il meccanismo alla base della PEC o di qualsiasi altro sistema di firma digitale


---

# PGP

Pretty Good Privacy

<div style="border: 0px solid red; width: 85%;">

- Nel 1991, il famoso crittografo americano, ***Phil Zimmermann*** crea una suite di strumenti software aperti, per la crittografia e la firma digitale che nel corso del tempo diventano **i più utilizzati al mondo**
- PGP è stata la prima implementazione dell'encryption a chiave asimmetrica ad essere realmente fruibile da un vasto pubblico (PGP fu rilasciato come software libero)
- Negli anni successivi il governo degli stati uniti mise Zimmermann sotto inchiesta per violazione delle leggi federali. Nel 1996 le accuse vennero ritirate
- Tuttora lo standard PGP permette a due persone di comunicare (ad esempio tramite posta elettronica) in totale riservatezza anche se il canale di comunicazione fosse sotto sorveglianza o non-sicuro

</div>

<img src="/media/gpg_00d.png" style="width:120px;position:relative;top:-400px;left:770px;"/>

---

# PGP

Pretty Good Privacy

- L'encryption dei dati e la sua  firma digitale PGP è basata sull'uso di algoritmi asimmetrici
- Pertanto, ogni utente, che vuole usare PGP deve possedere:
  - **PRIVATE KEY**: chiave privata segreta e da custodire con cura
  - **PUBLIC KEY**: chiave pubblica da condividere il più possibile

- Un'iniziale difficoltà di questo meccanismo era lo scambio in modo sicuro delle chiavi pubbliche

---

# PGP

Pretty Good Privacy

- Negli anni 90 e agli inizi degli anni 2000 erano in voga i [**PGP Party**](https://www.gnupg.org/howtos/it/keysigning_party.html#overview)

<br>
<div style="border: 1px solid red; width: 70%; line-height: 2rem; padding: 0rem 1rem 0rem 1rem">

- Un key signing party è una riunione di persone che usano il sistema di crittografia PGP, durante la quale ogni partecipante ha la possibilità di firmare la chiave degli altri.

- I key signing party aiutano in modo consistente a estendere la propria rete della fiducia, inoltre offrono un'opportunità per discutere di questioni sociali e politiche che riguardano la crittografia forte, la sovranità e le libertà individuali, dell'implementazione di tecnologie crittografiche, o perfino degli sviluppi futuri del software libero per la crittografia.
</div>

<img src="/media/gpg_26.jpg" style="width:250px; position: relative; top: -350px;left: 650px;"/>



---

# GPG

Firma Digitale e Encryption

- **GNU Privacy Guard (GPG)** è un'implementazione free e open di *OpenPGP*, che è lo standard di email encryption più diffuso su Internet
- Nel resto dell'esercitazione, vedremo quali sono i passi per inviare e ricevere email in modo sicuro, cifrate e firmate digitalmente

---

# GPG

Firma Digitale e Encryption

<img src="/media/gpg_27.jpg" style="width:500px; margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

<img src="/media/gpg_28.png" style="width:550px; margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- Generiamo le chiavi PGP
- Seguire le istruzione a schermo

<img src="/media/gpg_01.png" style="width:500px;margin:auto;"/>


---

# GPG

Firma Digitale e Encryption

- Inserire le proprie informazioni personali

<br>
<img src="/media/gpg_02.png" style="width:800px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- Inserire un passphrase sicuro
- Il passphrase non va assolutamente dimenticato
  
<br>
<img src="/media/gpg_03.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- OK le chiavi sono state generate correttamente 

<br>
<img src="/media/gpg_04.png" style="width:800px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- E' sempre possibile accedere alla lista delle chiavi disponibili con il seguente comando

<br>
<img src="/media/gpg_05.png" style="width:800px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption


- Ora è necessario esportare le chiavi in formato ASCII (-a)
- Ciò è necessario per poter importare la chiave nel client di posta elettronica
  
<br>
<img src="/media/gpg_06.png" style="width:800px;margin:auto;"/>


---

# GPG

Esercizio GPG_01

- Creare la propria coppia di chiavi utilizzando GPG
- Inviare la propria chiave pubblica a tutti i compagni e al docente utilizzando l'account istitutzionale


---

# GPG

Firma Digitale e Encryption

- Configuriamo il client di posta (Thunderbird) selezionando ***setting*** dal menù contestuale del nostro account

<br>
<img src="/media/gpg_07.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- Ora è necessario importare la nostra chiave PGP (quella che abbiamo esportato precedentemente)

<br>
<img src="/media/gpg_08.png" style="width:800px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

<img src="/media/gpg_09.png" style="width:800px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

<img src="/media/gpg_10.png" style="width:800px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

<img src="/media/gpg_11.png" style="width:800px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

<img src="/media/gpg_12.png" style="width:550px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- Qui è necessario confermare di esser eil proprietario della chiave inserendo il passphrase

<br>
<img src="/media/gpg_13.png" style="width:800px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

<img src="/media/gpg_14.png" style="width:550px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- A questo punto la propria chiave PGP è correttamente importata nel client di posta elettronica e pronta per essere utilizzata

<img src="/media/gpg_15.png" style="width:750px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- Tuttavia per poter comunicare è necessario che i nostri interlocutori conoscano la nostra chiave pubblica
- Un metodo molto semplice per distribuirla e di farlo via email
  
<br>
<img src="/media/gpg_16.png" style="width:300px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- Dal menù contestuale selezinare ***Send Public Key(s) By Email***

<br>
<img src="/media/gpg_17.png" style="width:600px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- Inviatela a chiunque debba ricevere delle voste email cifrate e sicure

<br>
<img src="/media/gpg_18.png" style="width:800px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- Una volta che il vostro interlocutore riceve la vostra chiave pubblica deve aggiungerla al suo client di posta

<br>
<img src="/media/gpg_20.png" style="width:700px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

<img src="/media/gpg_21.png" style="width:450px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

<img src="/media/gpg_22.png" style="width:600px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- Bene ora finalmente possiamo inviare un mail cifrato e firmato digitalmente

<br> 
<img src="/media/gpg_23.png" style="width:550px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- Il nostro interlocutore riceverà il mail normalmente nella sua Inbox

<br>
<img src="/media/gpg_24.png" style="width:800px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- Il client conoscendo la nostra chiave pubblica è in grado di verificarne l'autenticità e di decifrarla

<br>
<img src="/media/gpg_25.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

<img src="/media/gpg_26.png" style="width:900px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL

- Il client ufficiale di GMAIL (Chrome) non supporta in modo nativo le email sicure
- Pertanto è necessario fare ricorso ad un estensione apposita
- Esistono varie estensioni per il supporto alla cifratura e firma delle email
- Una che funziona bene è sicuramente ***MailEnvelope*** https://mailvelope.com/en

<br>
<img src="/media/gpg_29.png" style="width:400px;margin:auto;"/>


---

# GPG

Firma Digitale e Encryption con GMAIL

**SICUREZZA**
- L'estensione del browser Mailvelope fornisce la crittografia end-to-end per il tuo indirizzo email. 
- Cripta le tue e-mail senza dover cambiare il tuo provider di posta elettronica! 
- La crittografia e la decrittografia avvengono esclusivamente sui dispositivi finali. 
- Ciò significa che i tuoi dati privati ​​non lasceranno mai il tuo dispositivo non crittografato.

**OPEN SOURCE**
- Apprezziamo la trasparenza: Mailvelope è il risultato di un processo di sviluppo aperto che può essere osservato in qualsiasi momento. 
- Inoltre, la sicurezza viene valutata da controlli di sicurezza regolari. 
- Il codice sorgente pubblicato con licenza gratuita è disponibile su GitHub. 


---

# GPG

Firma Digitale e Encryption con GMAIL

- Installiamo l'estensione per Chrome
  
<br>
<img src="/media/gpg_30.png" style="width:600px;margin:auto;"/>


---

# GPG

Firma Digitale e Encryption con GMAIL

<img src="/media/gpg_31.png" style="width:800px;margin:auto;"/>
<br>
<br>
<img src="/media/gpg_32.png" style="width:600px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL


<img src="/media/gpg_33.png" style="width:700px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL


<img src="/media/gpg_34.png" style="width:150px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL


<img src="/media/gpg_35.png" style="width:650px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL

- Slezionate la chiave pubblica che avete ricevuto via email

<br>
<img src="/media/gpg_36.png" style="width:650px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL

- Importare la chiave e confermare l'accettazione
  
<br>
<img src="/media/gpg_37.png" style="width:650px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL

- OK la chiave del nostro interlocutore è stata correttamente importata

<br>
<img src="/media/gpg_38.png" style="width:650px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL

- Ora per poter inviare email sicure dobbiamo aggiungere anche la nostra chiave
- La possiamo creare da console (metodo che funziona con qualsiasi client)
- Oppure possiamo crearla direttamente in MailEnvelope

<br>
<img src="/media/gpg_39.png" style="width:550px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL

<br>
<img src="/media/gpg_40.png" style="width:550px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL

<br>
<img src="/media/gpg_41.png" style="width:750px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL

- Ora dobbiamo inviare la nostra chiave pubblica ai nostri interlocutori

<br>
<img src="/media/gpg_42.png" style="width:750px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL

- Esportiamo ed inviamo la nostra chiave pubblica via email
  
<br>
<img src="/media/gpg_43.png" style="width:350px;margin:auto;"/>

<br>

- Il nostro interlucutore uan volta ricevuta la nostra chiave pubblica deve aggiungerla al suo client di posta

---

# GPG

Firma Digitale e Encryption con GMAIL

- Ora dobbiamo completare la configurazione di MailEnvelope autorizzando Google
  
<br>
<img src="/media/gpg_44.png" style="width:350px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL

  
<br>
<img src="/media/gpg_45.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL

<br>
<img src="/media/gpg_46.png" style="width:700px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL

- Ora la configurazione di MailEnvelope è completa e possiamo inviare e ricevere email sicure
  
<br>
<img src="/media/gpg_47.png" style="width:600px;margin:auto;"/>


---

# GPG

Firma Digitale e Encryption con GMAIL

<br>
<img src="/media/gpg_48.png" style="width:700px;margin:auto;"/>


---

# GPG

Firma Digitale e Encryption con GMAIL

- Ora il nostro interlocutore ha ricevuto la mail in  modo sicuro
  
<br>
<img src="/media/gpg_49.png" style="width:900px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL

<br>
<img src="/media/gpg_50.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL

<br>
<img src="/media/gpg_51.png" style="width:700px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL

- Bene l'email ricevuto è cifrata e la firma è autentica
  
<br>
<img src="/media/gpg_52.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption con GMAIL

- Ora rispondiamo sempre in modo sicuro
  
<br>
<img src="/media/gpg_53.png" style="width:700px;margin:auto;"/>


---

# GPG

Firma Digitale e Encryption con GMAIL

- La risposta arriva sicura al destinatario che riesce a decifrarla e a verificarne l'identità
  
<br>
<img src="/media/gpg_54.png" style="width:700px;margin:auto;"/>

---

# GPG

Esercizio GPG_02

- Lavorando a coppie (studente A e B)
- Lo studente A configura Thunderbird per inviare e ricevere email sicure con il docente
- Lo studente B configura GMAIL per inviare e ricevere email sicure con il docente
- Lo studente A invia una mail sicura al docente e il docente risponderà in modo sicuro
  - specificare nell'oggetto il client utilizzato (Thunderbird || Gmail)
- Lo studente B invia una mail sicura al docente e il docente risponderà in modo sicuro
  - specificare nell'oggetto il client utilizzato (Thunderbird || Gmail)

---

# GPG

Esercizio GPG_03

- Lo studente A e B dell'esercizio 2 si scambiano di posizione
- Lo studente A configura Thunderbird per inviare e ricevere email sicure con il docente
- Lo studente B configura GMAIL per inviare e ricevere email sicure con il docente
- Lo studente A invia una mail sicura al docente e il docente risponderà in modo sicuro
  - specificare nell'oggetto il client utilizzato (Thunderbird || Gmail)
- Lo studente B invia una mail sicura al docente e il docente risponderà in modo sicuro
  - specificare nell'oggetto il client utilizzato (Thunderbird || Gmail)

