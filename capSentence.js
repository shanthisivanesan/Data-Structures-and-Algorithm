//get the arrayChunks in the array
//Hello Shanthi

function capSentence(str){
	//debugger;
	const words =[];
	for(let word of str.split(' ')){
		words.push(word[0].toUpperCase() + word.slice(1));
	}
	
	document.getElementById("result").innerHTML= "orginal: " + str +
													   " </br> caps:"+words.join(' ');
}
//capSentence('shanthi google')

function capsLeft(str){
	//debugger;
	let result = str[0].toUpperCase();
	for (let i=1; i< str.length; i++) {
		if(str[i-1]===' '){
			result += str[i].toUpperCase();
		}
		else
		{
			result +=str[i];
		}
	}
	document.getElementById("result").innerHTML= "orginal: " + str +
	" </br> caps:"+result;
}
			
//capsLeft('shanthi facebook')

