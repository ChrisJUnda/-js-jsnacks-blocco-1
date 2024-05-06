'use strict'

const firstLetter = prompt ('Inserisci la prima parola');
const secondLetter = prompt ('Inserisci la seconda parola');

if (firstLetter.length < secondLetter.length) {
    
    console.log('la parola più corta è:', firstLetter, (firstLetter.length));
    console.log('la parola più lunga è:', secondLetter, (secondLetter.length));
    
} else if (secondLetter.lenght < firstLetter.length) {
    console.log('la parola più corta è:', secondLetter, (secondLetter.length));
    console.log('la parola più lunga è:', firstLetter, (firstLetter.length));
} else{
    
    console.log('le parole hanno la stessa lunghezza');
}