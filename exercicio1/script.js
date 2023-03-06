let num = parseInt(prompt(`Digite um número: `));

let msg;

console.log(`--- Utilizando If aninhado ---`)
const ifAninhado = () => {
    if(num % 2 === 0){
        if(num % 3 === 0){
            msg = `Número: ${num} - É divisivel por 2 e 3`
            console.log(msg)
        }else{
            msg = `Número ${num} - Não é divisivel por 2 e 3`
            console.log(msg)
        }
    }else{
        msg = `Número ${num} - Não é divisivel por 2 e 3`
        console.log(msg)
    }
}
ifAninhado()

console.log(`--- Utilizando operador lógico ---`)
const opLogico = () => {
    if(num % 2 === 0 || num % 3 === 0){
        msg = `Número: ${num} - É divisivel por 2 e 3`
        console.log(msg)
    }else{
        msg = `Número ${num} - Não é divisivel por 2 e 3`
        console.log(msg)
    }
}
opLogico()