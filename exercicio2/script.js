// # Exercício 2

// Recrie o exercício 3 da aula anterior (A012) de condicionais I, utilizando switch-case. No arquivo `script,js` existe uma versão do código já escrita, mas você pode colar o exercício que você fez na última prática!




let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch(nacionalidade){
    case "brasileira":
        alert("a pessoa é do Brasil!");
        break;

    case "argentina":
        alert("a pessoa é da Argentina!");
        break;

    case "uruguaia": 
        alert("a pessoa é do Uruguai!");
        break;
    
    case "chilena": 
        alert("a pessoa é do Chile!");
        break;

    case "colombiana": 
        alert("a pessoa é da Colômbia!");
        break;

    default:
        alert("Nacionalidade não encontrada")
}