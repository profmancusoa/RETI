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
version: '1.2.0'
---  

# SISTEMI & RETI


<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

--- #slide 1

![/media/Diapositiva1.jpg](/media/Diapositiva1.jpg)

--- #slide 2

![/media/Diapositiva2.jpg](/media/Diapositiva2.jpg)

--- #slide 3

![/media/Diapositiva3.jpg](/media/Diapositiva3.jpg)

--- #slide 4

![/media/Diapositiva4.jpg](/media/Diapositiva4.jpg)

--- #slide 5

![/media/Diapositiva5.jpg](/media/Diapositiva5.jpg)

--- #slide 6

![/media/Diapositiva6.jpg](/media/Diapositiva6.jpg)

--- #slide 7

![/media/Diapositiva7.jpg](/media/Diapositiva7.jpg)

--- #slide 8

![/media/Diapositiva8.jpg](/media/Diapositiva8.jpg)

--- #slide 9

![/media/Diapositiva9.jpg](/media/Diapositiva9.jpg)

--- #slide 10

![/media/Diapositiva10.jpg](/media/Diapositiva10.jpg)

--- #slide 11

![/media/Diapositiva11.jpg](/media/Diapositiva11.jpg)

--- #slide 12

![/media/Diapositiva12.jpg](/media/Diapositiva12.jpg)

--- #slide 13

![/media/Diapositiva13.jpg](/media/Diapositiva13.jpg)

--- #slide 14

![/media/Diapositiva14.PNG](/media/Diapositiva14.jpg)


--- #slide 15

![/media/Diapositiva15.PNG](/media/Diapositiva15.jpg)


--- #slide 16

![/media/Diapositiva16.PNG](/media/Diapositiva16.jpg)

--- #slide 18

![/media/Diapositiva18.jpg](/media/Diapositiva18.jpg)

--- #slide 19

![/media/Diapositiva19.jpg](/media/Diapositiva19.jpg)

--- #slide 20

![/media/Diapositiva20.jpg](/media/Diapositiva20.jpg)


---

# Cavo UTP Ethernet

- Configuriamo i due PC assegnando due indirizzi IP distinti all'interfaccia ethernet di ciascun PC
- Per fare cio utilizziamo il network manager via CLI

PC1

```bash
$ nmcli con add type ethernet ifname <nome interfaccia> con-name 'Conn-Test' ip4  10.10.10.1/24
$
$ nmcli con up Conn-Test
```

<br>

PC2

```bash
$ nmcli con add type ethernet ifname <nome interfaccia> con-name 'Conn-Test' ip4  10.10.10.2/24
$
$ nmcli con up Conn-Test
```


--- #slide 22

![/media/Diapositiva22.jpg](/media/Diapositiva22.jpg)

--- #slide 23

# Cavo UTP Ethernet

- Ora dal un PC facciamo ping verso l'altro PC e viceversa

PC1

```bash
$ ping 10.10.10.2
```

<br>

PC2

```bash
$ ping 10.10.10.1
```

<br>
<br>

- Se tutto funziona correttamente dal PC1 siamo in gradi di "pingare" il PC2 e viceversa
- Ciò significa che il nostro cavo è crimpato correttamente e ci fornisce connettività


--- #slide 24

![/media/Diapositiva24.jpg](/media/Diapositiva24.jpg)


