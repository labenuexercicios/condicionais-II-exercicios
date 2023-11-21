function exercicioA(numero){
if (numero % 2 === 0) {
    console.log("O número é divisível por 2.");
} else {
    if (numero % 3 === 0) {
        console.log("O número é divisível por 3.");
    } else {
        console.log("O número não é divisível por 2 nem por 3.");
    }
}
}
const pergunta = prompt("Digite um numero:")
const converter = Number(pergunta)
exercicioA(converter)