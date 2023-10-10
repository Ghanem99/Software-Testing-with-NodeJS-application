const db = require('./db');

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

// Asynchronous code
const getOrders = async() => {
    return await Promise.resolve([{ id: 1, price: 10 }, { id: 2, price: 20 }]);
}

// Mocking
const applyDiscount = (orderId) => {
    const order = db.getOrderById(orderId); // we need to fake this line of code: Mock, fake, stub



    if(order.price >= 10) {
        order.price -= order.price * 0.1;
    }

    return order;
};


 module.exports = {
    sum, 
    greeting, 
    isEven, 
    ANIMALS, 
    getOrderById, 
    getOrders, 
    applyDiscount
};