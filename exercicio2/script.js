// Resolução do Exercício 2

let nacionalidade = prompt ("Escreva aqui sua nacionalidade")

switch (nacionalidade){
    case "Brasileira", "Brasileiro": 
        console.log ("A nacionalidade é:", nacionalidade)
        break;
    case "Argentina", "Argentino":
        console.log ("A nacionalidade é:", nacionalidade)
        break;
    case "Chilena", "Chileno":
        console.log ("A nacionalidade é:", nacionalidade)
        break;
    case "Colombiana", "Colombiano":
        console.log ("A nacionalidade é:", nacionalidade)
        break;
    case "Uruguaia", "Uruguaio":
        console.log ("A nacionalidade é:", nacionalidade)
        break;
    default:
        console.log ("Nacionalidade não encontrada")
}