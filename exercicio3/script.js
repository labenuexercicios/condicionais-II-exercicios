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
}*/


const nome = prompt('Informe seu nome')
const idade = prompt('Informe sua idade')

console.log(nome === 'jose'?  'Oi, Zé!' : 'Olá ' + nome)
console.log(idade >= 18? 'Você pode tirar a carteira de motorista' : 'Você ainda não pode tirar a carteira de motorista')