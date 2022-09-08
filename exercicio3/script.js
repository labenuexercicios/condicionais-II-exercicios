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

const name = prompt("Digite seu nome")
name === "José" ? console.log("Oi, Zé!") : console.log("Olá, "+ name +".")

const age = Number(prompt("Digite sua idade"))
age >= 18 ? console.log("Pode tirar a carteira de motorista.") : console.log("Não pode tirar a carteira de motorista.")