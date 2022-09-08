// let nacionalidade = prompt('digite aqui a nacionalidade').toLowerCase();

// if (nacionalidade === 'brasileira') {
//   console.log('a pessoa é do Brasil!');
// } else if (nacionalidade === 'argentina') {
//   console.log('a pessoa é da Argentina!');
// } else if (nacionalidade === 'uruguaia') {
//   console.log('a pessoa é do Uruguai!');
// } else if (nacionalidade === 'chilena') {
//   console.log('a pessoa é do Chile!');
// } else if (nacionalidade === 'colombiana') {
//   console.log('a pessoa é da Colômbia!');
// } else {
//   console.log('nacionalidade não encontrada');
// }

let nacionalidade = prompt('digite aqui a nacionalidade').toLowerCase();

switch (nacionalidade) {
  case 'brasileira':
    console.log('A pessoa é do brasil');
    break;
  case 'argentina':
    console.log('A pessoa é do argentina');
    break;
  case 'uruguaia':
    console.log('A pessoa é do Uruguai');
    break;
  case 'colombiana':
    console.log('A pessoa é da colombia');
    break;
  case 'chilena':
    console.log('A pessoa é do Chile');
    break;

  default:
    console.log('A pessoa é de NENHUM LUGAR!');
    break;
}
