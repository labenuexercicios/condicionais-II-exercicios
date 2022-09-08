const num = Number(prompt("Digite um Número"))


// 1)
if (num % 2 === 0) {
    console.log("É divisivel por 2!");
}
else {
    if (num % 3 === 0) {
        console.log("É divisível por 3!");
    }
    else {
        console.log("Não é divisível nem por 2 e nem por 3!");
    }
}

// 2) 
if (num % 2 === 0 || num % 3 === 0) {
    console.log("O número é divisível por 2 ou por 3!")
} else {
    console.log("O número NÃO é divisível por 2 ou por 3!")
}




