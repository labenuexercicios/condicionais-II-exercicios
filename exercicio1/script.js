console.log("teste 1")

const num1 = Number(prompt("Digite um número"))

if (num1 % 2 === 0){
    alert("O número é divisivel por 2")
}else if (num1 % 3 === 0){
    alert("O némero é divisilve por 3")
}else{
    alert("Dado inválido")
}

const num2 = Number(prompt("Digite outro número"))

if (num2 % 2 === 0 || num2 % 3 === 0 ){
    alert("O número é divisivel por 2 ou por 3")
} else {
    alert("O número não é divisivel por 2 nem por 3")
}
