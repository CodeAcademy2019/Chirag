const arrowfunction = require('./arrow-function1.js');

describe('Map incoming strings to their first char and concatenate them',() => {
    it('We are checking ',() => {
        process.argv=['node','arrow-function1.js','Hello','arrow','functions'];
        expect(arrowfunction()).toEqual('[Hello,arrow,functions] becomes \"Haf\"');
    });
});