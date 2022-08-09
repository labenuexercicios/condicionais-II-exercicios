let nacionalidade = prompt("Digite aqui sua nacionalidade").toLowerCase();

switch(nacionalidade){
    case "brasileira":
        console.log("Nacionalidade brasileira")
        break;
    case "argentina":
        console.log("Nacionalidade argentina")
        break;
    case "uruguaia":
        console.log("Nacionalidade uruguaia")
        break;
    case "chilena":
        console.log("Nacionalidade chilena")
        break;
    case "colombiana":
        console.log("Nacionalidade colombiana")
        break;
    default:
        console.log("Nacionalidade não encontrada")
}