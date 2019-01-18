const program = require('./throw-an-error');

describe('testing throw-an-error ex',() => {
    it('testing if promise is resolved with message as JSON object',() => {
        var res=program.parsePromised('{"Name":"Chirag","Age":21}');
        return expect(res).resolves.toEqual({"Name":"Chirag","Age":21});
    });
    it('testing if promise is rejected with message as JSON object',() => {
        program.parsePromised('{"Name":"Chirag"}');
        return expect(program.res).rejects.toBe('Unexpected token r in JSON at position 0');
    });
});