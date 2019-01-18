const prog = require('./to-reject-or-not.js');

describe('Testing for to-reject-or-not.js',() => {
    it('here we check if Promise was resolved with correct message',() => {
        prog.runner();
        return expect(prog.temp).resolves.toBe('I FIRED');
    });

    it('here we check if Promise was resolved without an incorrect message',() => {
        prog.runner();
        return expect(prog.temp).resolves.not.toBe('I DID NOT FIRE');
    });
});