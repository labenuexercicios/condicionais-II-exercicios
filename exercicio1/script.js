//EXERCÍCIO 1
//Crie um código que receba um número por prompt e verifique se um número é divisível por 2 ou por 3

//Faça isso:

//1. Utilizando ifs aninhados
//    if(expressao){
//        if(expressao){
//
//        }
//    }


//2. Utilizando um operador lógico para unir duas operações relacionais
//    if(expressao && expressao){ //&& para E
//    //expressao || expressao para OU     
//    
//    }
//

const idade = prompt("Digite a sua idade:") 


if(idade % 2){
    console.log("A idade", idade, "é divisível por 2.")
    if(idade % 3){
        console.log("A idade", idade, "é divisível por 3.")

    }
}


if(idade % 2 || idade % 3){ 
    console.log("A idade", idade, "é divisível por 2 ou 3")
    
    }


