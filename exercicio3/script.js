let nome = prompt("Qual é seu nome?").toLowerCase()

console.log(nome === "josé" ? "Oi, Zé" : `Olá, ${nome}!`)

let idade = prompt("Qual é sua idade?")

console.log(idade >= 18 ? "Oi, pode tirar carteira de motorista!" : "Olá, ainda não pode tirar carteira de motorista!")