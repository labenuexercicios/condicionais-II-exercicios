const num = Number(prompt(`Digite um numero`))

if(num %2 == 0 && num %3 == 0){
    console.log(`O numero é divisivel por 2 e por 3.`, num);
}else{
    
    if (num % 2 == 0 || num % 3 == 0){
        if(num %2 == 0){
            console.log(`O numero é divisivel por 2.`,
            num);      
        }else{
           console.log(`O numero é divisivel por 3.`,
            num);
        }
}else{
     console.log(`O numero  não é divisivel por 2 e nem 3.`,
     num);
     } 
}