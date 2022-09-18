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

```bash
gpg --full-gen-key 
gpg (GnuPG) 2.2.27; Copyright (C) 2021 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Selezionare il tipo di chiave:
   (1) RSA e RSA (impostazione predefinita)
   (2) DSA ed Elgamal
   (3) DSA (solo firma)
   (4) RSA (solo firma)
  (14) Chiave esistente dalla scheda
Selezione? 1
Le chiavi RSA possono essere lunghe tra 1024 e 4096 bit.
Che chiave vuoi? (3072) 
La dimensione chiave richiesta è 3072 bit
Specificare la durata di validità della chiave.
         0 = la chiave non scade
      <N>  = la chiave scade dopo N giorni
      <N>w = la chiave scade dopo N settimane
      <N>m = la chiave scade dopo N mesi
      <N>y = la chiave scade dopo N anni
Per quanto tempo deve essere valida la chiave? (0) 0
La chiave non scade affatto
È corretto? (y/N) y
```

---

# GPG

Firma Digitale e Encryption

```bash
GnuPG deve costruire un ID utente per identificare la chiave.

Nome reale: Mario Rossi
Indirizzo email: mancusoa74.junk@gmail.com
Commento: 
È stato selezionato questo USER-ID:
    "Mario Rossi <mancusoa74.junk@gmail.com>"

Modificare (n)ome, (c)ommento, (e)mail oppure (o)k/(u)scire? o
```

---

# GPG

Firma Digitale e Encryption

```bash
gpg: chiave EFC56528711B27A4 contrassegnata come considerata attendibile
gpg: directory '/home/antonio/.gnupg/openpgp-revocs.d' creata
gpg: certificato di revoca archiviato come '/home/antonio/.gnupg/openpgp-revocs.d/53827ECFA811AFE27F112DBCEFC56528711B27A4.rev'
chiavi pubbliche e segrete create e firmate.

pub   rsa3072 2022-09-03 [SC]
      53827ECFA811AFE27F112DBCEFC56528711B27A4
uid                      Mario Rossi <mancusoa74.junk@gmail.com>
sub   rsa3072 2022-09-03 [E]
```

---

# GPG

Firma Digitale e Encryption

```bash
gpg --list-keys
gpg: controllo del trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: profondità: 0  valido:   1  firmato:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
/home/antonio/.gnupg/pubring.kbx
--------------------------------
pub   rsa3072 2022-09-03 [SC]
      53827ECFA811AFE27F112DBCEFC56528711B27A4
uid           [ultimo] Mario Rossi <mancusoa74.junk@gmail.com>
sub   rsa3072 2022-09-03 [E]
```

---

# GPG

Firma Digitale e Encryption

```bash
gpg -a --export-secret-keys 53827ECFA811AFE27F112DBCEFC56528711B27A4 > gpg-keys.asc
```

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_01.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_02.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_03.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_04.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_05.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_06.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_07.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_08.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_09.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_10.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_11.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_12.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_13.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_14.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_15.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_16.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_17.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_18.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_10.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_20.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_21.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_22.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_23.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_24.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_25.png" style="width:400px;margin:auto;"/>

---

# GPG

Firma Digitale e Encryption

- xxx

<img src="/media/gpg_26.png" style="width:900px;margin:auto;"/>

