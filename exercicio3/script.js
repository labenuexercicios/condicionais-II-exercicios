//código a ser reescrito

const nome = prompt('Qual seu nome?')

console.log(nome === 'José'? 'Oi, Zé!': `Olá, ${nome}`)



// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

const idade = +prompt('Qual sua idade?')
console.log(idade>=18? 'Pode tirar carta de motorista!':'Ainda não pode tirar carta de motorista')