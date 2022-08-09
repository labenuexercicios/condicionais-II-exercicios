const num = Number(prompt("COLOQUE ALGUM NÚMERO AQUI"))

if (num) {
    if (num % 3 === 0) { console.log("Divisível por 3"); }
    if (num % 3 !== 0) { console.log("Não é divisível por 3"); }
    if (num % 2 === 0) { console.log("Divisível por 2"); }
    if (num % 2 !== 0) { console.log("Não é divisível por 2"); }
} else { console.log('não encontrado, tente um número'); }


// if (num%2=== 0 || num%3=== 0) {
//     console.log('Este número é divisível por 3 OU 2 .');
//     if (num%3 === 0) console.log("divisível por 3")
//     if (num%2 === 0) console.log("divisível por 2")
// } else { console.log('Tente outro número.'); }


