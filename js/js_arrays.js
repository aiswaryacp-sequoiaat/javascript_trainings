// Creating an Array
const odd_numbers = [1, 3, 5, 7, 9, 11, 13]
console.log("Second element is: ", odd_numbers[1])

// Creating an Array using the JavaScript Keyword new
const numbers = new Array(1, 3, 5, 7, 9, 11, 13)
console.log("First element is: ", numbers[0])

// Converting an Array to a String
const even_numbers = [2, 4, 6, 8, 10, 12, 14]
const array_to_string = even_numbers.toString()
console.log("Length of even number array is: ", even_numbers.length)
console.log(typeof(even_numbers))
console.log(array_to_string)
console.log(typeof(array_to_string))

// Array looping

// Using for loop
for (let i = 0; i < odd_numbers.length; i++) {
    console.log(odd_numbers[i]);
}

// Using forEach
even_numbers.forEach(element => {
    console.log(element);
});

// Adding Array Elements
odd_numbers.push(23)
console.log("New odd array is: ", odd_numbers)
odd_numbers[odd_numbers.length] = 25
console.log("New odd array is: ", odd_numbers)

// Array methods
// JavaScript Array at()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit) // Returns Apple

// JavaScript Array join()
const cars = ["volvo", "Sedan", "SUV"];
console.log(cars.join("->"))
console.log("*********************************")


// JavaScript Array pop() and push()
console.log("Popped elements is: ", even_numbers.pop())
console.log(even_numbers)
even_numbers.push(14)
console.log(even_numbers)
console.log("*********************************")

// JavaScript Array shift() and unshift and delete
console.log(odd_numbers)
odd_numbers.shift()
console.log(odd_numbers)
odd_numbers.unshift(1)
console.log(odd_numbers)
delete odd_numbers[2]
console.log(odd_numbers)

// Mergig multiple arrays
const mergedArray = odd_numbers.concat(numbers, even_numbers)
console.log("Merged array: ", mergedArray)

// sort and reverse
const random_numbers = [5,66,2,6,90,3,1]
random_numbers.sort()
console.log(random_numbers)
random_numbers.reverse()
console.log(random_numbers)

// Splice and Slice
random_numbers.splice(2, 0, "Banana", "Kiwi")
console.log(random_numbers)

const newArray = random_numbers.slice(1)
console.log(newArray)

// Map function
const doubled = random_numbers.map(function(number) {
    return number * 2;
});

console.log(doubled);





