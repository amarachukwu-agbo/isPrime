'use strict';

var generate_prime = require('../app/index.js');

describe('Prime number generator', function () {
    it('should return 2 when input is 3', function () {
        expect(generate_prime(3)).toEqual([2]);
    });

    it('should return 2, 3, 5 when input is 7', function () {
        expect(generate_prime(7)).toEqual([2,3,5]);
    });

    it('should return 2,3,5,7,11 when input is 15', function () {
        expect(generate_prime(15)).toEqual([2,3,5,7,11]);
    });

    it('should return an empty array when input is 1', function () {
        expect(generate_prime(1)).toEqual([]);
    });

    it('should return an empty string when input is 2', function () {
        expect(generate_prime(2)).toEqual([]);
    });

    it('should throw input a number when input is string', function () {
        expect(generate_prime("five")).toThrow("Input a number");
    });

    it('should throw input a number when there is no input', function () {
        expect(generate_prime()).toThrow("Input a number");
    });

    it('should throw number must be greater than 0 when input is 0 ', function () {
        expect(generate_prime(0)).toThrow("Number must be greater than 0");
    });

    it('should throw number must be greater than 0 for a negative input', function () {
        expect(generate_prime(-10)).toThrow("Number must be greater than 0");
    });

    it('should throw input a number when list is input', function () {
        expect(generate_prime([])).toThrow("Input a number");
    });

});

/*'use strict';

const factorial = require('../app/index.js');


describe("Test for normal values", function() {
    it("should return 120 for the argument, 5", function() {
        expect(factorial(5)).toEqual(120);
    });

    it("should return 24 for the argument, 4", function() {
        expect(factorial(4)).toEqual(24);
    });

    it("should return 9.33262154439441e+157 for the argument, 100", function() {
        expect(factorial(100)).toEqual(9.33262154439441e+157);
    });

    it("should return 1 for the argument, 1", function() {
        expect(factorial(1)).toEqual(1);
    });
});

describe("Test for possible edge cases", function() {
    it("should return 'Invalid input' for the argument, -1", function() {
        expect(factorial(-1)).toEqual("Invalid input");
    });

    it("should return 'Invalid input' for the argument, 0", function() {
        expect(factorial(0)).toEqual("Invalid input");
    });

    it("should return 'Only numbers allowed. Input must be a number.' when passed an argument that isn't type number", function() {
        expect(factorial("Bolaji")).toEqual("Only numbers allowed. Input must be a number.");
    });
});*/