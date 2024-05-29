// Function to validate an email address using a regular expression
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email);

    return isValid;
}

// Test email
const validEmail = "example@example.com";
const invalidEmail1 = "example.com";
const invalidEmail2 = "example@.com";
const invalidEmail3 = "example@com";
const invalidEmail4 = "example@domain.c";

console.log(`Is "${validEmail}" a valid email? ${validateEmail(validEmail)}`); 
console.log(`Is "${invalidEmail1}" a valid email? ${validateEmail(invalidEmail1)}`);
console.log(`Is "${invalidEmail2}" a valid email? ${validateEmail(invalidEmail2)}`);
console.log(`Is "${invalidEmail3}" a valid email? ${validateEmail(invalidEmail3)}`);
console.log(`Is "${invalidEmail4}" a valid email? ${validateEmail(invalidEmail4)}`);
