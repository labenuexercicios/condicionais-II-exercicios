const num = +prompt("Insira um numero");

if( num % 2 === 0 ) {
    if( num % 3 === 0 ) {
        console.log(`${num} é divisível 2 ou 3`)
    }
}

if( num % 2 === 0 || num % 3 === 0 ) {
    console.log(`${num} é divisível por 2 ou 3`)
}

