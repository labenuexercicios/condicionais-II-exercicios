const num = Number(prompt("Informe um número"))

if(num%2 == 0){
    if(num%3 == 0){
        console.log(num + "é divisível por 3");
    } else {
        console.log(num + "não é divisível por 3");
    }
    console.log(num + "é divisível por 2");
} else {
    console.log(num + "não é divisível por 2");
}

 


if(num%2 == 0 || num%3 == 0){ 
    console.log(num + "é divisível por 2 ou por 3");    
}
