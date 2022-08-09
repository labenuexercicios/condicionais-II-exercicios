// Resolução Exercício 1

// a)

const num = Number(prompt("Informe um número que seja divisível por 2 ou por 3"))

if (num % 2 === 0){
    if(num % 3 === 0){
        console.log ("O número informado é divisível por 2 e por 3")
    } else {
        console.log ("O número informado é divisível por 2, mas NÃO é divisível por 3")
    }
} else if(num % 3 === 0) {
    console.log ("O número informado é divisível por 3, mas NÃO é divisível por 2")
} else {
    console.log ("O número informado NÃO é divisível por 2")
}



// b)

const num1 = Number(prompt("Informe um número que seja divisível por 2 ou por 3"))

if(num1 % 2 === 0 || num1 % 3 === 0){
    console.log ("O número informado é divisível por 2 ou por 3")
}else {
    console.log ("O número informado NÃO é divisível por 2 ou por 3")
}