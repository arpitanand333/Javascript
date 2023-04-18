

// now we are looping through the array and doing one operation at a time.
// first divide, then multiply, then subtraction and then addition
// as we move we are alterning the original numbers and operators array
// the final element remaining in the array will be the output
function cal() {
    let inputString = "5+6*8-25*4"
var numbers = inputString.split(/\+|\-|\×|\÷/g);

// forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
// first we replace all the numbers and dot with empty string and then split
var operators = inputString.replace(/[0-9]|\./g, "").split("");

console.log(inputString);
console.log(operators);
console.log(numbers);
console.log("----------------------------");
    var divide = operators.indexOf("÷");
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }

    var multiply = operators.indexOf("×");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }

    var subtract = operators.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    var add = operators.indexOf("+");
    while (add != -1) {
        // using parseFloat is necessary, otherwise it will result in string concatenation :)
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }
}

const result = cal();
console.log(cal)