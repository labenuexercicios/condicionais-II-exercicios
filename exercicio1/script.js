const num = +prompt('Escolha um número')

// Questão1
if(num){
    console.log(num%2 === 0? 'O número é divisivel por 2' : '')
    if(num % 3 === 0) {
      console.log('O número é divisivel por 3')
    }
  }

// Questão2
  if(num % 2 === 0 || num % 3 === 0) {
    console.log(num%2===0? 'Esse número é divisível por 2.':'Esse número é divisível por 3.')
    console.log(num%3===0? 'Esse número é divisível por 3.':'')
  }
