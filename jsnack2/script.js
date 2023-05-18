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