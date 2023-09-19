
// A 

const receba = () => {
    const numero = +prompt("digite um numero")

    if (numero % 2 === 0) {
        if (numero % 3 === 0) {
            console.log("o numero é divisivel por 2 e por 3")
        } else {
            console.log("o numero é divisivel por 2, mas não por 3")
        }
    } else {
        if (numero % 3 === 0) {
            console.log("o numero não é divisivel por 3 mais nao por 2")
        } else {
            console.log("O numero nao é divisivel por 2 nem por 3 ")
        }
    }

}
receba()


//---------------------------------------------------------------

//B

const recebaNumero = () => {
    const numero = +prompt("digite um numero")


// USANDO &&
if (numero % 2 === 0 && numero % 3 === 0) {
    console.log("o numero é divisivel por 2 e por 3")
} else {
    console.log(" o numero nao é divisivel por 2 e por 3 ")
}

//USANDO || (ou)

if (numero % 2 === 0 || numero % 3 === 0) {
    console.log("o numero é divisivel por 2 mais nao por 3")
} else {
 console.log("o numero é divisivel por 3 mais nao por 2 ")
}
 }
recebaNumero()

