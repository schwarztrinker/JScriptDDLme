var array = [];
var arrayPosition = 0;

for(var i = 0; i < 10000000; i++){
	if(subcats[i] == undefined){
		continue;
	}
	else{
	array[arrayPosition] = subcats[i].links["1fichier"]["0"][3]; 
	arrayPosition++;
	}
}

console.log(array);







