let nacionalidade = prompt("Qual sua nacioncionalidade?").toLowerCase();

/*
if (nacionalidade == 'brasileira'||nacionalidade == 'brasileiro') {
    console.log(`Você é ${nacionalidade}`);
} else if (nacionalidade === 'uruguaia' || nacionalidade === 'uruguaio'){
    console.log(`Você é ${nacionalidade}`);
} else if (nacionalidade==='chilena' || nacionalidade === 'chileno'){
    console.log (`Você é ${nacionalidade}`);
} else if (nacionalidade === 'colombiana' || nacionalidade === 'colombiano'){
    console.log (`Você é ${nacionalidade}`);
}else{
    alert("Nacionalidade não encontrada");
} */

switch (nacionalidade) {
    case 'brasileira' || 'brasileiro':
        console.log(`Você é ${nacionalidade}`);
        break;
    case 'uruguaia' || 'uruguaio':
        console.log(`Você é ${nacionalidade}`);
        break;
    case 'chilena' || 'chileno':
        console.log(`Você é ${nacionalidade}`);
        break;
    case 'colombiana' || 'colombiano':
        console.log(`Você é ${nacionalidade}`);
        break;
    default:
        alert("Nacionalidade não encontrada");
}
