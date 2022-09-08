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

let nome = prompt ("Digite seu nome")
console.log (nome === "jose".toLocaleLowerCase() ? 'Olá Zé' : 'Você não é o Zé')

let idade = prompt ("Quantos anos você tem?")
console.log (idade >=18 ? "Você pode tirar carteira de motorista" : "Ainda não pode tirar sua CNH")