describe('Prime number generator', function () {
	var isPrimenum = require('../../lib/isPrime');

    it('returns 2 when input is 3', function () {
        expect(isPrime(3)).toEqual([2]);
    });
    it('returns 2, 3, 5 when input is 7', function () {
        expect(isPrime(7)).toEqual([2,3,5]);
    });
    it('returns 2,3,5,7,11 when input is 15', function () {
        expect(isPrime(15)).toEqual([2,3,5,7,11]);
    });
    it('returns an empty array when input is 1', function () {
        expect(isPrime(1)).toEqual([]);
    });
    it('returns an empty string when input is 2', function () {
        expect(isPrime(2)).toEqual([]);
    });
    it('throws input a number when input is string', function () {
        expect(isPrime("five")).toThrow("Input a number");
    });
    it('throws input a number when there is no input', function () {
        expect(isPrime()).toThrow("Input a number");
    });
    it('throws number must be greater than 0 when input is 0 ', function () {
        expect(isPrime(0)).toThrow("Number must be greater than 0");
    });
    it('throws number must be greater than 0 for a negative input', function () {
        expect(isPrime(-10)).toThrow("Number must be greater than 0");
    });
    it('throws input a number when list is input', function () {
        expect(isPrime([])).toThrow("Input a number");
    });

});