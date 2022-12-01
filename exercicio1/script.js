const num = +(prompt("Digite um número"));

if(num % 2 === 0){
    alert ("O número é divisivel por 2")
}else if(num % 3 === 0){
    alert("O número é divisivel por 3")
}else{
    alert("dado inválido")
}

const num2 = +(prompt("Digite um número"));
if(num2 % 2 === 0 || num2 % 3 === 0){
    alert("O número é divisivel por 2 ou por 3")
}else{
    alert("O número não é divisivel por 2 e nem por 3")
}