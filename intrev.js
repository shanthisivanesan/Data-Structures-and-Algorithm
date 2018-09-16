
//15=51

function intrev(n) {
    //debugger;
    const rev = n.toString()
                .split('')
                .reverse()
                .join('');
    document.getElementById("demo").value = parseInt(rev)* Math.sign(n);
}
//intrev(15)

function intrevneg(n) {
    //debugger;
     rev = n.toString()
                .split('')
                .reverse()
                .join('');
    if (n<0)
        rev = parseInt(rev) * -1;
        
    document.getElementById("demo").value =rev;
}

//intrevneg(-15);

    

