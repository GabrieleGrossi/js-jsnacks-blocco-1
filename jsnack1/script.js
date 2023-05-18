let sum = 0
for(let count = 0; count <10; ){
    let input = prompt ('Inserisci un numero:')
    let number = parseInt(input);

    //verifica se numero è corretto
    if(!isNaN(number)) {
        sum += number;
        count++;
    } else {
        console.log('Hai inserito un valore non valido. Riprova');
    }
}

console.log('La somma dei numeri inseriti è:' + sum);


