// Crie um código que receba um número por **prompt**
const num = Number(prompt("Digite um numero: "))

// verificar se e divisivel por dois ou  por tres

// com ifs aninhados
if ( num % 2 === 0 ){
    console.log("e divisivel por dois")
    if( num % 3 === 0 ){
        console.log("e divisivel por três")

    }

}


if ( num % 2 === 0 && num % 3 === 0 ){
    console.log("O numero e divisivel por dois e tres")
}