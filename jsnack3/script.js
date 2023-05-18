//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,  se è dispari inseriscilo nell’array.


let numbers = [];

for ( let i = 0; i < 6; i++){
    let number = parseInt(prompt('Inserisci un numero:'))

    if(number%2 !==0) {
        numbers[numbers.length] = number
    }
}

console.log('I numeri dispari inseriti sono', numbers)