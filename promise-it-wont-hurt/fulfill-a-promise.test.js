const prom = require('./fulfill-a-promise.js');

describe('We\'re checking if promise is resolved',() => {
    it('',async () => {
        expect.assertions(2);
        await expect(prom()).resolves.toEqual('FULFILLED!');
        await expect(prom()).resolves.not.toEqual('sdfg');
    })
});












