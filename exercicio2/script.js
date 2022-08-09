
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


let nacionalidade = prompt('Digite sua nacionalidade aqui!')

switch(nacionalidade) {
    case 'Brasileiro':
        console.log('Seja bem vindo! Ficamos felizes em saber que você é Brasileiro');
        break;
    case 'Brasileira':
        console.log('Seja bem vinda! Ficamos felizes em saber que você é Brasileira');
        break;
    case 'Argentino':
        console.log('Seja bem vindo! Ficamos felizes em saber que você é Argentino');
        break;
    case 'Argentina':
        console.log('Seja bem vinda! Ficamos felizes em saber que você é Argentina');
        break;
    case 'Uruguaio':
        console.log('Seja bem vindo! Ficamos felizes em saber que você é Uruguaio');
        break;
    case 'Uruguaia':
        console.log('Seja bem vinda! Ficamos felizes em saber que você é Uruguaia');
        break;
    case 'Chileno':
        console.log('Seja bem vindo! Ficamos felizes em saber que você é Chileno');
        break;
    case 'Chilena':
        console.log('Seja bem vinda! Ficamos felizes em saber que você é Chilhena');
        break;
    case 'Colombiano':
        console.log('Seja bem vindo! Ficamos felizes em saber que você é Colombiano');
        break;
    case 'Colombina':
        console.log('Seja bem vinda! Ficamos felizes em saber que você é Colombiana');
    default:
        console.log('Infelizmente, sua nacionalidade não foi encontrada :/');
}