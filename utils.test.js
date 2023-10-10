const {sum, greeting, isEven } = require('./utils');

test('should add two numbers', () => {
    const result = sum(3, 4);
    expect(result).toBe(7);
});

test('should return a greeting', () => {
    const result = greeting('John');
    expect(result).toBe('Hello John');
});

// run the test with the following command:
// $ npm run test   or   $ npm test


test('should return true for even', () =>{
    expect(isEven(4)).toBeTruthy();
});

test('validation', () => {
    let x; // Undefined

    expect(x).toBeUndefined();
});

test('validation, null', () => {
    let x = null;
    expect(x).toBeNull();
});

test('validation, notNull', () => {
    let x = 10;
    expect(x).not.toBeNull();
});


