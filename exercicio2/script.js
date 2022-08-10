let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

/*if(nacionalidade === "brasileira"){
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
*/

switch(nacionalidade){
    case "brasileira": 
    case  "brasileiro":
        console.log("Você é brasileiro")
    break;
    case "argentina":
    case "argentino":
        console.log("Você é argentino")
    break;
    case "urugaio":
    case "urugaia":
        console.log("Você é uruguaio")
    break;
    case "chileno":
    case "chilena":
        console.log("Você é chileno")
    break;
    case "colombiano":
    case "colombiana":
        console.log("Você é colombiana")
    break;
    default:
    console.log("nacionalidade não encontrada")
}



