// Reescreva os códigos do arquivo script.js utilizando o if ternário.
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


// c ? e1 : e2
let nome = prompt('Qual seu nome?');
nome === 'José' ? console.log("Oi, Zé!") : console.log("Olá, " + nome);

let idade = Number(prompt('Qual a sua idade?'));
idade >= 18 ? console.log('Pode tirar a carteira de motorista!') : console.log('Ainda não pode tirar carterira de motorista!');
