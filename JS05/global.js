var num1 = parseInt(prompt("Please give me a number:"));
var num2 = parseInt(prompt("Please give me another number:"));
var num3 = parseInt(prompt("Please give me one more number:"));
var sum = num1 + num2 + num3;
console.log(num1 + " + " + num2 + " + " + num3 + " = " + sum);

var difference = num1 - num2 - num3;
console.log(num1 + " - " + num2 + " - " + num3 + " = " + difference);

var product = num1 * num2 * num3;
console.log(num1 + " * " + num2 + " * " + num3 + " = " + product);

var quotient = num1 / num2;
console.log(num1 + " / " + num2 + " = " + quotient);

var modulo = num1 % num2;
console.log(num1 + " % " + num2 + " = " + modulo);

// This one doesn't seem to be working...
var increment = num1++
console.log(num1 + "++ " + " = " + increment);

// Output the result of incrementing the first number: 7++ = 8
// Output the result of decrementing the second number: 4-- = 3