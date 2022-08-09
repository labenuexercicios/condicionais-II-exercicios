let nome = prompt(`Qual seu nome?`);
let idade = Number(prompt(`Qual sua idade?`));

if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+ nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}
 idade >= 18  && idade ? console.log(`${nome}, pode tirar carteira de motorista!`) : console.log(`${nome}, Ainda não pode tirar carteira de motorista`)