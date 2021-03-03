console.log("funzia");

//inserisci di quanti numeri vuoi fare il cubo
var nNumber = prompt("inserisci di quanti numeri vuoi fare il cubo", "10");

var number = 1;
var array = [];
for (let i = 0; i < nNumber; i++) {
	array.push(number*number*number);
	number +=1;
}

console.log(array);