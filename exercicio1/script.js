const valorrecebido = +(prompt("Digite um número"))

if(valorrecebido % 2 === 0){
    console.log("É divisivel por 2")
    if(valorrecebido % 3 === 0){
        console.log("É divisivel por 2 e 3")
    }
}

if(valorrecebido % 2 === 0 || valorrecebido % 3 === 0){
    console.log("É divisivel por 2 ou por 3.")
}