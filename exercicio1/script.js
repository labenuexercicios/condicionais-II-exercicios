
const Number = +prompt("digite um numero?")

if (Number % 2 === 0) {
    console.log("o numero é divisivel por dois")
    if (Number % 3 === 0) {
        console.log("o numero é divisivel por tres")
    } else {
        console.log("o numero não é divisivel tres")
    }
} else {
    console.log("o numero não é divisivel por dois")
}



if (Number % 2 === 0 || Number % 3 === 0) {
    console.log("o numero é divisivel")
} else {
    console.log("o numero não é divisivel")
}