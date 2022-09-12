
// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se um número é 
// divisível por 2 **ou** por 3
    
// Faça isso:
    
// 1. Utilizando ifs aninhados
// ```jsx
//     if(expressao){
//         if(expressao){

//         }
//     }
// ```
// 2. Utilizando um operador lógico para unir duas operações relacionais
// ```jsx
//     if(expressao && expressao){ //&& para E
//     //expressao || expressao para OU     
    
//     }
// ```

const num = Number(prompt("Digite um número aqui"))

    if(num % 2 === 0) {
        console.log("o número é divisível por 2")
    } if (num % 3 === 0) {
            console.log("divisível por 3")
        }
else {
    console.log("esse número é primo")
}   


// EX 02 UMA TENTATIVA
if ((num % 3 === 0 || num % 2 === 0) && (num % 2 === 0)) {
    console.log("É divisível por 2 usando o operador OU")
        if ((num % 3 === 0 || num % 2 === 0) && (num % 3 === 0)) {
            console.log("É divisível por 3 usando o operador OU")
                } else {
                    console.log("É divisível por 2")
                }
} else if ((num % 3 === 0 || num % 2 === 0) && (num % 3 === 0)) {
    console.log("É divisível por 3 usando o operador OU")
} else {
    console.log("Número primo")
}

//EX 02 OUTRA TENTATIVA
// if (num > 0){
//     if ((num % 3 === 0) || (num % 2 ===0)) {
//         console.log("esse número é divisível por 2 ou 3 no op lógico")
//     }
//         else {
//             console.log("esse número não é divisível por 2 ou 3 no op lógico")
//         }
// }
