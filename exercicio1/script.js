/* Crie um código que receba um número por **prompt** e verifique se esse número é divisível por 2 **ou** por 3. */

let numero = prompt("Digite um número")

if (numero % 2 === 0) {
    if (numero % 3 === 0) {
            alert("Número é divisivel por 3 e por 2")
    } else {
        alert("Não é divisível por 3, só por 2!")
    }
       
 } else if(numero % 3 === 0) {
            alert("Número é divisível por 3, mas não por 2!")
           } else{
            alert("Número não é divisível nem por 2 nem por 3!")
           }
            
 

 //b)

function verificarDivisao (numero){
    if(numero % 2 === 0 || numero % 3 === 0){
        console.log("Número é divisivel")
    } else {
        console.log("Não é divisível")
    }
}
verificarDivisao(numero)

//talvez tenha feito pela metade


