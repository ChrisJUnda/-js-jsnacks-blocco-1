'use strcit'

// Creo una varibile che contiene un array vuoto

const result = [];


// ciclo for che va da 1 a 6
// Chiedo all'utente un numero con un prompt e lo inserisco in una variabile

const start = 1;
const end = 6;

for (let counter = start; counter <= end; counter++) {
   // console.log(counter);

    const input = prompt (`Inserisci un numero - ${counter} di ${end}`);

   // console.log('input utente', input);
    //console.log('input utente in numero', parseInt(input));
    //console.log('risultato modulo', parseInt(input) % 2)
    //console.log('dispari?', parseInt(input) % 2 != 0);




    const inputNum = parseInt (input);

    if (!isNaN(inputNum)) {
        if (inputNum % 2 !== 0) {
            result.push(inputNum)
        }
    }  else {
        console.log('sono una stringa o comunque non sono un numero')
    }
}
// se input inserito è un numero
// ----
//se il numero è dispari (numero % 2 !== 0)
//inserisco il numero dell'array
//altrimetni
//--- stampo in console nn hai inserito un numero
// fine ciclo for che va da 1  a6




// stampo in console l'array risultante
console.log(result)