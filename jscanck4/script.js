//In questo codice, utilizziamo il prompt per chiedere all'utente di inserire un numero di 4 cifre. Successivamente, controlliamo se il numero inserito ha effettivamente una lunghezza di 4 cifre. Se il numero non ha 4 cifre, viene visualizzato un messaggio di errore.

//Se il numero ha 4 cifre, utilizziamo un ciclo for. All'interno del ciclo, convertiamo ogni cifra in un numero intero utilizzando parseInt(), e quindi aggiungiamo il valore della cifra alla variabile sum per calcolare la somma totale delle cifre.

//Infine, stampiamo la somma delle cifre in console utilizzando console.log() se il numero ha 4 cifre corrette

let number = prompt("Inserisci un numero di 4 cifre:");
let sum = 0;

if (number.length !== 4) {
  console.log("Il numero inserito non ha 4 cifre.Si prega di ricaricare la pagina ed inserire un numero con specificatamente 4 cifre");
} else {
  for (let i = 0; i < number.length; i++) {
    sum += parseInt(number[i]);
  }
  console.log("La somma delle cifre è: " + sum);
}


function confrontaLunghezzaParole(prima, seconda) {
  if (prima.length === seconda.length) {
    console.log('Le due parole sono lunghe uguale')
    console.log(prima);
    console.log(seconda);
  } else if (prima.length > seconda.length) {
    console.log(prima + ' è la parola più lunga');
  } else {
    console.log(seconda + ' è la parola più lunga');
  }
}

const prima = prompt("Inserisci la prima parola:");
const seconda = prompt("Inserisci la seconda parola:");

confrontaLunghezzaParole(prima, seconda);