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
    
//     }
// ```



// const num = Number(prompt("Insira um número que seja divisível por 2 e por 3:"))

// if(num %2 === 0){
//     if(num %3 === 0){
//         alert("Seu número é divisível por 2 e por 3")
//     }
// }else{
//     alert("Tente outro número")
// }

const num = Number(prompt("Insira um número que seja divisível por 2 ou por 3:"))
if(num %2 === 0 || num %3 === 0){
    alert("Seu número é divisível por 2 ou por 3")
}else{
    alert("Tente outro número")
}