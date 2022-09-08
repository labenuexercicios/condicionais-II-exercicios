let nacionalidade = prompt("Qual sua nacionalidade?").toLowerCase();

// if(nacionalidade === "brasileira"){
//     console.log("Você nasceu no BRASIL")
// } else if (nacionalidade === "argentina"){
//     console.log("Você nasceu na ARGENTINA")
// } else if (nacionalidade === "uruguaia"){
//     console.log("Você nasceu no URUGUAI")
// } else if (nacionalidade === "chilena"){
//     console.log("Você nasceu no CHILE")
// } else if (nacionalidade === "colombiana"){
//     console.log("Você nasceu na COLÔMBIA")
// } else {
//     console.log("Nacionalidade não identificada")
// }

switch (nacionalidade) {
    case "brasileira":
        console.log("Você nasceu no BRASIL")
        break
    case "argentina":
        console.log("Você nasceu na ARGENTINA")
        break
    case "uruguaia":
        console.log("Você nasceu no URUGUAI")
        break
    case "chilena":
        console.log("Você nasceu no CHILE")
        break
    case "colombiana":
        console.log("Você nasceu na COLÔMBIA")
        break
    default:
        console.log("Nacionalidade não identificada")
}