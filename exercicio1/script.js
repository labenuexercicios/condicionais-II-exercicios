const numero = Number(prompt("Escolha um número: "));


//1. Utilizando ifs aninhados
if(numero % 2 === 0){
    if (numero % 3 === 0) {
        console.log("O numero escolhido é divisivel por 2 e 3, parabéns!")
    } else {
        console.log("Tente novamente...")
    }
}  else {
    console.log("Tente novamente...")
}

//2. Utilizando um operador lógico para unir duas operações relacionais
if(numero % 2 === 0 && numero % 3 ===0) {
    console.log("O numero escolhido é divisivel por 2 e 3, parabéns!")
} else {
    console.log("Tente novamente...")
}
