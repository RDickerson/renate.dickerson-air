var readlineSync = require("readline-sync");

var number1 = readlineSync.question("Please give me a number.");
var number2 = readlineSync.question("Please give me a second number.");

function addThem(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtractThem(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiplyThem(num1, num2) {
    return Number(num1) * Number(num2);
}

function divideThem(num1, num2) {
    return Number(num1) / Number(num2);
}

var whatDo = ["add", "subtract", "multiply", "divide"],
    index = readlineSync.keyInSelect(whatDo, "What do you want to do with the two numbers?");

if (whatDo[index] === "add") {
    console.log(addThem(number1, number2));
} else if (whatDo[index] === "subtract") {
    console.log(subtractThem(number1, number2));
} else if (whatDo[index] === "multiply") {
    console.log(multiplyThem(number1, number2));
} else {
    console.log(divideThem(number1, number2));
}

