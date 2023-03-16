/* Palindroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma */

function isPalindrome(word) {

    //trasformo la parola in un array di lettere
    const wordArray = word.split('');
    console.log(wordArray);
    // passo al contrario gli elementi dell'array
    const reverseArray = wordArray.reverse();
    console.log(reverseArray);

    const joinReverseArray = reverseArray.join('');

    console.log(word, joinReverseArray);

    if (word === joinReverseArray) {
        console.log('palindromo')
    } else {
        console.log('non palindromo')
    }
}

//chiedo all'user una parola
const chosenWord = prompt('choose a word');

isPalindrome(chosenWord);

/*
if (!isPalindrome) {
    console.log('palindromo');
} else {
    console.log('non palindromo');
}
 */

/* 
function palindrome(word) {
    //con un ciclo while passo l'array
    let i = 0;
    while (i < wordArray.length) {
        const letters = wordArray[i];
        console.log(letters);

        i++;
        let j = wordArray.length - 1;
        while (j >= 0) {
            const backwardsletters = wordArray[j]
            console.log(backwardsletters);

            j--;
            
            //verifico le gli index corrispondono
            if (backwardsletters[j] === letters[i]) {
                console.log('ciao');
        }
        }
    }

}

palindrome(word); */





/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto */

/* 
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
} */
