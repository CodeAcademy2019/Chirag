const program = require('./shortcuts.js');

describe('testing for shortcuts ex',() => {
    it('testing if promise is rejected with proper Error object',() => {
        var promise=program();
        return expect(promise).rejects.toEqual(expect.any(Error)); //Doubt: this did not work with .toBe()
    });
});