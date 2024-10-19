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
    nameSquad: 'PippoFc',
    points: 0,
    fouls: 0,
}, {
    nameSquad: 'PlutoFc',
    points: 0,
    fouls: 0,
}, {
    nameSquad: 'PaperinoFc',
    points: 0,
    fouls: 0,
}, {
    nameSquad: 'TopolinoFc',
    points: 0,
    fouls: 0,
}]
console.log(squad);

// 2) Creare una funzione randomica da riutilizzare

function numberRandom(number) {
    return Math.floor(Math.random() * (10 - 1) + 1);
  }

// 3) Creare una costante della lunghezza dell'array da utilizzare durante i cicli

const squadLenght = squad.length;

// 4) Creare un ciclo per randomizzare i punti fatti

for (let i = 0; i < squadLenght; i++){
    squad[i].points = numberRandom();
}
console.log(squad);


// 5) Creare un ciclo per randomizzare i falli subiti

for (let i = 0; i < squadLenght; i++){
    squad[i].fouls = numberRandom();
}
console.log(squad);

// 6) Creare un nuovo array con solo nomi e falli subiti

let newSquad = Object.create(squad);

// 7) Eliminare i punti fatti (points)

for (let i = 0; i < squadLenght; i++){
    delete newSquad[i].points
}
console.log(newSquad);




