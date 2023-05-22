let nome = prompt('Inserire il nome della persona invitata');
console.log(nome);

const listInvited = [ 'Alberto', 'Mattia', 'Giacomo', 'Lorenzo', 'Martina', 'Marta', 'Giuseppina', 'Gina', 'Camilla']

let invited = false;

for (let i = 0; i < listInvited.length; i++){
    if(nome === listInvited[i]){
        invited = true
    }
}

if (invited) {
    console.log ('Ciao ' + nome + ' sei stato/a invitato/a alla festa')
} else{
    console.log ('La persona non è nella lista degli invitati')
}


let sum = 0;
const max = 10;

for (let i = 1; i <= max ; i++){
    sum += i;
}

const media = sum / max;

console.log('La somma dei primi dieci numeri é ' + sum);
console.log('La media dei primi dieci numeri é ' + media);