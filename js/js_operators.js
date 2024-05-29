// Arithmetic Operators
let number1 = 10;
let number2 = 3;

// Arithmetic Operators
console.log(`number1 + number2 = ${number1 + number2}`); // Addition
console.log(`number1 - number2 = ${number1 - number2}`); // Subtraction
console.log(`number1 * number2 = ${number1 * number2}`); // Multiplication
console.log(`number1 / number2 = ${number1 / number2}`); // Division
console.log(`number1 % number2 = ${number1 % number2}`); // Modulus (Remainder)
console.log(`number1 ** number2 = ${number1 ** number2}`); // Exponentiation

// Comparison Operators
console.log(`number1 == number2: ${number1 == number2}`); // Equal to
console.log(`number1 != number2: ${number1 != number2}`); // Not equal to
console.log(`number1 === number2: ${number1 === number2}`); // Strict equal to
console.log(`number1 !== number2: ${number1 !== number2}`); // Strict not equal to
console.log(`number1 > number2: ${number1 > number2}`); // Greater than
console.log(`number1 < number2: ${number1 < number2}`); // Less than
console.log(`number1 >= number2: ${number1 >= number2}`); // Greater than or equal to
console.log(`number1 <= number2: ${number1 <= number2}`); // Less than or equal to

// Logical Operators
let isTrue = true;
let isFalse = false;

console.log(`isTrue && isFalse: ${isTrue && isFalse}`); // Logical AND
console.log(`isTrue || isFalse: ${isTrue || isFalse}`); // Logical OR
console.log(`!isTrue: ${!isTrue}`); // Logical NOT

// Assignment Operators
let value = 5;

value += 2; // value = value + 2
console.log(`value += 2: ${value}`);
value -= 2; // value = value - 2
console.log(`value -= 2: ${value}`);
value *= 2; // value = value * 2
console.log(`value *= 2: ${value}`);
value /= 2; // value = value / 2
console.log(`value /= 2: ${value}`);
value %= 2; // value = value % 2
console.log(`value %= 2: ${value}`);

// Ternary Operator
let personAge = 18;
let votingEligibility = (personAge >= 18) ? "Yes" : "No";

console.log(`Can vote: ${votingEligibility}`);

// Bitwise Operators
console.log(`number1 & number2: ${number1 & number2}`); // AND
console.log(`number1 | number2: ${number1 | number2}`); // OR
console.log(`number1 ^ number2: ${number1 ^ number2}`); // XOR
console.log(`~number1: ${~number1}`); // NOT
console.log(`number1 << 1: ${number1 << 1}`); // Left shift
console.log(`number1 >> 1: ${number1 >> 1}`); // Right shift
console.log(`number1 >>> 1: ${number1 >>> 1}`); // Zero-fill right shift
