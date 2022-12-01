const nome = prompt("Qual o seu nome?");//código a ser reescrito
const idade = +(prompt("Qual sua idade?"));

if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}



console.log(nome, idade)