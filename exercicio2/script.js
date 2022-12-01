function verificanacionalidade(nacionalidade2){//Usando função
    switch(nacionalidade2){
        case "brasileiro":
            console.log("Fala mano!")
            break
        
        case "argentino":
            console.log("Olá manito!")
            break
        
        case "uruguaio":
            console.log("Habla manito!")
            break
        case "chileno":
            console.log("Habla comigo ermano!")
            break
        case "colombiano":
            console.log("Hola loco!")
            break
        default:
            console.log("Num é brasileiro, nem nada do resto")
    }   
}


let nacionalidade = prompt("Digite sua nacionalidade\nEx.: Cubano").toLowerCase()
verificanacionalidade(nacionalidade)