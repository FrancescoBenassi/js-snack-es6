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
    peso: 80,
}]
console.log(arrayObject);

// 2) Creare una variabile con la lunghezza dell'array

const arrayObjectLenght = arrayObject.length;

// 3) Confrontare i vari pesi degli oggetti e trovare l'oggetto con il peso minore tra di loro

lowerWeight = Math.min(arrayObject[0].peso, arrayObject[1].peso, arrayObject[2].peso, arrayObject[3].peso);
console.log(lowerWeight);

// 4) Creare un ciclo per confrotare il valore minimo con il peso minore delle proprità degli oggetti nell'array 
// e nel caso si dovessero egugliare stampare in console le proprità di quello oggetto

for (let i = 0; i < arrayObject.length; i++) {
    if (lowerWeight === arrayObject[i].peso) {
        console.log(arrayObject[i]);
    }
}


