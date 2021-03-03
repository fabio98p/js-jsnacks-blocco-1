console.log("funzia");

//inizializzo un array con una lista adi nomi
var list = ["gino", "pippo", "tizio", "caio", "sempronio"]
//chiedo al ospite il suo nome
var name = prompt("insert yout name", "gino")
//inizializzo l'observer che osservera e capira quando il nome verra trovato
var observer = false;

//creo un for che controlli tutti i nomi della lista
for (let i = 0; i < list.length; i++) {
	//controllo nome per nome con un if
	if(list[i] == name){
		observer = true;
		i = list.length;
	}
}

//controllo lo stato di observer per capire se il nome è stato trovato
if(observer){
	console.log("l'invitato puo entrare alla festa");
}
else{
	console.log("l'invitato non puo entrare alla festa");
}