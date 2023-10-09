const {sum, greeting} = require('./utils');

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