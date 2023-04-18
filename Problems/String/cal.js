function calculateResult(expression) {
    let numbers = expression.match(/\d+/g);
    console.log(numbers);
  
    let operators = expression.match(/[+\-*/]/g);
    console.log(operators);
  
    let result = parseInt(numbers[0]);
    let precedence = ['/','*','+', '-'];
  
    for (var i = 0; i < operators.length; i++) {
      var operator = operators[i];
      var number = parseInt(numbers[i+1]);
  
      if (operator === '*' || operator === '/') {
        if (operator === '*') {
          result *= number;
        } else {
          result /= number;
        }
      } else {
        if (operator === '+') {
          result += number;
        } else {
          result -= number;
        }
      }
    }
  
    return result;
  }
  
  console.log(calculateResult("5*2+2/2"));