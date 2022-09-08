let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch (nacionalidade) {
  case "brasileira":
    console.log("A pessoa é do Brasil!");
    break;
  case "argentina":
    console.log("A pessoa é da Argentina!");
    break;
  case "uruguaia":
    console.log("A pessoa é Uruguaia!");
    break;
  case "chilena":
    console.log("A pessoa é do Chile!");
    break;
  case "colombiana":
    console.log("A pessoa é da Colômbia!");
    break;
  default:
    console.log("Nacionalidade não encontrada.");
}
