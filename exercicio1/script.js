let numero = prompt("digite um numero.")

if(numero %2 === 0){
    if(numero %3 === 0){
        console.log("é divisivel por 2 ou 3")

    }
    else{
        console.log("é divisivel somente por 2")
    }
}
else{
    if(numero %3 === 0){
        console.log("é divisivel somente por 3")
    }
    else{
        console.log("Não é divisivel por 2 e 3")
    }
}

// if(nummero %2 === 0 || numero %3 === 0){
//     console.log("é divisivel por 2 OU 3")