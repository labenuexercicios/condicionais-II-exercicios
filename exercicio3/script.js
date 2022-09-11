//EXERCÍCIO 3
//Reescreva os códigos do arquivo script.js utilizando o if ternário.

//Relembrando o if ternário
//condição ? expr1 : expr2
//Onde :
//condição é uma expressão que é avaliada como true ou false.
//expr1, expr2 são xpressões com valores de qualquer tipo.
//código a ser reescrito

//criando a minha variável
const nome = prompt("Digite seu nome")

//código do exercício
if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

//if ternário
(nome ? "Oi, Zé!" : "Olá, "+ nome)


//criando a minha variável
const idade = prompt("Digite sua idade.") 

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}

//if ternário
(idade ? "pode tirar carteira de motorista!" : "Ainda não pode tirar carteira de motorista")

