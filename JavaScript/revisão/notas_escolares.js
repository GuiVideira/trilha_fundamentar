//variavel q vamos alterar


function notasfinais(nota) {
  //variaveis condicionais
  let notaA = nota >= 90;
  let notaB = nota >= 80;
  let notaC = nota >= 70;
  let notaD = nota >= 60;
  let notaF = nota < 60;

  //Sistema de notas
  if (notaA) {
    console.log("Nota A");
  } else if (notaB) {
    console.log("Nota B");
  } else if (notaC) {
    console.log("Nota C");
  } else if (notaD) {
    console.log("Nota D");
  } else if(notaF){
    console.log("Nota F");
  }else{
    console.log("Nota Invalida")
  }

  return(nota)
}

notasfinais(-10)
notasfinais(80)
notasfinais(90)
notasfinais(69)
notasfinais(10)