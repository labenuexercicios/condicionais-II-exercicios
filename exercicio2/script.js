/* Crie uma estrutura com o **switch case** que verifique se a nacionalidade recebida é igual a alguma das nacionalidades acima. Caso seja, imprima a nacionalidade no console.
O programa deve imprimir "nacionalidade não encontrada" caso o valor de nacionalidade não corresponda a nenhum das opções acima. */

let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()

function  verificarNacionalidadeDois (nacionalidade) {
/* if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!")
}  */
        switch(nacionalidade){
            case "brasileira" :
                console.log("a pessoa é do Brasil!")
                break;
            case "argentina" :
                console.log("a pessoa é da Argentina!")
                break;
            case "uruguaia" :
                console.log("a pessoa é do Uruguai!")
                break;
            case "chilena" :
                console.log("a pessoa é do Chile!")
                break;
            case "colombiana" :
                console.log("a pessoa é da Colômbia!")
                default:
                    console.log("nacionalidade não encontrada")
        }
    }
        verificarNacionalidadeDois(nacionalidade)
/* 

/* else if(nacionalidade === "argentina"){ */
    /* console.log("a pessoa é da Argentina!") */
/* } else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!") */
/* } else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!") *//* 
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!") */
  /* else{
   // console.log("nacionalidade não encontrada")
} */



/* 
let nacionalidade = prompt("Escreva aqui sua nacionalidade.").toLowerCase()

function verificarNacionalidade (nacionalidade) {
    if (nacionalidade === "brasileira") {
    console.log("Naciolalidade: brasileira")
    } else if(nacionalidade === "argentina"){
        console.log("Naciolalidade: argentina")
    } else if(nacionalidade === "uruguaia"){
        console.log("Nacionalidade: uruguaia")
    } else if(nacionalidade === "chilena"){
        console.log("Nacionalidade: chilena")
    } else if(nacionalidade === "colombiana") {
        } else 
        console.log("Nacionalidade não encontrada")
    }
 verificarNacionalidade(nacionalidade) */ //ESSES SÃO MEUS CÓDGOS
