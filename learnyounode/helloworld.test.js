const program = require('./helloworld.js');

describe('testing helloworld.js',() => {
    it('Testing if program prints \'HELLO WORLD\'', () => {
        expect(program()).toEqual('HELLO WORLD');
    });
    it('Testing if this test is not hacked',() => {
        expect(program()).not.toEqual('hello');
    });
});