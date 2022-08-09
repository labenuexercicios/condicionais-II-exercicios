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

const nome =prompt("Qual o seu nome?")
const idade=Number(prompt('Qual sua idade?'))

console.log(nome==="José"? 'Oi, Zé!' : 'Olá,'+ nome);

console.log(idade>=18 ? "Você já pode tirar a carteira de motorista!":'Você ainda não pode tirar a carteira de motorista.')