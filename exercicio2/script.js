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
}*/

switch(nacionalidade){
    case "brasileira" :
        console.log("você é brasileiro!")
        break
    case "argentina" :
        console.log("você é argentino!")
        break
    case "uruguaia" :
        console.log("você é uruguaio!")
        break
    case "chilena" :
        console.log("você é chileno!")
        break
    case "colombiana" :
        console.log("você é colombiano!")
        break
    default:
        console.log("nenhuma nacionalidade encontrada!")
}