// Crie um código que receba um número por prompt e verifique se um número é divisível por 2 ou por 3
const num = Number(prompt('Digite um número:'));

// Utilizando ifs aninhados
if(num % 2 === 0){
    if(num % 3 === 0){
        console.log('Seu número é divisível por 2 e por 3.');
    }else{
        console.log('Seu número não é divisível por 2 e por 3.');
    }
}

// Utilizando um operador lógico para unir duas operações relacionais
if(num % 2 === 0 && num % 3 === 0){
    console.log('Seu número é divisível por 2 e por 3.');
}else{
    console.log('Seu número não é divisível por 2 e por 3.');
}