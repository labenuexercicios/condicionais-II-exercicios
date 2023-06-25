// s
// let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()
let nacionalidade = 'chilena'
switch (nacionalidade.toLocaleLowerCase()) {
    case 'brasileira':
        console.log('A pessoa é do Brasil!')
        break;
    case 'argentina':
        console.log('A pessoa é da Argentina!')
        break;
    case 'uruguaia':
        console.log('A pessoa é do Uruguai!')
        break;
    case 'chilena':
        console.log('A pessoa é do Chile!')
        break;
    case 'colombiana':
        console.log('A pessoa é da Colômbia!')
        break;
    default:
        console.log('Nacionalidade desconhecida!')
        break;
}
