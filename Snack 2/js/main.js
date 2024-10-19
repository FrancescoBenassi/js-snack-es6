// # Snack 2

// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// 1) Creare un array
//     - Creare gli oggetti all'interno dell'array
//     - Aggiungere le proprietà ai vari oggetti
//     - Compilare l'unica proprietà 'nome' e settare tutte le altre a 0

const squad = [{
    namePlayer: 'Giacomo',
    points: 0,
    fouls: 0,
}, {
    namePlayer: 'Pietro',
    points: 0,
    fouls: 0,
}, {
    namePlayer: 'Francesco',
    points: 0,
    fouls: 0,
}, {
    namePlayer: 'Giovanni',
    points: 0,
    fouls: 0,
}]
console.log(squad);

// 2) Creare una funzione randomica da riutilizzare

function numberRandom(number) {
    return Math.floor(Math.random() * (10 - 1) + 1);
  }

// 3) Creare un ciclo per randomizzare i punti fatti

const squadLenght = squad.length;
console.log(squadLenght);

for (let i = 0; i < squadLenght; i++){
    squad[i].points = numberRandom();
}
console.log(squad);


// 4) Creare un ciclo per randomizzare i falli subiti

// 5) Creare un nuovo array con solo nomi e falli subiti