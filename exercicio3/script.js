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




const nome = prompt("digite seu nome:").toLowerCase()

nome === "jose" ? console.log("Oi ze"):console.log("oi,",nome)

const idade= Number(prompt("digite sua idade:"))

idade > 17? console.log("pode tirar carteira de motorista!"): console.log("Ainda não pode tirar carteira de motorista")