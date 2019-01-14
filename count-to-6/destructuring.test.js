const destructuring = require('./destructuring.js');

describe('We are checking o/p of destructuring program',() => {
    it('Running test case',() => {
        process.argv=['node','destructuring.js',1,'jdoe','jdoe@example.com','John','Doe'];
        expect(destructuring()).toEqual({username: 'jdoe', email: 'jdoe@example.com'});
    });
});