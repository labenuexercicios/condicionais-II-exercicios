





//Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    
//Faça isso:

const num = prompt('Digite um número aqui')

if (num % 2 === 0) {
    if (num % 3 === 0) {
        console.log('é divisivel por 2 e por 3')
    }
    else {
        console.log('divisivel só por 2')
    }
}
else{
    if(num%3 === 0){
        console.log('divisivel só por 3')
    }
    else if (num % 2 !== 0 || num % 3 !== 0){
        console.log('nao é divisivel por 2 ou por 3')
    }
}

//if (num % 2 !== 0 || num % 3 !== 0) {
    //console.log('O numero nao é divisivel por 2 e por 3 ao mesmo tempo')
//}else {
    //console.log('o numero é divisivel por 2 e 3')
//}


