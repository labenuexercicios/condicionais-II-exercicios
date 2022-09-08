const num = Number(prompt("diga um numero"))
if(num % 2 === 0){
    console.log("esse numero é divisivel por 2")
    if(num % 3 === 0){
        console.log("esse numero é divisivel por 3")
    }else{
        console.log("esse numero não é divisivel por 3")
    }
}else{
    console.log("esse numero não é divisivel por 2")
}

