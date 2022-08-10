//código a ser reescrito
/*  let nome1 = prompt("qual o seu nome?")
 if(nome1 === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome1);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista"); 
}*/


//A)
let nome = prompt ("QUAL SEU NOME?") 
nome === "José" ? console.log("Oi, Zé!") : console.log("Olá,", nome);
	
//B)
const idade = +prompt("Qual a sua idade?")
idade>=18 ? console.log("Você pode tirar a carteira de motorista!") : console.log("Você ainda não pode tirar a carteira de motorista!"); 


//const ifter = false ? "if ter, true" : "if ter, false";
//console.log(ifter);