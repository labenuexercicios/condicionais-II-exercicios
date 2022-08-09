const num =Number(prompt('Insira um numero:'))

// if(num % 2 === 0){
//     if(num % 3 === 0){
//       console.log('Esse numero é divisivel por 2 e 3.')
//     }else{
//         console.log('Esse número não é divisível por 2 e 3.')
//     }
// }else{
//     console.log('Esse número não é divisível por 2 e 3.')
// }
// operador logico
if(num % 2 === 0 && num % 3 === 0){
    console.log("Esse numero é divisivel por 2 e 3.")
}else{
    console.log('Esse numero não é divisivel por 2 e 3.')
}
