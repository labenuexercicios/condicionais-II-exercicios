// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
// Faça isso:
    
// 1. Utilizando ifs aninhados
//  ```jsx
//      if(expressao){
//          if(expressao){

//         }
//      }
//  ```
    

const num = Number(prompt("Digite um número:"))

if(num % 2 === 0){
    if(num % 3 === 0){
        console.log("Número divisível por 2 e por 3.")
    }
    else {
        console.log("Número é divisível por 2 e não por 3.")
    }
}
else{
    console.log("Número não é divisível por 2.")
}

// 2. Utilizando um operador lógico para unir duas operações relacionais
// ```jsx
//     if(expressao && expressao){ //&& para E
//     //expressao || expressao para OU     
    
//     }
// ```

if(num % 2 === 0 && num % 3 === 0){
    console.log("Número divisível por 2 e por 3.")
} else if(num % 2 === 0 || num % 2 === 0){
    console.log("Número é divisível por 2 ou por 3.")
} else { 
    console.log("Número não é divisível por 2 nem por 3.")
}