console.log("funzia");

//inizializzo una variabile "somma"
var somma = 0;
//creo un for che mi chieda 10 volte di inserire un numero
for(var i=0; i < 10; i++){
	//sommo ogni numero inserito nella variabile somma non prima di aver modificato la stringa in un numero
	somma += parseInt(prompt("insert a number", "1"));
}
//scrivo il risultato
console.log(somma);