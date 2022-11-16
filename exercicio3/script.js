//código a ser reescrito
/* # Exercício 3

Reescreva os códigos do arquivo script.js utilizando o if ternário.

**Relembrando o if ternário**
```jsx
condição ? expr1 : expr2
```

Onde :

`condição` é uma expressão que é avaliada como `true` ou `false`.

`expr1`, `expr2` são xpressões com valores de qualquer tipo. */

let nome = prompt('digite seu nome').toLowerCase()
let idade = prompt('qual sua idade?')+0
if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}

nome=="josé"? console.log("Oi, Zé!"):console.log("Olá, "+nome)
idade>=18? console.log("pode tirar carteira de motorista!"):console.log("Ainda não pode tirar carteira de motorista")
