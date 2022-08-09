//código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

let nome = prompt('Digite seu nome')

console.log(nome === "jose" ? "Oi,Ze" : "OI" + nome)

let idade = +prompt("Digite sua idade");

console.log(
	idade>= 18
	?"Pode tirar carteira de motorista"
	: "Ainda não pode tirar carteira de motorista"
);