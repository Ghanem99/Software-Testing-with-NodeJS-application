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
 
// Arrays
 const ANIMALS = ['cat', 'dog', 'monkey'];


// Objects
const getOrderById = (id) => {
    if(!id) {
        throw new Error('Id is required');
    }
    return {
        id: id,
        price : 10
    };
};

 module.exports = {
    sum, 
    greeting, 
    isEven, 
    ANIMALS, 
    getOrderById
};