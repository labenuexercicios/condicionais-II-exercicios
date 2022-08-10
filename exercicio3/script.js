//código a ser reescrito
let nome = prompt("digite seu nome ")
if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}
/*
if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}
*/
let idade = Number(prompt("qual é a sua idade "))

idade >=18 ? console.log("voce pode tirar carteira de motorista") 
: console.log("ainda nao pode tirar carteira de motorista")