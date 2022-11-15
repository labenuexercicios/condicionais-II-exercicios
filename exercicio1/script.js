//CONDICIONAIS II - EXERCÍCIO 1
//UTILIZANDO IF'S ANINHADOS
let numDiv = Number(prompt('Insira um número:'))

if (numDiv % 2 === 0){
    console.log('o número é divisível por 2.')

    if(numDiv % 3 === 0){
        console.log('O número é divisível por 2 e por 3.')
    }else{
        console.log('O número só é divisível por 2.')
    }
}else{
    console.log('O número não é divisível por 2 e nem por 3.')
}

//UTILIZANDO OPERADORES LÓGICOS PARA UNIR OPERAÇÕES
let numDivDois = Number(prompt('Insira um número:'))

if(numDivDois % 2 === 0 || numDivDois % 3 === 0){
    console.log('O número é divisível por 2 OU por 3.')
}else{
    console.log('O número não é divisível nem por 2 e nem por 3.')
}




