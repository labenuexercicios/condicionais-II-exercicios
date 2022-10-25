const num = Number(prompt("Digite um número:"));

// Fazendo a verificação por meio de if's alinhados 

if (num % 2 === 0) {
    if (num % 3 === 0) {
        console.log(`O número ${num} é divisível por 2 e por 3!`)
    } else {
        console.log(`O número ${num} é divisível por 2`)
    }
}

else {
    console.log(`O número ${num} não é divisível por 2`)
}

// fazendo a verificação por meio de operador lógico

(num % 2 === 0 && num % 3 === 0) ? console.log(`O número ${num} é divisível por 2 e por 3!`) : console.log(`O número ${num} não é divisível por 2 e por 3!`);

