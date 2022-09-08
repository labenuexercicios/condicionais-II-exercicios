let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch (nacionalidade) {
    case "brasileira":
        console.log("A pessoa é do Brasil!");
        break;
    case "argentina":
        console.log("A pessoa é da Argentina!");
        break;
    case "uruguaia":
        console.log("A pessoa é do Uruguai!");
        break;
    case "chilena":
        console.log("A pessoa é do Chile!");
        break;
    case "colombiana":
        console.log("A pessoa é do Colômbia!");
        break;
    default: console.log("Nacionalidade não encontrada!")
        break;
}
