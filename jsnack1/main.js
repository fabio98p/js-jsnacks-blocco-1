console.log("funzia");

//chiedo al utente di inserire 2 numeri
var number1 = parseInt(prompt("insert a number", "1"));
var number2 = parseInt(prompt("insert a another number", "1"));

//creo l'if che capisce quale numero è maggiore e lo stampa
if(number1 > number2){
	console.log(number1);
}
else{
	console.log(number2);
}