const defaultarg = require('./defaultarg.js');

describe('Checking default arg prog',() => {
    it('Running test cases',() => {
        expect(defaultarg(1,)).toEqual(1);
    });
});