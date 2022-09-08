const num = +prompt("Qual é seu número?")

if (num % 2 === 0) {
    if (num % 3 === 0) {
        console.log("O número é divisivel por 2 ou 3!")
    }
    else {
        console.log("O número é divisivel por 2 ou 3!")
    }
}
else {
    if (num % 3 === 0) {
        console.log("O número é divisivel por 2 ou 3!!")
    }
    else {
        console.log("Não é divisivel por 2 ou por 3!")
    }
}

//Com operador lógico
if ((num % 2 === 0) || (num % 3 === 0)) {
    console.log("O número é divisivel por 2 ou 3!!")
}
else {
    console.log("Não é divisivel por 2 ou por 3!")
}