// Function declaration
function greet(name) {
    return "Hello, " + name + "!!";
}

// Function expression
const square = function(number) {
    return number * number;
};

// Arrow function
const multiply = (a, b) => a * b;

// Function calls other functions
function main() {
    const greeting = greet("Aiswarya");
    console.log(greeting);

    const squaredNumber = square(5);
    console.log("Square of given number is: ", squaredNumber);

    const product = multiply(4, 3);
    console.log("Product of given numbers is: ", product);
}

// Main function
main();
