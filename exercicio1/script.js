// const num = +prompt('insira um numero')

const num = +prompt('Escolha um número')

// Questão 01
if(num){
  console.log(num%2 === 0? 'O número é divisivel por 2' : '')
  if(num % 3 === 0) {
    console.log('O número é divisivel por 3')
  }
}

// Questão 02
if(num % 2 === 0 || num % 3 === 0) {
  console.log(num%2===0? 'Esse número é divisível por 2.':'')
  console.log(num%3===0? 'Esse número é divisível por 3.':'')
}