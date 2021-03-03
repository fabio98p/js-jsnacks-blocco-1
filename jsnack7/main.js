console.log("funzia");

//avvio un array dove conservare le potenze
var array = []
//metto un for con limite massimo 1000 e che moltiplichi ogni volta per 2
for (var i = 1; i < 1000; i = i*2) {
	array.push(i)
}
//stampo l'array
console.log(array);