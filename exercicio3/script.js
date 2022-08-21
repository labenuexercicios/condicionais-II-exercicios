const nome = prompt("Qual é seu nome?")
const idade = Number(prompt("Qual sua idade?"))

console.log(nome === "José"? "Oi Zé" : "Olá " + nome);
console.log(idade >= 18? "Pode tirar carteira de motorista!" : "Ainda não pode tirar carteira de motorista");