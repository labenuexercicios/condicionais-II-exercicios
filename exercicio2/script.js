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
// let idadeDependente = prompt("Informe a idade do dependente")

//  if(idadeDependente >= 13){

//     if(idadeDependente >= 18){
//         console.log("Seu dependente já pode ter um cartão de credito próprio")
//     } else{
//        console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu")
//     }

// } else{
//     console.log("Consulte outras possibilidades do Labank")
// } 


// if(idadeDependente >= 13 && idadeDependente <= 17){
//     console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu")
// }else{
//     console.log("Consulte outras possibilidades do Labank")
// } 

// // TERNARIO

// idadeDependente === 13 ? console.log("A idade do dependente é 13 e já pode ter um cartão") : console.log("Consulte outras possibilidades do Labank") 

// //switch case

// let cartao = Number(prompt("Solicitação de cartão de credito. Escolha uma opção: \n 1- Fácil \n 2- Black \n 3- Platinum \n 4- Master Gold"))


// switch (cartao) {
//     case 1:
//         console.log("Cartão Fácil adquirido.")
//         break;
//     case 2:
//         console.log("Cartão Black adquirido.")
//         break;
//     case 3:
//         console.log("Cartão Platinum adquirido.")
//         break;
//     case 4:
//         console.log("Cartão Master Gold adquirido.")
//         break;
//     default:
//         console.log("Escolha uma das opções disponíveis")
// }

let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch (nacionalidade){
    case "brasileiro"&& "brasileira":
        console.log("A pessoa é do Brasil")
        break;
    case "argentino"&&"argentina":
        console.log("A pessoa é da Argentina")
        break;
    case "uruguaio":
        console.log("A pessoa é do Uruguai")
        break;
    case "chilena"&&"chileno":
        console.log("A pessoa é do Chile")
        break;
    case "colombiana"&&"colombiano":
        console.log("A pessoa é da Colômbia")
        break;
    default:
        console.log("Nacionalidade não encontrada")
}