let num = Number(prompt("Digite um número qualquer:"))

if(num % 2 === 0){
    console.log('Este número é divisível por 2')
} else {
    console.log('Este número não é divisível por 2')

}if(num % 3 === 0){
    console.log('Este número é divisível por 3')
    }
    else {
        console.log('Este número não é divisível por 3')
    
}

if(num % 2 === 0 || num % 3 === 0){
    console.log('Este número é divisível tanto por 2, quanto por 3')
}else {
    console.log('Este número não é divisível por 2 e nem por 3')}