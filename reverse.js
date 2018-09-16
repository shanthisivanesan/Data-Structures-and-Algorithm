
//Fib ==bif
//shanthi ==ihtnahs
function reversebuiltin(str) {
    //debugger;
   document.getElementById("demo").innerHTML = str.split('').reverse().join('');
}
//reversebuiltin("shanthi")
//for loop
function reverseforloop(str) {
     let reversed ='';
     for(let character of str){
       // debugger;
         reversed = character + reversed
     }
    document.getElementById("demo").innerHTML = reversed;
 }
 //reverseforloop(str) 
//reduce helper function
function reverseReduce(str) {
   // debugger;
    document.getElementById("demo").innerHTML = str.split('').reduce((rev,char)=> char+ rev
   );
}
//reverseReduce(str)
    

