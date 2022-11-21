/* # Exercício 1

Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    
Faça isso:
    
1. Utilizando ifs aninhados
```jsx
    if(expressao){
        if(expressao){

        }
    }
```
2. Utilizando um operador lógico para unir duas operações relacionais
```jsx
    if(expressao && expressao){ //&& para E
    //expressao || expressao para OU     
    
    }
```


 */

// 1


const numDivisivel = prompt('Insira um número')

/* if (numDivisivel % 2 === 0) {
    console.log('O número é divisivel por 2')
}if(numDivisivel % 3 === 0){
    console.log('O número é divisivel por 3');
}else{
    console.log('O número não é divisivel nem por 2 nem por 3');
} */

if (numDivisivel % 2 === 0 || numDivisivel % 3 === 0) {
    if (numDivisivel % 2 === 0) {
        console.log('o numero é divisivel por 2')
    } else if (numDivisivel % 3 === 0) {
        console.log('o numero é divisivel por 3')
    }
    
}

