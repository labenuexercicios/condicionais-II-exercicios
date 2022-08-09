let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();
const nacionalidadeSliced = nacionalidade.slice(0, -1); // mais simples
// const nacionalidadeSliced = nacionalidade.slice(0, nacionalidade.length - 1)


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

switch(nacionalidadeSliced) {
    case 'brasileir':
        console.log("a pessoa é do Brasil!");
        break;
    case 'argentin':
        console.log("a pessoa é da Argentina!");
        break;
    case 'uruguai':
        console.log("a pessoa é do Uruguai!");
        break;
    case 'chilen':
        console.log("a pessoa é do Chile!");
        break;
    case 'colombian':
        console.log("a pessoa é da Colômbia!");
        break;
    default:
        console.log("nacionalidade não encontrada");
}