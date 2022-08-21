const num = +prompt('Escolha um número')

  if(num % 2 === 0 || num % 3 === 0) {
    console.log(num%2===0? 'Esse número é divisível por 2.':'')
    console.log(num%3===0? 'Esse número é divisível por 3.':'')
  }