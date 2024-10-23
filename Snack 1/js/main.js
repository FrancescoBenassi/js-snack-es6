// # Snack 1

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// 1) Creare un array con dentro gli oggetti ed aggiungere ad ogni oggetto proprietà: nome e peso

const arrayObject = [{
    nome: 'Bici 1',
    peso: 54,
}, {
    nome: 'Bici 2',
    peso: 50,
}, {
    nome: 'Bici 3',
    peso: 60,
}, {
    nome: 'Bici 4',
    peso: 50,
}]
console.log(arrayObject);

// 2) Creare una variabile con la lunghezza dell'array

const arrayObjectLenght = arrayObject.length;

// 3) Confrontare i vari pesi degli oggetti e trovare l'oggetto con il peso minore tra di loro
//    - Creare un ciclo per confrotare il valore minimo con il peso minore delle proprietà degli oggetti nell'array 
//    e nel caso la proprietà degll'oggetto nell'array fosse minore del peso minore stampare quella

let lowerWeight = arrayObject[0];

for (let i = 0; i < arrayObjectLenght; i++) {
    if (arrayObject[i].peso < lowerWeight.peso) {
        lowerWeight = arrayObject[i];
        console.log(lowerWeight);
    }
}

console.log(lowerWeight);

// Nel caso ci fossero 2 o più bici con uguale peso 

let myArray = [];

for (let i = 0; i < arrayObjectLenght; i++){
    if(lowerWeight.peso === arrayObject[i].peso){
        myArray.push(arrayObject[i]);
    }
}
console.log(myArray);