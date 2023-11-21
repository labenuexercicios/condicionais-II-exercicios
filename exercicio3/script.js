//códigos a serem reescritos

// a)
const nome = "José"
console.log(nome === "José" ? "Oi, Zé!" : "Olá, " + nome)


// b)
//if(idade >= 18){
//	console.log("Pode tirar carteira de motorista!")
//} else {
//	console.log("Ainda não pode tirar carteira de motorista!")
//}

// b)
const idade = prompt("Qual sua idade?")
const idadeNum = Number(idade)
	console.log(idadeNum >=18 ? "Pode tirar carteira de motorista!":"Ainda não pode tirar carteira de motorista!")
