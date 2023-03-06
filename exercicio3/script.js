//código a ser reescrito

/*if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}

console.log("teste 3")
*/

let nome = prompt("Digite seu nome").toLowerCase()

nome === "jose" ? console.log("Oi,Zé!") : console.log("Olá,", nome)

let idade = Number(prompt("Digite sua idade"))

idade >= 18 ? console.log("Pode tirar carteira de motorista") : console.log("Não pode tirar carteira de motorista")
