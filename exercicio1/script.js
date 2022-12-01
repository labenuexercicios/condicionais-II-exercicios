

let numero = parseInt(prompt("Digite um número"));

if (numero % 2 === 0){
    console.log("o número é divisível por 2");
    if (numero % 3 === 0){
        console.log("o número é divisível por 3");
    }else{
        console.log("o número não é divisível por 3 ");
    }
    if (numero % 2 === 0 && numero % 3 === 0){
        console.log("o número é divisível por 2 e por 3");
    } 
    else{
        console.log("o número não é divisível por 2 e por 3");
    }
  } else{
    console.log("o número não é divisível por 2");
}

/*
const numero = parseInt(prompt("digite um número")) 

if(numero % 2 === 0){
    if(numero % 3 === 0){
    console.log(`O número ${numero} é divisível por 2 e por 3`)
  }else {
    console.log(`O número ${numero} é divisível por 2`)}
}
else if(numero % 3 === 0){
    console.log(`O número ${numero} é divisível por 3`)
}else{
    console.log(`O número ${numero} não é divisível por 2 e por 3`)}
*/



//////////////////////////////////////////////////////////////////
/*
let numero1 = parseInt(prompt("Digite um número"));

    if(numero1 % 2 === 0 && numero1 % 3 === 0){
        console.log("O número é dividido por 2 e 3");
}
    else if(numero1 % 2 === 0){
        console.log(`O número ${numero1} é dividido por 2`);
}
else if(numero1 % 3 === 0){
    console.log(`O número ${numero1} é dividido por 3`);
}
else{
    console.log(`O número ${numero1} não é dividido nem por 2, nem por 3`);
}
*/





