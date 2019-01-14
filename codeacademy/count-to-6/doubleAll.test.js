const doubleAll = require('./doubleAll');

describe('It multiplies each element of array by 2',()=>{
    it('All integers',()=>{
        expect(map([1,2,3,4])).toEqual([2,4,6,8]);
    });
});

