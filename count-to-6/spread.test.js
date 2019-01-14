const spread = require('./spread.js');

describe('We are tring the spread operator',() => {
    it('Running test cases',() => {
        process.argv=['node','spread.js',1,2,3,4,5,6];
        expect(spread()).toEqual('The minimum of [1,2,3,4,5,6] is 1');
    });
});