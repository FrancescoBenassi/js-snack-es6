// 1) Creare un array con dei valori all'interno

const city = ["Roma", "Napoli", "Firenze", "Milano", "Cesena", "Trento", "Assisi", "Bolzano", "Bergamo", "Piacenza", "Reggio nell'Emilia"];


// Variabili per creare number 1 e number 2 random

const numberRandomToProve1 = randomNumber();
console.log(numberRandomToProve1);
const numberRandomToProve2 = randomNumber();
console.log(numberRandomToProve2);

// 2) Variabile per invocare la funzione con tre argomenti (city, number1, number1)

let newCity = result(city, numberRandomToProve1, numberRandomToProve2);
console.log(newCity);

/* 3) Creare una funzione per stampare i vari elemnti compresi tra i 2 numeri
    - Creare una funzione con tre 3 argomenti
    - Creare una variabile con un array dove pushare i risultati vuoti
    - Creare all'interno della funzione un if per differenziare il valore dei 2 numeri (number1 < number2, number2 < number1)
    - Creare all'interno del if un ciclo compreso tra i 2 numeri
    - Pushare i valori tra i 2 numeri nell'array vuoto creato in precedenza
    - Return il valore dell'array creato all'interno della funzione */

function result(city, number1, number2) {

    let resultCity = [];

    // Ciclo da utilizzare nel caso number2 fosse sempre maggiore di a

    for (let i = number1; i <= number2; i++) {
        resultCity.push(city[i]);
        console.log(resultCity);
    }

    //Ciclo da utilizzare nel caso number1 fosse maggiore di b

    if (number2 < number1) {
        for (let i = number2; i <= number1; i++) {
            resultCity.push(city[i]);
            console.log(resultCity);
        }
    }

    return resultCity;
}

// Funzione per creare numeri random da mettere in number1 e number 2

function randomNumber() {
    let numberRandom = Math.floor(Math.random() * (city.length - 1 + 1));
    return numberRandom;
}