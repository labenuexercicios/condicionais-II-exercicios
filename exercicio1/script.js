const num  = Number(prompt("informe um numero divisivel por 2 e por 3"))

if (num % 2 ==0){
    if(num % 3 ==0){
        console.log("O ", num," é divisível por 2 e por 3")
    }
} else( 
    console.log("O ", num," não é divisível por 2 e por 3 ")
)

if((num % 2 ==0) && (num %3 ==0)){ //&& para E
    //expressao || expressao para OU   
    console.log("O ", num," É divisível por 2 e por 3")
    
    }
