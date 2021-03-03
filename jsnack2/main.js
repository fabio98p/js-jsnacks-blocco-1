console.log("funzia");

//chiedo all'utente di inserire 2 parole
var word1 = prompt("insert one word", "gino")
var word2 = prompt("insert one more word", "gianni")

//creo un if che capisca quale parola è piu lunga o piu corta e le scrivo in sequenza
if(word1.length > word2.length){
	console.log(word2, word1);
}
else{
	console.log(word1, word2);
}