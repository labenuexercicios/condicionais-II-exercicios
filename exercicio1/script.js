const numero = prompt('digite um numero')-0

if(numero%2==0){
    console.log('numero divisivel por 2 ')
    if(numero%3==0){
        console.log('numero divisivel por 3')}
}else{
    console.log('o numero não é divisivel por 2 nem por 3')
}
if(numero%2==0||numero%3==0){
    console.log('numero divisivel por 2 ')
}else{
    console.log('o numero não é divisivel por 2 nem por 3')
}