//get the arrayChunks in the array
//Hello Shanthi

function chunk(arr,size){
	//debugger;
	const chunked= [];
	for(let element of arr)
	{
		const last=chunked[chunked.length -1];
		if(!last || last.length===size)
			chunked.push([element]);
		else
			last.push(element);
	document.getElementById("result").innerHTML= arr + " </br> Size: " +  size +
													   " </br> # of occurences:"+chunked;
	}
}
//chunk([1,2,3,4,5],2)

function chunkSlice(arr,size){
	debugger;
	const chunked =[];
	let index=0;
	while(index<arr.length)
	{
		chunked.push(arr.slice(index,index+size))
		index+=size;
	}
	document.getElementById("result").innerHTML= arr + " </br> Size: " +  size +
	" </br> # of occurences:"+chunked;
}
			
chunkSlice([1,2,3,4,5],2)

