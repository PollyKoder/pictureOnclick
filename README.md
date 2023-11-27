# notes:
- utdeling og gjennomgang av oppgaver

 oppgave 1:

 lag et lite bildegalleri, hvor bildene blir større når man trykker på dem (onclick event)

 - Tema ide: musikk/band


 Bildegalleri tema:
- Favoritt band/artister
1. The Foxies
2. Paramore
3. Unlike Pluto
4. Cleopatrick
5. PVRIS
6. Grandson
(7. Charlotte Sands, 8. Måneskinn, 9. Em Beilhold, 10. Nothing but thieves. Hvis jeg har mer tid etter jeg har fått js funksjonen til å fungere, så kan jeg legge til flere band og leke meg litt med stiling av grid systemet.)


#Tanker:
- Lag en noe simpel side med overskrift og grid til bildene(set bildene i en felles div for så å sette dem i seperate div for å lage div kort). Legg til tekst på band/artist navn og hvilke album bildene er hentet fra.
- Lag deretter en js function onclick som kan brukes på alle bildene og som gjør bildene stor(fyller sjermen) når man trykker på dem.

- Ser at denne funksjonen hadde vært lettere å få til med noe som heter Lightbox kit, verdt å gjære mer studier rundt hva Lightbox er og hvordan jeg bruker det. Googlet litt, det er en visst en plugin. (Photoswipe?)

- 


- js notater fra lærer sitt eksempel:
//notat: eksempel fra lærer, fra gjennomgang før lunsj
//hent element via querysleletor
//add eventlistener to given key word
//use arrow function
//NB, this works if there are two css classes to adjust the size!
//let imgSmall(ccs class1) = true
//img.add event listener("click" () => {
//     if else  to change class with .classList = css class2
// })

//Dette gjør kun  bilde stort, intet skjer etter bilde er blitt stort...

//for å gjøre bilde mindre når vi klikker på det igjen:
//endre på else statement for å få den til å gjøre true/false justerbart 