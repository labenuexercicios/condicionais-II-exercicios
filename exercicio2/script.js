let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

/*if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}*/

switch(nacionalidade){
    case 'brasileiro': case 'brasileira':
        alert('Nacionalidade brasileira')
        break;
    case 'argentno': case 'argentina':
        alert('Nacionalidade argentina')
        break;
    case 'uruguaio': case 'uruguaia':
        alert('Nacionalidade uruguaia')
        break;
    case 'chileno': case 'chilena':
            alert('Nacionalidade chilena')
            break;
    case 'colombiano': case 'colombiana':
        alert('Nacionalidade colombiana')
        break;
    default:
            alert('Nacionalidade desconhecida')
}
    
