//códigos a serem reescritos
/* condição ? expr1 : expr2
```

Em que:

`condição` é uma expressão que é avaliada como `true` ou `false`

`expr1` e `expr2` são expressões com valores de qualquer tipo */
// a)
/* if(nome === "José"){
	console.log("Oi, Zé!")
} else {
	console.log("Olá, " + nome)
} */
let nome = prompt("Digite seu nome")
nome === "José" ? console.log("Oi, Zé!") : console.log(`Olá, ${nome}`)

// b)
/* if(idade >= 18){
	console.log("Pode tirar carteira de motorista!")
} else {
	console.log("Ainda não pode tirar carteira de motorista!")
}
 */
let idade = prompt("Qual a sua idade?")

idade >= 18 ? console.log("Pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista!")