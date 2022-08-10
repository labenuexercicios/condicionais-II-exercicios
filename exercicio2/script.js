
let nacionalidade = prompt("qual a sua nacionalidade?").toLowerCase();

switch(nacionalidade){
	case 'brasileiro':
		console.log("você é do Brasil!");
		break;
	case 'argentino':
		console.log("você é da Argentina!");
		break;
	case 'uruguaio':
		console.log("você é do Uruguai!");
		break;
	case 'chileno':
		console.log("você é do Chile!");
		break;
	case 'colombiana':
        console.log("você é da Colômbia!");
    default:
		console.log("nacionalidade não encontrada")
}