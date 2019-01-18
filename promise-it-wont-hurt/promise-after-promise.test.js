const program = require('./promise-after-promise.js');

describe('testing promise-after-promise ex',() => {
    it('testing if first resolved',() => {
        program.first();
        return expect(program.prom1).resolves.toBe('first');
    });

    it('testing if second resolved',() => {
        program.first();
        return expect(program.prom2).resolves.toBe('second');
    });
});