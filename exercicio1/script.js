
// Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3

// Faça isso:

// 1. Utilizando ifs aninhados

const num = Number(prompt("Favor inserir um número para sabermos se é divisivel por 2 ou 3, obrigado."))

if (num % 2 === 0) {
    if (num % 3 === 0) {
        console.log("O número divisivel.")
    }
}
else {
    console.log("O número não é divisivel.")
}



// 2. Utilizando um operador lógico para unir duas operações relacionais

//     if(expressao && expressao){ //&& para E
//     //expressao || expressao para OU     

    
    num === num%3 === 0 && num%2 === 0 ? console.log("O número é divisilvel") : console.log("O número não é divisivel")

    num === Number(40) ? console.log("ACERTEI") : console.log("não foi dessa vez :(")

