//Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
const num = +prompt("Digite um numero")

//1. Utilizando ifs aninhados
if (num % 2 === 0){
    console.log("É divisivel por 2")
}
if (num % 3 === 0){
    console.log("É divisivel por 3")
}

// Utilizando um operador lógico para unir duas operações relacionais
console.log (num % 2 === 0 || num % 3 === 0 ? "É divisivel por 2 ou por 3" : "Não é divisivel por 2 ou 3")