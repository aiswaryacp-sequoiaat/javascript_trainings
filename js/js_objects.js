// Creating an object using an object literal
const person1 = {
    firstName: "Ilina",
    lastName: "Smith",
    age: 30,
    isEmployed: true,
    address: {
        street: "123 Main St",
        city: "Wonderland",
        postalCode: "12345"
    },
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    greet: function() {
        return `Hello, my name is ${this.fullName()} and I live in ${this.address.city}.`;
    },
    incrementAge() {
        this.age++;
    }
};
console.log(person1.greet());
console.log("City is: ", person1.address.city)
console.log("Address is: ", person1["address"])

// Creating an empty object and adding properties and methods later
const person2 = {};
person2.firstName = "Bob";
person2.lastName = "Johnson";
person2.age = 40;
person2.isEmployed = false;
person2.address = {
    street: "456 Elm St",
    city: "Exampletown",
    postalCode: "67890"
};
person2.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
};
person2.greet = function() {
    return `Hello, my name is ${this.fullName()} and I live in ${this.address.city}.`;
};

console.log("Person-2 fullname is: ", person2.fullName());

// Constructor function for creating person objects
function Person(firstName, lastName, age, isEmployed, street, city, postalCode) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isEmployed = isEmployed;
    this.address = {
        street: street,
        city: city,
        postalCode: postalCode
    };
    this.fullName = function() {
        return `${this.firstName} ${this.lastName}`;
    };
    this.greet = function() {
        return `Hello, my name is ${this.fullName()} and I live in ${this.address.city}.`;
    };
}

// Creating an object using the new keyword and constructor function
const person3 = new Person("Charlie", "Brown", 25, true, "789 Maple St", "Sampleville", "54321");
console.log("Person-3 ullname is: ", person3.fullName());
