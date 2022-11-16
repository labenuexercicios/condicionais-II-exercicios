//código a ser reescrito
const nome = prompt(`Escreva seu nome:`)
const idade = Number(prompt(`Escreva sua idade:`))

/* if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
} */

nome === "José" ? 
	console.log(`Oi, Zé!`) : 
	console.log(`Ola, ${nome}`); 


	/* if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
} */
idade >= 18 ?
	console.log(`Pode tirar carteira de motorista!`) :
	console.log(`Ainda não pode tirar carteira de motorista.`);


