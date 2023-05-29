//switch
let expression = "c";

switch (expression) {
  case "a":
    //codigo
    console.log("a");
    break;
  case "b":
    console.log("b");
    //codigo b
    break;
  default:
    console.log("default");
    //default cod
    break;
}

//calculadora

function calculate(number1, operator, number2) {
  let result = 0;

  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      console.log("não implementado");
      break;
  }

  return result;
}

console.log(calculate(4, "*", 8));
