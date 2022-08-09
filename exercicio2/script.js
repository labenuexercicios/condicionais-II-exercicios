let nacionalidade = prompt("Digite aqui a sua nacionalidade").toLowerCase();

switch(nacionalidade){
    case 'brasileira':
        console.log("Você é do Brasil!")
        break;
    case 'argentina':
        console.log("Você é da Argentina!")
        break;
    case 'uruguaia':
        console.log("Você é do Uruguai!")
        break;
    case 'chilena':
        console.log("Você é do Chile!")
        break;
    case 'colombiana':
        console.log("Você é da Colômbia!")
        break;
    default:
        console.log('Nacionalidade não encontrada.')                        
}