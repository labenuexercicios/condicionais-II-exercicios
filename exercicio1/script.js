const num = Number(prompt("Insira um número aqui."));

if (num % 2 === 0) {
  if (num % 3 === 0) {
    console.log("Esse número também é divisivel por 2 e 3");
  } 
  else {
    console.log("Esse número divisivel por 2");
  }
} 
else {
  if (num % 3 === 0) {
    console.log("Esse número é divisivel por 3");
  } 
  else {
    console.log("Esse número não é divisivel por nenhum dos dois");
  }
 
}

// método 2

if (num % 2 === 0 && num % 3 === 0) {
    console.log("Esse número é divisivel por 2 e por 3");
} else {
    console.log("Esse número não é divisivel por 2 e nem por 3")
}
