const arrowandthis = require('./arrow-and-this.js');

describe('Checking some properties of this',() => {
    it('Running test',() => {
        expect(arrowandthis()).toEqual('Ouch!');
    });
});