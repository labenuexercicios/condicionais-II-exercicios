const num = Number(prompt(`Digite um número:`));


//Utilizando ifs aninhados:
/* if(num % 2 === 0){
    if(num % 3 === 0){
        console.log(`O número ${num} é divisivel por 2 ou 3.`);
    }else{
        console.log(`O número ${num} é divisivel por 2 porém nao é por 3.`);
    }
}else{
    console.log(`O número ${num} nao é divisiel por 2.`);
}; */

//Utilizando operadores lógicos:
if(num % 2 === 0 || num % 3 === 0){
    console.log(`O número ${num} é divisivel por 2 ou 3.`);
}else{
    console.log(`O número ${num} não é divisivel por 2 nem 3.`);
};


