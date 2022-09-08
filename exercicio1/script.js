const num = +prompt("Digite um numero")

if (num % 2 === 0){
    console.log("É divisivel por 2")
}
if (num % 3 === 0){
    console.log("É divisivel por 3")
}

console.log (num % 2 === 0 || num % 3 === 0 ? "É divisivel por 2 ou por 3" : "Não é divisivel por 2 ou 3")