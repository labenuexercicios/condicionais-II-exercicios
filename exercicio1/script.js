let numeroDivisivel = Number (prompt('Digite um número aqui'))

//ifs aninhados

if (numeroDivisivel%2===0){
    if (numeroDivisivel%3===0){
        console.log('Esse número é dívisivel por 2 e por 3');
    }
}else {
    console.log('Esse número não é dívisivel por 2 e por 3');
}

//utilizando operadores lógicos

if (numeroDivisivel%2===0 && numeroDivisivel%3===0) {
    console.log('Esse número é dívisivel por 2 e por 3');
}else {
    console.log('Esse número não é dívisivel por 2 e por 3');
}
