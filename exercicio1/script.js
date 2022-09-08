const num = Number(prompt("Insira um número"))

if(num % 2 === 0){
    console.log("Esse número é divisivel por 2")
   } else if(num % 3 === 0){
    console.log("Esse número é divisivel por 3")
    //    } else{
    // console.log("esse número não é divisivel nem por 2 nem por 3")
}



if(num % 2 === 0 || num % 3 === 0){
    console.log("Esse número é divisivel por 2 ou por 3")
} else{
    console.log("Esse número não é divisível nem por 2 nem por 3")
}
