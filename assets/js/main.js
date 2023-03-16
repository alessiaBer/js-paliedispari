/* Palindroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */






/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto */


//con un prompt chiedo all'utente se vuole pari o dispari e inserisco la scelta in una variabile
const evenOdd = prompt('Even or odd?');
console.log(evenOdd);
//con un prompt chiedo all'utente di inserire un numero da 1 a 5 e inserisco la scelta in una variabile
const userNumber = Number(prompt('Enter a number between 1 and 5'));
console.log(userNumber);

// definisco una funzione che generi un numero random
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//assegno l'output della funzione ad una variabile 
const computerNumber = getRandomInteger(0, 6);
console.log(computerNumber);

//definisco una funzione con all'interno un if statement che stabilisca se la somma dei numeri è pari o dispari
function even_or_odd(numb1, numb2) {
    const sum = numb1 + numb2;
    if (sum % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

// assegno l'output della funzione ad una variabile
const totalNumber = even_or_odd(userNumber, computerNumber);
console.log(totalNumber);


//con un if statement stabilisco chi ha vinto e loggo nella console il vincitore
if (totalNumber === evenOdd) {
    console.log('user wins');
} else {
    console.log('computer wins');
}
