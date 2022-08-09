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

let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch (nacionalidade){
    case "brasileiro"&& "brasileira":
        Alert("A pessoa é do Brasil")
        break;
    case "argentino"&&"argentina":
        Alert("A pessoa é da Argentina")
        break;
    case "uruguaio":
        Alert("A pessoa é do Uruguai")
        break;
    case "chilena"&&"chileno":
        Alert("A pessoa é do Chile")
        break;
    case "colombiana"&&"colombiano":
        Alert("A pessoa é da Colômbia")
        break;
    default:
        Alert("Nacionalidade não encontrada")
}