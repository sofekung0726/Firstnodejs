const mathOperations = require('./calculator');

describe("Calculator tests", () => {
    
    beforeAll(() => {
        console.log("beforeAll called");
    });
    afterAll(() => {
        console.log("afterAll called");
    });
    beforeEach(() => {
        console.log("beforeEach called");
        
    });
    afterEach(() => {
        console.log("afterEach called");
    });
    test('adding 1 + 2 should return 3', () => {
        // arrange and act
        var result = mathOperations.sum()
        // assert
        
    });
})

describe("Calculator tests", () => {
    test('adding 5 + 2 should return 7', () => {
        // arrange and act
        var result = mathOperations.sum(5, 2)
        
        // assert
        expect(result).toBe(7);
        expect(result).not.toBe(5);
    });
    test("subtracting 5 from 10 should return 5", () => {
        // arrange and act
        var result = mathOperations.diff(10, 5)
        // assert
        expect(result).toBe(5);
    });
    test("multiplying 5 and 8 should return 40", () => {
        // arrange and act
        var result = mathOperations.product(5, 8)
        // assert
        expect(result).toBe(40);
    });
})