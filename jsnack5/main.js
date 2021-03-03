console.log("funzia");

//creo un array vuoto
var array = [];
var number = 0

//creo un for con 6 cicli
for (var i = 0; i < 6; i++) {
	//chiedo al utente di scrivere un numero *6 cicli
	number = prompt("inserisci un numero", "1");
	//se il numero dispari allora entra nell'if e scrive il numero
	if(number%2){
		array.push(number);
	}
}
//stampo l'array
console.log(array);