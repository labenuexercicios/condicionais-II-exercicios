//Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3

const num = Number(prompt("Digite um número"));

// ---- if aninhado

if (num % 2 === 0){
    if (num % 3 === 0){
        console.log("Este numero é divisível por 2 e 3")
    } else { 
        console.log("Este numero é divisível por 2")
    }

} else if (num % 3 === 0){
   console.log("Este numero é divisível por 3")

} else {
    console.log("Este numero NÃO é divisível por 2 nem por 3")
}

// ---- operador logico

if(num % 2 === 0 || num % 3 ===0) {
    console.log("Este numero é divisível por 2 ou 3")

    if (num % 2 === 0 && num % 3 ===0){
        console.log("Nesse caso, por ambos.")
    } else if (num % 2 === 0){ 
        console.log("Nesse caso, só por 2")
    } else if (num % 3 === 0){ 
        console.log("Nesse caso, só por 3")
    }
} else {
    console.log("Este numero NÃO é divisível por 2 nem por 3")
}

