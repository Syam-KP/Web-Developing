let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let operator = prompt(
    "Choose an operation:\n" +
    "1.Addition\n" +
    "2.Subtraction\n" +
    "3.Multiplication\n" +
    "4.Division\n" +
    "5.Square\n" +
    "6.Cube\n"
);

let result;

switch (operator) {
    case "1":
        result = num1 + num2;
        break;
    case "2":
        result = num1 - num2;
        break;
    case "3":
        result = num1 * num2;
        break;
    case "4":
        result = num1 / num2;
        break;
    case "5":
        result = num1 * num1; 
        break;

    case "6":
        result = num1 * num1 * num1;
        break;
    default:
        result = "Invalid operator";
}

alert("Result: " + result);