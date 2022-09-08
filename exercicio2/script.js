//Recrie o exercício 3 da aula anterior (A012) de condicionais I, utilizando switch-case. No arquivo `script,js` existe uma versão do código já escrita, mas você pode colar o exercício que você fez na última prática!


const nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch(nacionalidade){
	case "brasileira":        
        alert('Que pena, você é do: ' + 'Brasil :/')
		break;
    case "argentina":        
        alert('Você é da: ' + 'Argentina!')
        break;
    case "uruguaia":        
        alert('Você é do: ' + 'Uruguai!')
        break;
    case "chilena":        
        alert('Você é do: ' + 'Chile!')
        break;
    case "colombiana":        
        alert('Você é da: ' + 'Colômbia!')
        break;
    default:
        alert('Você é um Alien!!!')
}



