const num = +(prompt("Digite um numero!"))

// 1 divisivel por 2 e por 3 - Aninhados

if(num%2 === 0){
    if(num%3 === 0){
        console.log("o numero", num, "é divisivel por 2 e 3!")
    }   else {
        console.log("o numero", num, "é divivel por 2!")
    }
} else {
    if (num % 3 === 0){
    console.log("o numero", num, "é divisivel por 3")
} else{
    console.log("o numero", num, "nao é divisivel por 2 e nem por 3!")
}
}

//2 
if(num%2 === 0 && num%3 === 0){
    console.log("o numero", num, "é divido por 2 ou 3!")
    if(num%2 === 0){
    console.log("o numero", num, "é divido por 2!")
} else{
    if(num%3 === 0){
        console.log("o numero", num, "é divisivel por 3!")
    }
}
} else{
    console.log("o numero", num, " nao é divisivel por 2 e 3!")
}
