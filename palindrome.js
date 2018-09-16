
//Fib ==bif
//shanthi ==ihtnahs
function palindrome(str) {
    //debugger;
    rev = str.split('').reverse().join('');
   if  (str==rev)
        document.getElementById("demo").value = str+ " is a palindrome";
   else
        document.getElementById("demo").value = str+ " is not a palindrome";
}
//palindrome("malayalam")
//every helper function
function palindromehelper(str) {
    debugger;
    if(str.split('').every((char,i)=>{return char === str[str.length -i-1];}))
        document.getElementById("demo").value = str+ " is a palindrome";
    else
        document.getElementById("demo").value = str+ " is not a palindrome";
 }

 palindromehelper("malayalam") 

    

