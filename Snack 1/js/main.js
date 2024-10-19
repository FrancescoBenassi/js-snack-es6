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

// 2) Confrontare i vari pesi degli oggetti e trovare l'oggetto con il peso minore tra di loro

const lowerWeight = Math.min(arrayObject[0].peso, arrayObject[1].peso, arrayObject[2].peso, arrayObject[3].peso);
console.log(lowerWeight);