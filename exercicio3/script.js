//códigos a serem reescritos

// a)
/*if(nome === "José"){
	console.log("Oi, Zé!")
} else {
	console.log("Olá, " + nome)
}*/
let nome = 'José'
let verificaNome = nome === 'José'? ("Oi, Zé!") : ("Olá, fulano, digite seu nome" ) 
console.log(verificaNome);
// b)
	// if(idade >= 18){
	// 	console.log("Pode tirar carteira de motorista!")
	// } else {
	// 	console.log("Ainda não pode tirar carteira de motorista!")
	// }
	console.log('-------------------');
	let idade = 20
	let verificaIdade = idade >= 18 ? console.log("Pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista!")
	console.log(verificaIdade); 