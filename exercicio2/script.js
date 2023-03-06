let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()

switch (nacionalidade) {
    case 'brasileira':
    case 'brasileiro':
        console.log(`A pessoa é do Brasil`);
        break;
    case 'argentina':
    case 'argentino':
        console.log(`A pessoa é da Argentina`);
        break;
    case 'uruguaia':
    case 'uruguaio':
        console.log(`A pessoa é do Uruguai`);
        break;
    case 'chilena':
    case 'chileno':
        console.log(`A pessoa é do Chile`);
        break;
    case 'colombiana':
    case 'colombiano':
        console.log(`A pessoa é da Colombia`);
        break;
    default:
        console.log(`Digite uma nacionalidade do MercoSul`);
        break;
}
