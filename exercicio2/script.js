
let informePais2 = +(prompt('Informe seu pais \n 1 - Para Brasil \n 2 - Para Argentina \n 3 - Para Uruguai \n 4 - Para Chile \n 5 - Para Colombia'))
switch (informePais2) {
  case 1:
    alert(`Sua nacionalidade é brasileira`);
    break;
  case 2:
    alert(`Sua nacionalidade é argentina`);
    break;
  case 3:
    alert(`Sua nacionalidade é uruguaia`);
    break;
  case 4:
    alert(`Sua nacionalidade é chilena`);
    break;
  case 5:
    alert(`Sua nacionalidade é colombiana`);
    break;
  default:
    console.log('nacionalidade não encontrada');
    break;
}