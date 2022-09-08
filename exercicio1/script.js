const num = +prompt("Insira um número")

if (num % 2 === 0) { 
    console.log("Esse número é disivível por 2")
    if (num % 3 === 0)
        console.log("Esse número é divisível por 2 e por 3")
} else {
    console.log("Esse número não é divisível por 2")
    if (num % 3 === 0) {
        console.log("Esse número é divisivel por 3")
    } else {
        console.log ("Esse número não é divisível")
    }
}

// if (num %2 === 0 || num % 3 ===0 ) {
//     console.log("O número é divisivel por 2 ou por 3")
//     } else {
//         console.log ("O número não é divisível por 2 nem por 3")
//     }
