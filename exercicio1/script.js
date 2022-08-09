const num = Number(prompt("digite um número e direi se ele é divisível por dois ou por três"))//seu numero aqui

if(num % 2 === 0){
    alert("o número é divisível por 2")
    if(num % 3 === 0){
        alert("O número é divisível por 3")
        if(num % 2 === 0 && num % 3 === 0){
            alert("O número é divisível por ambos os números!")
        }
    }
}


