//Crie um código que receba um número por **prompt**:

const num = Number(prompt("Digite um número, por favor."))

//verifique se um número é divisível por 2 **ou** por 3:
//1. Utilizando ifs aninhados:

if(num % 2 === 0){
    console.log("é um número divisível por 2.")
    if(num % 3 === 0){
        console.log("é um número divisível por 3.")
    }else{
        console.log(" Não é um número divisível por 3.")
    } 
}else{
    console.log("Não é um número divisível por 2.")
}    
    
if(num % 3 === 0){
    console.log("é um número divisível por 3.")
}else{
    console.log("Não é um número divisível por 3.")
}

//2. Utilizando um operador lógico para unir duas operações relacionais:

if( num % 2 === 0 || num % 3 === 0){
    console.log("o número é divisível por 2 ou por 3.")
}else{
    console.log("Não é um número divisível por 2 ou por 3.")

}