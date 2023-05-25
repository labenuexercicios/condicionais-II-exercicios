//exercicio 1


// parte A)

// let numero = Number(prompt(`Digite um número:`))

// if(numero % 2 ===0){
//     console.log(`O numero ${numero} é divisível por 2`)
//     if(numero % 3 === 0){
//         console.log(`O numero ${numero} é divisível por 2 e por 3`)
//     } else{
//         console.log(`O numero ${numero} é divisível por 2 e não por 3`)
//     }
// }else{
//     console.log(`O numero ${numero} não é divisível por 2`)
// }

// parte B)

let numero = Number(prompt(`Digite um número:`))

if(numero % 2 === 0 && numero % 3 === 0){
    console.log(`O numero ${numero} é divisível por 2 e por 3`)
}else{
    console.log(`O numero ${numero} não é divisível por 2 e por 3`)
}

if(numero % 2 === 0 || numero % 3 === 0){
    console.log(`O numero ${numero} é divisível por 2 ou por 3`)
}else{
    console.log(`O numero ${numero} não é divisível por 2 ou por 3`)
}

