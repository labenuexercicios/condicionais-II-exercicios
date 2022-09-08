// exercício 1 //

let num = 6;

if (num % 2 === 0) {
  if (num % 3 === 0) {
    console.log('É divisível por 3 e por 2');
  } else console.log('É divisível APENAS por 2');
} else {
  console.log('É divisível APENAS por 3');
}

// // exercício 2 //

if (num % 2 === 0 && num % 3 === 0) {
  console.log('O número é divisível por ambos!');
}

// // // exercício 2 b //

if (num % 2 === 0 || num % 3 === 0) {
  console.log('O número é divisível por dois OU três!');
}
