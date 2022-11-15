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


// console.log("teste 3")

//CONDICIONAIS II - EXERCÍCIO 3
//IF TERNÁRIO
const nomeUsuario = prompt('Insira o seu nome:').toLowerCase();
let idadeUsuario = Number(prompt('Insira a sua idade:'));

nomeUsuario === 'lucas' ? 
	console.log('Olá, Lucas!')
	: 
	console.log('Olá,', nomeUsuario);

idadeUsuario >= 18 ? 
	console.log('Pode tirar carteira de motorista!') 
	: 
	console.log('Ainda não pode tirar carteira de motorista.');

