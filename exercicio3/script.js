//código a ser reescrito

let nome = (prompt("Qual é o seu nome?")).toLowerCase()
let idade = (prompt("Qual é a sua idade?"))

console.log(nome === "josé" ? ("Oi, Zé!") : (`Oi, ${nome}`) )

console.log(idade >=18 ? ("Você pode tirar a carteira de motorista!") : ("Você ainda não pode tirar a carteira de motorista."))