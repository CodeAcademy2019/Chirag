const program = require('./always-asynchronous.js');

describe('Testing for always asynchronous',() => {
    it('checking if promise was resolved with appropriate msg',() => {
        var promise=program();
        return expect(promise).resolves.toBe('PROMISE VALUE');
    });


});