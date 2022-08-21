const nacionalidade = Number(prompt("Qual sua nacionalidade? \n Digite a opção desejada: \n \n 1-Brasileira \n 2-Argentina \n 3-Uruguaia \n 4-Chilena \n 5-Colombiana"))

switch(nacionalidade){
    case 1:
        console.log("A pessoa é do Brasil!")
        break;
    case 2:
        console.log("A pessoa é da Argentina!")
        break;
    case 3:
        console.log("A pessoa é do Uruguai!")
        break;
    case 4:
        console.log("A pessoa é do Chile!")
        break;
    case 5:
        console.log("A pessoa é da Colômbia!")
        break;
    default:
        console.log("Nacionalidade não encontrada")
}