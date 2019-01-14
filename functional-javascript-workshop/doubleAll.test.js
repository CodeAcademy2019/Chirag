const doubleAll = require('./doubleAll');

test('It multiplies each element of array by 2',function(){
    expect(doubleAll([1,2,3,4])).toEqual([2,4,6,8]);
});

