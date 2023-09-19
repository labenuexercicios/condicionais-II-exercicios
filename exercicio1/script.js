// # Exercício 1
// Crie um código que receba um número por **prompt** e verifique se esse número é divisível por 2 **ou** por 3.

let numDiv = +(prompt('informe um número para ser divisível') )    
    if (numDiv % 2 === 0) {
       if (numDiv % 3 === 0) {
        alert('esse número é divisivel por 2 e por 3');
       } else {
        alert('esse número é divisivel por 2 mas não divisivel por 3');
       }
          
    } else {
    
        if (numDiv % 3 === 0) {
          alert('esse número é divisivel por 3');
        }
        else {
            alert('esse número não é divisivel por 3 nem por 2')
        }
    }

//**b)** Utilizando um operador lógico para unir duas operações relacionais
console.log('---------------');
    if((numDiv % 2 === 0) && (numDiv % 3 === 0)){
        alert('Esse número é divisivel por 2 e 3')    
    } else {
        ('Esse número não é divisivel por 2 e por 3')
    }

     if((numDiv % 2 === 0) || (numDiv % 3 === 0)){
        alert('Esse número é divisivel por II e por III')
     } else {
        alert('Esse número não é divisivel por II e por III')
    }
