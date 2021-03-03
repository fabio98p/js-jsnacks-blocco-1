console.log("funzia");

//chiedo un numero di 4 cifre e un arrey dove verra scomposta la stringa di numeri
var number = prompt("inserisci un numero di 4 cifre", "1234");
var array = number.split("");
var somma = 0;

//inizializzo il for che fa tanti cicli quanto è lunga la stringa
for (let i = 0; i < array.length; i++) {
	//sommo a somma tutti i singoli valori di array
	somma += parseInt(array[i]);
}
//visualizzo il risultato di somma
console.log(somma);