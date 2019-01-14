const rest = require('./rest.js');

describe('It returns averages of all arguments',()=>{
    it('average',()=>{
        process.argv=['node','rest.js'];
        expect(rest(1,2,3,4)).toEqual(2.5);
    });
});

