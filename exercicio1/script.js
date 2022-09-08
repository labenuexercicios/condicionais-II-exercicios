const numero = Number(prompt('Insira um número'))

// A)
if(numero % 2 === 0){
    console.log (numero + ' é divisivel por 2') 
    if(numero % 3 === 0){
        console.log (numero + ' é divisivel por 2 e por 3')
    } 
} else if(numero % 3 === 0){
        console.log (numero + ' é divisivel por 3')
} else {
    console.log('Não é divisivel por 2 OU 3')
}

// MANEIRA SIMPLES, PORÉM SEM 2 IFS, FOGE DO QUE PEDE ENUNCIADO 
// if(numero % 2 === 0){                                               
//     console.log (numero + ' é divisivel por 2') 
// } else if(numero % 3 === 0){
//     console.log (numero + ' é divisivel por 3')
// } else {
//     console.log('Não é divisivel por 2 OU 3')
// }


// B)
if(numero % 2 === 0 || numero % 3 === 0){
    console.log('Este número é divisivel por 2 OU 3')
} else {
    console.log('Não é divisivel por 2 OU 3') }
