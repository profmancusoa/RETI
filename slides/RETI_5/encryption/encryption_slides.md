---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /cover.jpg
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: "16_/9"
routerMode: "hash"
materia: "RETI"
as: "2024/2025"
version: "2.0.0"
---  


# SISTEMI & RETI

Encryption e Decryption Simmetrica e Asimmetrica

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>


--- 

# Encryption e Decryption

Simmetrica

- L'Encryption (Cifratura) e Decryption (Decifratura) a chiave simmetrica prevede l'uso di una sola chiave utilizzata sia per la cifratura del testo in chiaro che per la decifratura del chyper text.

<img src="/media/enc01.png" style="width:800px;margin:auto;"/>


--- 

# Encryption e Decryption

Openssl

- Lo svolgimento di queste esercitazioni prevede l'uso del tool OpenSSL sotto Linux
- Per fornire un ambiente stabile e con la versione corretta della libreria OpsnSSL, le esercitazioni saranno svolte in un ambiente "containerizzato"
- L'ambiente si attiva con il seguente comando


<br>

```bash
docker run -ti --rm -p 8080:8080 profmancusoa/linux-encryption

```


--- 

# Encryption e Decryption

Simmetrica

- Vediamo come cifrare un file con l'agoritmo DES da linea di comando su Linux

```bash
openssl enc -des -e -iter 1000 -a -provider legacy -provider default  -in clear.txt -out chyper.txt
```

- dato un file in chiaro **clear.txt** genera un file cifrato **chyper.txt** con l'algoritmo simmetrico DES e successivamente codificato in base64
   
clear.txt

```bash
ciao questo è un file in chiaro da rendere segreto
```

chyper.txt
```bash
U2FsdGVkX19DooxcqNlXI2AKYTOQYfxaMIadM6ODILoZnWp53zmjrIHWyZzUn8IF
iow02vCkHqaGmeMawK3/57IWB7MVYXog
```

--- 

# Encryption e Decryption

Simmetrica

- Analizziamo il comando (il manuale completo disponibile con man openssl enc)

```bash
openssl enc -des -e -iter 1000 -a -provider legacy -provider default  -in clear.txt -out chyper.txt
```

- **openssl**: uno strumento molto versatile che supporta oltre 140 algoritmi di cifratura simmetrica
- **enc**: abilita il tool di encryption/decryption  
- **-des**: specifica quale chyper (algoritmo) usare    
- **-e**: specifica che vogliamo fare l'encryption 
- **-iter 1000**: esegue 1000 iterazioni per derivare la chiave privata da un passphrse inserito dall'utente 
- **-a**: esegue l'encoding in base64 del risultato per una maggior leggibilità
- **-provider legacy**: in openssl3 è necessario abilitare gli algoritmi deprecaty (come il DES)
- **-provider default**: abilita il provider di algoritmi di default
- **-in**: file in chiaro 
- **-out**: file cifrato 

--- 

# Encryption e Decryption

Simmetrica

- Vediamo come decifrare un file con l'algoritmo DES

```bash
openssl enc -des -d -iter 1000 -a -provider legacy -provider default  -in chyper.txt -out clear.txt
```

- **-d**: usiamo il flag -d per dire a openssl di effettuare il processo di decryption
- **-int**: file cifrato 
- **-out**: file in chiaro 

chyper.txt
```bash
U2FsdGVkX19DooxcqNlXI2AKYTOQYfxaMIadM6ODILoZnWp53zmjrIHWyZzUn8IF
iow02vCkHqaGmeMawK3/57IWB7MVYXog
```

clear.txt

```bash
ciao questo è un file in chiaro da rendere segreto
```
--- 

# Encryption e Decryption

Simmetrica

- Se non forniamo esattamente la stessa chiave utilizzata per la cifratura otteniamo un errore

```bash
enter DES-CBC decryption password:
bad decrypt
805B4FAD4B7F0000:error:1C800064:Provider routines:ossl_cipher_unpadblock:bad decrypt:../providers/implementations/ciphers/ciphercommon_block.c:124:
```

- questo conferma che i processi di cifratura e di decifratura devono utilizzare assolutamente la stessa chiave

--- 

# Encryption e Decryption

Simmetrica

- Possiamo anche passare direttamente una chiave ed un IV

```bash
openssl enc -des -e  -K 3d4325a3676f34bb  -iv be1d78bd53f11a02  -a -provider legacy -provider default  -in clear.txt -out chyper.txt
```

- **-K**: chiave a 64 bit (di cui solo 56 vengono effettivamente utilizzati)
- **-iv**: initialization vector utilizzato dall'algoritmo

chyper.txt

```bash
UaUtgHrvqGTu0K8X/GBNDYSEZOhrc8fhNiZm35ERSKW8zmAjUV609FgjAtUJVPoE
cdcVgt5T3fs=
```

--- 

# Encryption e Decryption

Simmetrica

```bash
openssl enc -des -e  -K 2d4325a3676f34bb  -iv be1d78bd53f11a02  -a -provider legacy -provider default  -in clear.txt -out chyper.txt
```

chyper.txt

```bash
IWt8ua1R+kQmIVaP+CWIxfdBKLp52LRU8z4PAvRahaXEuL1jfDDVCUJnBpJUxBJr
xbRFkZ9VL2Q=
```

vs

```bash
UaUtgHrvqGTu0K8X/GBNDYSEZOhrc8fhNiZm35ERSKW8zmAjUV609FgjAtUJVPoE
cdcVgt5T3fs=
```

- come si può notare cambiando un solo bit della chiave, il chyper text è completamente diverso
- Questa è una caratteristica fondamentale di ogni algortimo di encryption
  
--- 

# Encryption e Decryption

Simmetrica

- Vediamo come decifrare un file con l'algoritmo DES

```bash
openssl enc -des -d  -K 3d4325a3676f34bb  -iv be1d78bd53f11a02  -a -provider legacy -provider default  -in chyper.txt -out clear.txt
```

chyper.txt
```bash
UaUtgHrvqGTu0K8X/GBNDYSEZOhrc8fhNiZm35ERSKW8zmAjUV609FgjAtUJVPoE
cdcVgt5T3fs=
```

clear.txt

```bash
ciao questo è un file in chiaro da rendere segreto
```


--- 

# Encryption e Decryption

Simmetrica

- Trasferiamo un file in modo sicuro e confidenziale via socket

**Ricevitore**

```bash
nc -l 8080 | openssl enc -des -d  -K 3d4325a3676f34bb  -iv be1d78bd53f11a02  \\
-a -provider legacy -provider default > ricevuto.txt
```

**Trasmettitore**

```bash
openssl enc -des -e  -K 3d4325a3676f34bb  -iv be1d78bd53f11a32  \\
-a -provider legacy -provider default -in clear.txt  | nc -N 192.168.1.77 8080
```
--- 

# Esercizio crypto_01

Simmetrica

- Lavorando a coppie (studente A e B):
  - generare una chiave privata condivisa
  - A invia via rete un messaggio cifrato a B
  - B lo decifra e confronta con A se è efefttivamente il messaggio originale
  - Effettuare la trasmissione in senso opposto da B a A e verificare il messaggio

Consegnare su classroom:
- il file originale in chiaro |cognome|_es1_clear.txtx
- il file cifrato e codificato in base64 |cognome|_es1_chyper.txt
- la chiave in esadecimale |cognome|_es1_key.txt 
- l'IV in esadecimale |cognome|_es1_iv.txt
- una lista di tutti i comandi e i passi per riprodurre l'esercitazione

--- 

# Encryption e Decryption

Asimmetrica

- L'Encryption (Cifratura) e Decryption (Decifratura) a chiave asimmetrica (pubblica) prevede l'uso di due chiavi distinte. Una pubblica nota a tutti ed una privata da custodire con cura.

<br>

<img src="/media/enc02.png" style="width:400px;margin:auto;"/>

--- 

# Encryption e Decryption

RSA

- Ricordiamo brevemente la teoria del RSA

<br>

```bash
Dati p e q primi, si calcola 

N = p x q 

V = (p - 1) x (q - 1)

Si sceglie Npriv coprimo con V e < V

Si calcola Npub in modo che (Npub x Npriv) % V = 1

Si definisce:

Kpub = (N, Npub) e Kpriv = (N, Npriv)

```

--- 

# Encryption e Decryption

RSA

```bash

dato 0 < m <N
    
     Npub
c = m      % N
 
     Npriv
m = c      % N

```

Tuttavia le implementazioni di RSA applicano il meccanismo del [Chinese remainder theorem](https://en.wikipedia.org/wiki/Chinese_remainder_theorem), per decifrare il c

```bash

dp = Npriv % (p - 1)

dq = Npriv % (q - 1)

        -1
qinv = q   % p

```

--- 

# Encryption e Decryption

RSA

```bash

      dp
m1 = c   % p

      dq
m2 = c   % p

h = (qinv x (m1 - m2)) % p

m = m2 + h x q 

```

--- 

# Encryption e Decryption

Asimmetrica

- Anche in questo scenario openssl può esserci utile per generare le chiavi e poi per effettuare l'encryption e decryption

**Generazione delle chiavi asimmetriche**

- Chiave privata con parametri di default (2048 bit)
```bash
openssl genpkey -algorithm RSA -out alice_privata.pem
```

```bash
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDEeuwgU9iOfNaM
WUTyqxKsQWJPlewgJfmslkeEl1FTBOFg5X7qdaFWukwDby6dV7ibJaIfkeLFiFbO
qG3vaW6aimTmZWJCGS9szRUfj7ANO5yzx/RX2VSAiBpB5SxzPuDzJ0GbF5/U2nGe
.................................................................
EnrP00FXFIfFODotK3j2TbythXvgXu61xsl/UazNCTyS0TaqadHRbzXMI9UI2EFuZ
XjQGil6H0qtI47xcxOrkBDxTGjoxAiXAA3yATkMm4DmOz8/e5hjR09FUtziVfG5fF
3d/dsBElFz9i7Iui7mqUuQEskznRc=
-----END PRIVATE KEY-----
```

--- 

# Encryption e Decryption

Asimmetrica

- Generiamo la chiave pubblica da quella privata (ricorda sono matetamicamente correlate)

```bash
openssl rsa -in alice_privata.pem -pubout > alice_pubblica.pem
```

```bash
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs5ic2uyImlx1r9RViduV
nntm8UdLNYkHntpv1EK9bjOc/T172nsRQX4QPb+sGLl30kNYGfbh+wAxNTxzl2NS
hUDAM5FKun132/+LOy0oP+0MGOMa4/P+b8cTtqhwlaysAxtmj4fWRpo6y8b+PhS7
eJboA030A3oJR9hx7EfE3PX62Ro9ZZzFPk6skSgdXp586NS13lIr9wIeHNUf0jum
sEd10mwFy7VS3HBA3yPJxeBpyC4BI/5pQfbSqw3Gz4o9DqhhNwgRn2kp4teKOsF+
qTwmQQomD2cc4vEkLHLb+G8tUvSny8g9EdOCqlc95OFO61FPsPAwU/3uf/zr1LNX
qwIDAQAB
-----END PUBLIC KEY-----
```

- Ora Bob e Alice si possono scambiare le rispettive chiavi pubbliche

```bash
scp alice_pubblica.pem bob@host:/path/

scp bob_pubblica.pem alice@host:/path/

```

--- 

# Encryption e Decryption

Asimmetrica

- Ora che abbiamo generato la chiave pubblica e privata analizzimone il contenuto

```bash
-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDRjpSWX/VFA8iZ
7UXerAv4MNQEPlwkT2rd6JBidnpmPetk7eYx4l0SVxX06MDcbvSY6ci9zkt53646
...
...
aihBYjzVtODvjoKC8clV3OULg16+XpleQU/fKty0BTZ4c8y4/pYK8ycxpSByU/4R
jcxS2iZbyMYxdleI1luSZA==
-----END PRIVATE KEY-----
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0Y6Ull/1RQPIme1F3qwL
+DDUBD5cJE9q3eiQYnZ6Zj3rZO3mMeJdElcV9OjA3G70mOnIvc5Led+uOkKGeAOK
vINqHiY+iWc4trzkEGE7WZCe3QHFPhkNWfK2oibr+7GKHvA7A4x9qxd82w6gYXky
QehkfOXDvhlG0wqt/PYVcyFsoAmSvDGkaOhkRtySoaHg/nMAp2jUzfuE0h55jwIH
VzC+JWg6VzY9nT7/uf1dw1v0arfoGu3atJBDV/4fkF8feslv6M3XoFs0LaaKLgW6
vb9Ud2N2ncYx8A+TuYjF4Qv3iuTPjy8x9ywneE7U7jrU1CNzKKMkAUE6NUWiL8Np
lwIDAQAB
-----END PUBLIC KEY-----

```

--- 

# Encryption e Decryption

Asimmetrica

- Ma guardiamo meglio

```bash
openssl rsa -text -noout -in alice_privata.pem

Private-Key: (2048 bit, 2 primes)

modulus: 00:d1:8e:94:96:5f:f5:45:03:c8:99:ed:45:de:ac:

publicExponent: 65537 (0x10001)

privateExponent:28:a9:bf:21:72:db:58:1a:04:da:01:95:b6:40:b2:    

prime1:00:f3:53:ae:1a:71:9d:16:53:3f:dd:d3:67:3a:9a:

prime2: 00:dc:78:a3:da:94:25:64:91:0c:69:75:6b:cf:50:

exponent1: 23:c7:c9:51:40:25:ae:53:bd:8f:7b:f7:b1:09:5f:

exponent2: 35:df:4c:ba:86:64:b4:b4:34:c2:38:2d:05:d5:60:

coefficient: 2d:ee:35:7b:73:70:ea:8c:06:9a:15:80:db:b5:08:
```

--- 

# Encryption e Decryption

Asimmetrica

#### 1. **Modulus (n) --> N**
- **Descrizione**: È il prodotto dei due numeri primi generati (prime1 e prime2).
- **Ruolo**: Componente fondamentale della chiave pubblica e privata. È usato per la crittografia e per la firma.

<br>

#### 2. **Public Exponent (e) --> Npub**
- **Descrizione**: È un valore intero piccolo e generalmente fissato (ad esempio, 65537 è comune).
- **Ruolo**: È usato nella chiave pubblica per il processo di crittografia e verifica delle firme digitali.

<br>

#### 3. **Private Exponent (d) --> Npriv**
- **Descrizione**: È l'inverso moltiplicativo modulo \( \phi(n) \) del Public Exponent \( e \).
- **Ruolo**: È la componente segreta della chiave privata, usata per decrittare e firmare i messaggi.

<br>

#### 4. **Prime1 --> p**
- **Descrizione**: È uno dei due numeri primi utilizzati per generare il Modulus \( n \).
- **Ruolo**: Parte fondamentale del processo di generazione della chiave. Deve essere mantenuto segreto.


--- 

# Encryption e Decryption

Asimmetrica

#### 5. **Prime2 --> q**
- **Descrizione**: È il secondo numero primo usato per calcolare il Modulus \( n \).
- **Ruolo**: Deve essere diverso da \( p \), ma altrettanto segreto.

<br>

#### 6. **Exponent1 --> dp**
- **Descrizione**: È il valore \( d \) ridotto modulo \( (p-1) \).
- **Ruolo**: Ottimizza le operazioni crittografiche come la decifratura e la firma utilizzando \( p \).

<br>

#### 7. **Exponent2 --> dq**
- **Descrizione**: È il valore \( d \) ridotto modulo \( (q-1) \).
- **Ruolo**: Come Exponent1, serve per ottimizzare operazioni crittografiche usando \( q \).

<br>

#### 8. **Coefficient --> qinv**
- **Descrizione**: È l'inverso moltiplicativo di \( q \) modulo \( p \).

--- 

# Encryption e Decryption

- Ora guardiamo la chiave pubblica

```bash

openssl rsa -pubin -text -noout -in alice_pubblica.pem
Public-Key: (2048 bit)

Modulus:
    00:d1:8e:94:96:5f:f5:45:03:c8:99:ed:45:de:ac:

Exponent: 65537 (0x10001)

```

- Quindi come si vede nella chiavi privata e pubblica sono solo contenuti i numeri che abbiamo visto nella parte teorica del RSA.
- L'unica differenza che in una chiave vera tali numeri sono molto grandi


**NOTA: Le implementazioni correnti usano convenzionalmente Npub = 65537**

**NOTA2: In realtà prima viene determinato Npub (65537) e poi si calcola Npriv**

--- 

# Encryption e Decryption

Asimmetrica

 Vediamo come alice cifra un file con la chiave pubblica di Bob

```bash
openssl pkeyutl -encrypt -pubin -inkey bob_pubblica.pem -in clear.txt  | base64 > chypher.txt
```

- dato un file in chiaro **clear.txt** genera un file cifrato **chyper.txt** con l'algoritmo simmetrico DES e successivamente codificato in base64
   
clear.txt

```bash
ciao questo è un file in chiaro da rendere segreto
```

chyper.txt
```bash
bFXO5nneszlYxJ/gBOLSKD2Xst1uKmG7sKKX/s8cWN5pV0vVmuFW1+ifeeJ8XMtDrI5ElNL5tCEO
lXsyNkpBe01URMkDWjg8cgbQKnt30+fjjF1QQ+5aqeAesJ8pk23QtlioXW4U/p8L6rwhB79fpAdH
af7D4Mh6p2jvMhLVIpQMwVpQgjPSAYXWRfA8UAjbINOXQa9z1qTPmtCmOz7CvQRY2bYbU8WP00s3
vK25Uo8Rmf3HWeu0QfnXPYDabLiEtQCVT+5GP7SNrjQi1H5KbGkB5DMOdadmHpcxwKMemeZgWUVO
cfNxe3RpQqPXNMV0iN6JdzfgeNZmeDH4dedrWQ==

```

--- 

# Encryption e Decryption

Asimmetrica

- Analizziamo il comando (il manuale completo disponibile con man openssl enc)

```bash
openssl pkeyutl -encrypt -pubin -inkey bob_pubblica.pem -in clear.txt  | base64 > chypher.txt
```

- **openssl**: uno strumento molto versatile che supporta oltre 140 algoritmi di cifratura simmetrica
- **pkeyutl**: abilita il tool di gestione dei servizi public key   
- **-encrypt**: specifica che vogliamo fare l'encryption 
- **-pubin**: specifica che si tratta di una chiave pubblica in ingresso (default chiave privata)
- **-inkey**: specifica la chiave da usare
- **-in**: file in chiaro 
- **| base64**: encoding in base64
- **>**: redirige l'output sul file chyper.txt


```bash
Nota: con una chiave RSA si può fare l'encryption di un blocco di dimensioni pari a:
max block = (RSA KEY SIZE / 8) - 11 bytes
```

--- 

# Encryption e Decryption

Asimmetrica

Vediamo come Bob decifra il file ricevuto da alice con la sua chiave privata

```bash
cat chypher.txt | base64 -d | openssl pkeyutl -decrypt -inkey bob_privata.pem -out clear.txt
```

chyper.txt
```bash
bFXO5nneszlYxJ/gBOLSKD2Xst1uKmG7sKKX/s8cWN5pV0vVmuFW1+ifeeJ8XMtDrI5ElNL5tCEO
lXsyNkpBe01URMkDWjg8cgbQKnt30+fjjF1QQ+5aqeAesJ8pk23QtlioXW4U/p8L6rwhB79fpAdH
af7D4Mh6p2jvMhLVIpQMwVpQgjPSAYXWRfA8UAjbINOXQa9z1qTPmtCmOz7CvQRY2bYbU8WP00s3
vK25Uo8Rmf3HWeu0QfnXPYDabLiEtQCVT+5GP7SNrjQi1H5KbGkB5DMOdadmHpcxwKMemeZgWUVO
cfNxe3RpQqPXNMV0iN6JdzfgeNZmeDH4dedrWQ==

```

clear.txt

```bash
ciao questo è un file in chiaro da rendere segreto
```

--- 

# Encryption e Decryption

Asimmetrica

- Se un attaccante (Jon) prova a decifrare il messaggio cifrato con le sue chiavi

**Privata**
```bash
cat chypher.txt | base64 -d | openssl pkeyutl -decrypt -inkey jon_privata.pem -out clear.txt 
Public Key operation error
807B85E5FD7E0000:error:0200009F:rsa routines:RSA_padding_check_PKCS1_type_2:pkcs decoding error:../crypto/rsa/rsa_pk1.c:269:
807B85E5FD7E0000:error:02000072:rsa routines:rsa_ossl_private_decrypt:padding check failed:../crypto/rsa/rsa_ossl.c:500:
```

**Pubblica**

```bash
cat chypher.txt | base64 -d | openssl pkeyutl -decrypt -inkey jon_pubblica.pem -out clear.txt 
Could not read private key from jon_pubblica.pem
806B853BBF7F0000:error:1608010C:STORE routines:ossl_store_handle_load_result:unsupported:../crypto/store/store_result.c:151:
806B853BBF7F0000:error:1608010C:STORE routines:ossl_store_handle_load_result:unsupported:../crypto/store/store_result.c:151:
pkeyutl: Error initializing context
```

--- 

# Encryption e Decryption

Asimmetrica

- In entrambi i casi l'attaccante Jon NON è riuscito a leggere il messaggio originale inviato da Alice a Bob
- Questo ci dimostra che la **confidenzialità** è garantita dal meccanismo di encryption a chiave pubblica

<br>

<img src="/media/enc03.png" style="width:300px;margin:auto;"/>


--- 

# Encryption e Decryption

Asimmetrica

- Vediamo ora come usare le chiavi asimmetriche per garantire l'autenticità di un messaggio
- Importante notare che in questo caso la confidenzialità non è ciò che si vuole garantire
- Bob vuole essere sicuro che l'ordine di pagamento provenga da Alice

<br>

<img src="/media/enc04.png" style="width:600px;margin:auto;"/>

--- 

# Encryption e Decryption

Asimmetrica

- Alice genera un hash del messaggio e lo cifra con la sua chiave privata

**pagamento.txt**

```bash
Io Alice dichiaro di pagare a Bob 1000 Euro
```

```bash
openssl pkeyutl -sign -inkey alice_privata.pem -in pagamento.txt -out pagamento_signature.bin
```

**pagamento_signature.bin**

```bash
00000000  53 3f 74 bb 09 a3 60 3b  62 5f 6e 47 e5 1f 61 46  |S?t...`;b_nG..aF|
00000010  32 74 d0 48 4b e0 ca 7e  79 b8 5c 95 07 da 2b 05  |2t.HK..~y.\...+.|
00000030  db a2 f4 62 98 c7 bf f5  44 e5 f2 51 ca ed 5a ac  |...b....D..Q..Z.|
00000040  0b 84 9f dd b4 8e ca 9d  77 15 65 c6 5d aa 13 e3  |........w.e.]...|
..............................................................................
000000e0  3d 34 5e d1 0f 23 e9 fd  5d 60 00 7e da ae 23 53  |=4^..#..]`.~..#S|
000000f0  4b cd df 91 40 39 89 05  e0 8b 4a 5e 17 99 65 59  |K...@9....J^..eY|
```

- Questa è la firma digitale del file che Alice vuole inviare a Bob


--- 

# Encryption e Decryption

Asimmetrica

- Bob riceve il file **pagamento.tx** e la sua firma digitale **pagamento_signature.bin**
- Il messaggio che Bob ha ricevuto è stato effettivamente inviato da Alice?
- Ora Bob ha tutti gli elementi per rispondere in modo certo a questa domanda

```bash
openssl pkeyutl -verify -pubin -inkey alice_pubblica.pem -sigfile pagamento_signature.bin -in pagamento.txt       

Signature Verified Successfully
```

- OK come possiamo vedere la firma digitale è stata confermata, in quanto dedcifratya con la chiave pubblica di Alice
- Questo garantisce che il file ricevuto è effettivamente inviato da Alice e cioè è **autentico**
--- 

# Encryption e Decryption

Asimmetrica

- Ora se un soggetto malizioso (attaccante) modificasse il messaggio di Alice

**pagamento.txt**

```bash
Io Alice dichiaro di pagare a Bob 2000 Euro
```

```bash
openssl pkeyutl -verify -pubin -inkey alice_pubblica.pem -sigfile pagamento_signature.bin -in pagamento.txt       

Signature Verified Failure
```
<br>

- Bob sarebbe in grado di accorgersene in quanto la firma digitale non è quella associata con il file ricevuto
- Pertanto la firma digitale permette anche di assicurare **l'integrità** di un messaggio

--- 

# Encryption e Decryption

Asimmetrica

- Ora unendo i due processi siamo in grado di garantire **la confidenzialità**, **l'autenticità** e **l'integrità** di una comunicazione digitale

**ALICE**

<img src="/media/enc05.png" style="width:500px;position:relative;top:-3rem;right:-10rem;"/>


```bash
openssl pkeyutl -encrypt -pubin -inkey bob_pubblica.pem -in pagamento.txt  -out pagamento_enc.bin
md5sum pagamento.txt > pagamento_hash.md5
openssl pkeyutl -sign -inkey alice_privata.pem -in pagamento_hash.md5 -out pagamento_signature.bin
```

- Ora trasmetto a Bob **pagamento_enc.bin** con la sua firma digitale **pagamento_signature.bin**

--- 

# Encryption e Decryption

Asimmetrica

**BOB**

<img src="/media/enc06.webp" style="width:500px;position:relative;top:-3rem;right:-10rem;"/>

```bash
openssl pkeyutl -decrypt -inkey bob_privata.pem -in pagamento_enc.bin -out pagamento.txt
md5sum pagamento.txt > pagamento_hash.md5
openssl pkeyutl -verify -pubin -inkey alice_pubblica.pem -sigfile pagamento_signature.bin -in pagamento_hash.md5  

Signature Verified Successfully
```
<br>

<div style="background-color:green;color:white;padding:1rem;font-size:1.5rem;">
Alice ha inviato a Bob un messaggio sicuro, confidenziale, integro e autentico
</div>

--- 

# Esercizio crypto_02

Asimmetrica


- Lavorando in gruppi di 3 (studente A,B e C):
  - generare una coppia di chiave asimmetriche per ogni studente
  - Ogni studente distribuisce la propria chiave pubblica agli altri due
  - A invia un file e la sua firma a B e C
  - B e C verificano l'autenticità del file
  - A invia un file e la sua firma a B che lo intercetta
  - B lo modifica e poi lo reinvia a C
  - C crede di averlo ricevuto da A e ne verifica l'autenticità e l'integrità
  - A invia un file cifrato e la sua firma a B e B invia un file cifrato e la sua firma a C
  - B verifica e decifra il messaggio di A
  - C verifica e decifra il messaggio di B

Consegnare su classroom:
- tutti i file e le chiavi utilizzati per lo svolgimento dell'esercitazione 
- una lista di tutti i comandi e i passi per riprodurre l'esercitazione


--- 

# Esercizio crypto_03

Asimmetrica e Simmetrica

- Come visto in precedenza RSA non è adatto a cifrare/decrifrare grossi blocchi di dati
- Pertanto è necessario utilizzare RSA per cifrare una chiave DES, scambiarla in modo sicuro e poi utilizzare questa chiave per coifrare/decifrare un blocco di test generico
- Lavorando a gruppi di 2 (Studente A e B)
  - generare una coppia di chiave asimmetriche per ogni studente
  - A genera una chiave simmetrica DES
  - A la cifra con RSA in modo che B possa decifrarla e la distribuisce a B su un canale non sicuro
  - A crypta con DES un file di testo e lo invia a B
  - B decifra la chiave precedentemente ricevuta da A
  - B decifra il file con la chiave privata

Consegnare su classroom:
- tutti i file e le chiavi utilizzati per lo svolgimento dell'esercitazione 
- una lista di tutti i comandi e i passi per riprodurre l'esercitazione