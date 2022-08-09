let nacionalidade = String(prompt("digite aqui a nacionalidade")).toLowerCase();

switch(nacionalidade)  {
    case "brasileira":
    console.log("a pessoa é do Brasil!")
    break;
    case "argentina":
    console.log("a pessoa é do Argentina!")
    break;

    case "uruguaia":
    console.log("a pessoa é do Uruguai!")
    break;

    case "chilena":
    console.log("a pessoa é do Chile!")
    break;

    case "colombiana":
    console.log("a pessoa é do Colômbia!")
    break;

    default:
    console.log("nacionalidade não encontrada")
}