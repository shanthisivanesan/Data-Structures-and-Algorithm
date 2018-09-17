//get the max chars of any char from this string
//Hello Shanthi

function maxchars(str){
	//debugger;
	const chars={};
	let max=0;
	let maxChar ='';
	for(let char of str)
		if (chars[char])
			chars[char]=chars[char]+ 1;
		else 
			chars[char]=1;

	for(let char in chars){
		if(chars[char]>max){
			max=chars[char];
			maxChar = char;
		}
	}
	document.getElementById("result").innerHTML= str + " </br> Max Char: " + maxChar + 
													   " </br> # of occurences:"+max;

}
//maxchars("hello Shanthi")

