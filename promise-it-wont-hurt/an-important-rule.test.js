const program = require('./an-important-rule.js');

jest.useFakeTimers();

describe('testing an-important-rule.js',() =>{
    it('Checking promise resolved',() =>{
        var prom=program.runner();
        return expect(prom).resolves.toEqual(1);
    });

    it('checking iterate was called only 5 times after which rejectionHandler is called',() => {
        program.runner();    
        expect(program.iterate).toHaveBeenCalledTimes(5);
    });
});