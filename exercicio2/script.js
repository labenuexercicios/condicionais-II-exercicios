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
let nacionalidade = +prompt('solicitação de cartão de crédito *\n Digite a opção desejada: \n 1-Brasileira \n 2- argentina \n 3- uruguaia \n 4- chilena \n 5-colombiana ')
switch(nacionalidade){
    case 1:
        alert('A pessoa e do Brasil')
        break;
        case 2:
            alert('A pessoa é da Argentina');
            break;
        case 3:
            alert('A pessoa e de Uruguai')
            break;
        case 4:
            alert('A peeoa e do chile')
            break;
        case 5:
            alert('A pessoa e da colombia')
            break;
        default:
            console.log('Nacionalidade não encontrada')
}