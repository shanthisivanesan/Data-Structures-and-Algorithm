//get the arrayChunks in the array
//Hello Shanthi

function anagrams(stra,strb){
	//debugger;
	isAnagram = true;
	const aCharMap=buildCharMap(stra);
	const bCharMap=buildCharMap(strb);
	if(Object.keys(aCharMap).length!=Object.keys(bCharMap).length)
		isAnagram= false;

	for(let char in aCharMap)
	{
		if(aCharMap[char]!=bCharMap[char])
			isAnagram= false;
	}
	if (isAnagram)
		document.getElementById("result").innerHTML= "String a: "+ stra + "  String b: " +  stra + " </br> are Anangrams";
	else
		document.getElementById("result").innerHTML= "String a: "+ stra + "  String b: " +  stra + " </br> are not Anangrams";
}
//chunk([1,2,3,4,5],2)


function buildCharMap(str)
{
	const charMap ={};
	for(let char of str.replace(/[^\w]/g,''.toLowerCase()))
	{
		charMap[char]=charMap[char]+1||1;
	}
	return charMap;
}
			
//chunkSlice([1,2,3,4,5],2)

