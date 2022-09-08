const num = Number(prompt("Digite um numero"))

//1
 if(num%2===0){
    console.log("Seu numero é divisivel por 2");
    if(num%3===0){
        console.log("Seu numero é divisivel por 3");
    }
} 

//2
if (num%2===0 || num%3===0) {
    console.log("Seu numero é divisivel por 2 ou 3");
}

