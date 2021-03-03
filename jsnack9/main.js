console.log("funzia");

//inizializzo le variabili del caso
var number = prompt("inserisci un numero", "10")
var media = 0
var somma = 0
//faccio la somma
for (let i = 1; i <= number; i++) {
	somma += i	
}
//calcola la media
media = somma/number
//scrive i risultati
console.log(somma, media);