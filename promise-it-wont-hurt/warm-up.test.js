const warm = require('./warm-up.js');

jest.useFakeTimers();

describe('Testing if setTimeOut was called',()=>{
it('Checking how many times setTimeout was called',()=>{
    warm.runner();
    expect(setTimeout).toHaveBeenCalledTimes(1);
});

it('Checking if setTimeOut was called with required arguments',() => {
    warm.runner();
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function),300);
});

it('Checking if setTimeout was last called with required arguments',() => {
    warm.runner();
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),300);
});

it('Checking output is the right string',() => {
    expect(warm.print()).toEqual('TIMED OUT!');
});

});



