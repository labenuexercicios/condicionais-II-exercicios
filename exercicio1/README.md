# Exercício 1

Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    
Faça isso:
    
1. Utilizando ifs aninhados
```jsx
    if(numero%2==0){
        if(numero%3==0){

        }
    }
```
2. Utilizando um operador lógico para unir duas operações relacionais
```jsx
    if(expressao && expressao){ //&& para E
    //expressao || expressao para OU     
    
    }
```

if (numero%2==0 && numero%3==0){

    console.log (`O número ${numero} é divisível por 2 e por 3`);
    (numero == 30) ? console.log ("Ufa acertei") : console.log ("Não foi dessa vez!");

}switch(numero){
        case 6:
            console.log ();
            break;
        case 12:
            console.log (`);
            break;
        case 18:
            console.log ();
            break;
        case 24:
            console.log ();
            break;
        case 30:
            console.log (); 
            break;

    default: 
    console.log ("O numero é menor que 6 ou mair que 30");
}