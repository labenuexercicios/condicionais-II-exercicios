// código a ser reescrito

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


const nome = prompt ("qual o seu nome?").toLowerCase()

alert(
nome === "josé" ? "Oi, Zé" : " Hola " + nome)

/////////////////////////////////////////////////////////////////////////////////////////////////

const idade = +prompt("digite aqui sua idade!")

alert(
idade >= 18 ? "pode tirar carteira de motorista!" : "Ainda não pode tirar carteira de motorista")
