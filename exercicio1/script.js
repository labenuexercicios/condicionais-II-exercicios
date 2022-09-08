// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    
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
    

const numero = Number(prompt('Insira um número'))

if(numero % 2 === 0){
    console.log (numero + ' é divisivel por 2') 
    if(numero % 3 === 0){
        console.log (numero + ' é divisivel por 3')
    } 
} else if(numero % 3 === 0){
        console.log (numero + ' é divisivel por 3')
} else {
    console.log('Número primo')
}


if(numero % 2 === 0){
    console.log (numero + ' é divisivel por 2') 
} else if(numero % 3 === 0){
    console.log (numero + ' é divisivel por 3')
} else {
    console.log('Número primo')
}



if(numero % 2 === 0 || numero % 3 === 0){
    console.log('Este número é divisivel por 2 OU 3')
} else {
    console.log('Este número é primo') }
