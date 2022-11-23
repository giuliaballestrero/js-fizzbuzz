/**
 * Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100:
ma che per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
 */


//stampo in console i numeri da 1 a 100

for (let index = 1; index < 101; index++) {
    console.log(index);

//verifico quali numeri sono divisibili sia per 5 che per 3
if ( (index % 3) === 0 && (index % 5) === 0 )
console.log ('FizzBuzz');

//verifico  quali numeri sono divisibili per 3
    else if (index % 3 === 0)
    console.log('Fizz');

//verifico quali numeri sono divisibili per 5
        else if (index % 5 === 0)
        console.log('Buzz');
}

