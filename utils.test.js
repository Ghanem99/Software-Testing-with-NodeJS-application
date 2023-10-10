const {sum, greeting, isEven, ANIMALS, getOrderById } = require('./utils');

describe('sum', () => {
    it('should add two numbers', () => {
        const result = sum(3, 4);
        expect(result).toBe(7);
    });
})

describe('greeting', () => {
    it('should return a greeting', () => {
        const result = greeting('John');
        expect(result).toBe('Hello John');
    });
});

// run the test with the following command:
// $ npm run test   or   $ npm test


it('isEven - should return true for even', () =>{
    expect(isEven(4)).toBeTruthy();
});

describe('truthiness', () => {
    it('should return true for Undefined values', () => {
        let x; // Undefined
    
        expect(x).toBeUndefined();
    });
    
    it('should return true for null values', () => {
        let x = null;
        expect(x).toBeNull();
    });
    
    it('should return true for not Null values', () => {
        let x = 10;
        expect(x).not.toBeNull();
    });
}
);


// Arrays Matchers
describe('Arrays', () => {
    it('should return true for cat', () => {
        expect(ANIMALS).toContain('cat');
    });
});

// Objects Matchers
describe(getOrderById, () => {
    const res = getOrderById(1);
    it('should return an object', () => {
        expect(res).toBeInstanceOf(Object); // return true
        // expect(res).toMatchObject( { id:1, price:10 } ); // return true
        // expect(res).toBe({ id:1, price:10 });  // return false
    });

    it('should return an object with id and price', () => {
        expect(res).toHaveProperty('id');
        expect(res).toHaveProperty('price');
    });

    it('should throw an error if no id is passed', () => {
        expect(() => getOrderById()).toThrow('Id is required');
    });
});



