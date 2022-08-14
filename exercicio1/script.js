/*const num = Number(prompt('Digite um número'))

//if aninhado

if(num % 2 === 0){
    console.log('Esse número é divisivel por 2');
if(num % 3 === 0){
    console.log('Esse número é divisivel por 3');
}
}else{
    console.log('Esse número não é divisisel por 2 ou 3');
}*/

//operador lógico

const num = Number(prompt('Digite um número'))

if(num % 2 === 0 && num % 3 === 0){
    console.log('Esse número é divisivel por 2 e 3');
}else{
    console.log('Esse número não é divisiel por 2 e 3');
}