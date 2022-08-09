
let num = Number(prompt("Digite aqui o seu numero:"))

if (num %2 === 0){
    console.log("O numero digitado é divisel por 2.")
}
else if (num %3 === 0){
    console.log("O numero digitado é divisel por 3.")
}

else{
    console.log("O numero não é divisivel nem por 2 nem por 3 ")
}

if (num %2 === 0 || num %3 === 0){
    console.log("O numero digitado é divisivel por dois ou tres")
}