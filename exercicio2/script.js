/* let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}

console.log("teste 2") */
const nacionalidade = prompt(`Escreva aqui sua nacionalidade:`).toLowerCase()

const pergunta = (nacionalidade) => {
    switch(nacionalidade){
        case "brasileira" :
            return `Você é Brasileira`
        break;
        case "argentina":
            return `Você é Argentina`
        break;

        case "uruguaia":
            return `Você é Uruguaia` 
        break;

        case "chilena":
            return `Você é Chilena`
        break;

        case "colombiana":
            return `Você é Colombiana`
        break;

        default:
            return `Nacionalidade não encontrada.`
    };
};

console.log(pergunta(nacionalidade))
