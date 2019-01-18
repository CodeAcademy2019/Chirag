const program = require('./values-and-promises.js');

const ip=['Manny','gui','mac'];
const op=['DR. Manny','DR. gui','DR. mac'];

describe('testing values and promises ex',() => {
    it('checking promise is resolved with correct string',() => {
        var promise=program.runner();
        return expect(promise).resolves.toBe('MANHATTAN');
    });

    it('checking if attachTitle works fine',() => {
        for(var i=0;i<ip.length;i++){
        expect(program.attachTitle(ip[i])).toBe(op[i]);
        }
    });

    it('Checking if s is resolved',() =>{
        program.runner();
        return expect(program.s).resolves.toBe('DR. MANHATTAN');
    });

});