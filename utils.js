// Numbers 
const sum = (a, b) => a + b;

// strings 
const greeting = (name) => `Hello ${name}`;


// Booleans
const isEven = (number) => {
    if(number % 2 === 0) {
        return true;
    } else {
        return false;
    }
 };
 

 module.exports = {
    sum, 
    greeting, 
    isEven
};