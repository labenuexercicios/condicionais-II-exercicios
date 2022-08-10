//A)
const num = Number(prompt("Escolha um número"))
 if(num % 2 == 0){
    console.log("o numero adicionado é divisível por 2")
    
}else if(num % 3 == 0){
    console.log('o numero adicionado é divisível por 3')         
}else{
      console.log('ERRO')             
} 


//B)
 if(num%2===0 && num%3===0){
    console.log("o numero adicionado é divisível por 2 ou por 3")
}else{
    console.log("ERRO");
 }



    
   
  












/* 


    switch(num){
    case 6:
        console.log ('acertou');
        break;
    case 12:
        console.log ('acertou');
        break;
    case 18:
        console.log ('acertou');
        break;
    case 24:
        console.log ('acertou');
        break;
    case 30:
        console.log ('acertou'); 
        break;
    default 
    console.log("esse numero não é divisível nem por 2 ou 3 ");
} */