

// # Exercício 1
// Crie um código que receba um número por **prompt** e 
// verifique se um número é divisível por 2 **ou** por 3:
    
const num = Number (prompt("Digite um número"));

//1. Utilizando ifs aninhados
//2. Utilizando um operador lógico para unir duas operações relacionais
if (num % 2 === 0 || num % 3 === 0){
    
    if (num % 2 === 0 && num % 3 === 0){
        console.log("É divisivel por 2 e por 3");
    }else if (num % 2 === 0){
        console.log("É divisivel por 2");
    }else {
        console.log("É divisivel por 3");
    }

}else {
    console.log("Não é divisivel nem por 2 ou 3");
}


