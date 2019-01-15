var array = [];
var arrayPosition = 0;
var links1fichier  = 0; 
var linksShareOnline = 0; 

for(var i = 0; i < 10000000; i++){
	if(subcats[i] == undefined){
		continue;
	}
	else{
		//try 1fichier Link
		try{
			array[arrayPosition] = subcats[i].links["1fichier"]["0"][3]; 
			arrayPosition++;
			links1fichier++;
		}
		catch(err){
			//try Share-Online Link
			try{
				array[arrayPosition] = subcats[i].links["Share-online"]["0"][3];
				arrayPosition++; 
				linksShareOnline++;
			}
			catch(err){
				//try Oboom
				try{
					array[arrayPosition] = subcats[i].links["Oboom"]["0"][3];
					arrayPosition++; 
					other++;
				}
				catch(err){
					//Try Uploadrocket
					try{
					array[arrayPosition] = subcats[i].links["Uploadrocket"]["0"][3];
					arrayPosition++; 
					other++;
					}
					catch(err){
								console.log("no link found for S" + subcats[i].info["staffel"] + "E" + subcats[i].info["nr"] + ". Look for other links manually!");
							}
				}
			}
		}
	}
}
console.log(links1fichier + " 1fichier links added");
console.log(linksShareOnline + " Share-online links added");
console.log(linksShareOnline + " other links added")
console.log(array);







