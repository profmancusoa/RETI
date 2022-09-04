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

