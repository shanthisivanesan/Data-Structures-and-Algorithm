
//Multiples of 3- fizz, 5-buzz and 3 & 5 -fizzbuzz
//3- fizz
//5-buzz
//15-fizzbuzz
function fizzbuzz(n) {
  str="";
     for(i=1;i<=n;i++){
        debugger;
        //multiple of 3 and 5
        if ((i %  3===0 ) && (i %  5===0))
            str= str + i + " - FizzBuzz" + "<br />" 
        //multiple of 3
        else if(i % 3==0)
            str= str + i+ " - Fizz" + "<br />" 
        //multiple of 5
        else if(i %  5==0)
            str=str + i+ " -  Buzz" + "<br />" 
        //else, do nothing
        else 
            str = str + i  + "<br />" 
           
          
     }
    document.getElementById("demo").innerHTML = str;
 }

fizzbuzz(15)
    

