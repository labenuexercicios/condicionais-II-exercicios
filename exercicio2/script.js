// # Exercício 2

// Recrie o exercício 3 da aula anterior (A012) de condicionais I, utilizando switch-case. No arquivo `script,js` existe uma versão do código já escrita, mas você pode colar o exercício que você fez na última prática!



// let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }

let nacionalidade = (prompt("Digite aqui a nacionalidade.").toLowerCase())

switch (nacionalidade) {
    case "brasileira":
        console.log("brasileira")
        break;
    case "argentina":
        console.log("argentina")
        break;
    case "uruguaia":
        console.log("uruguaia")
        break;
    case "chilena":
        console.log("chilena")
        break;
    case "colombiana":
        console.log("colombiana")
        break;
        default:
        console.log("Nacionalidade não encontrada.")
        
}