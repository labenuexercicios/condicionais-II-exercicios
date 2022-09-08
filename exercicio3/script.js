const nome = prompt("Digite seu nome:").toLowerCase();
const idade = Number(prompt("Digite a sua idade:"));

console.log(nome === "josé" ? "Oi, Zé!" : "Olá, " + nome[0].toUpperCase() + nome.substring(1));
console.log(idade >= 18 ? "Você pode tirar carteira de motorista!" : "Você ainda não pode tirar carteira de motorista");


//código a ser reescrito

// if (nome === "José") {
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, " + nome);
// }

// if (idade >= 18) {
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }