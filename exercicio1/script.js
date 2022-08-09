const numero = +prompt('Digite um numero divisivel por 2 ou por 3')

//com ifs aninhados

if(numero % 2 === 0){
    console.log('O numero é divisivel por 2')
if(numero % 3 === 0){
    console.log('O numero é divisivel por 3')}
}else{
    console.log('O numero não é divisivel por 2 ou por 3')
}

//com operadores logicos

if(numero % 2 === 0 || numero % 3 === 0){
    console.log('O numero é divisivel por 2 ou por 3')}
else{
    console.log('O numero não é divisivel por 2 ou por 3')
}