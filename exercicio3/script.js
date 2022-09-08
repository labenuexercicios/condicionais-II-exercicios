//código a ser reescrito

let nome = prompt("qual seu nome?")
let idade = +(prompt("qual sua idade?"))


/*if(nome ==="José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}*/

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}

idade >= 18 ? console.log(nome, "pode tirar a carteira de motorista"): "Ainda nao pode tirar a carteira de motorista"