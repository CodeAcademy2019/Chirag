const program = require('./myfirstasyncio.js');


describe('Testing myfirstasyncio.js',() => {
    it('Test 1',() => {
        process.argv[2]='test.txt';
        program.runner(process.argv[2],'utf8',(err,data) =>{
            expect(err).toEqual(null);
            expect(data.split('\n').length-1).toEqual(5);
            expect(data.split('\n').length-1).not.toEqual(6);
        });
    });

    it('Checking if display() works',() =>{
        process.argv[2]='test.txt';
        expect(program.display(false,'hi\nbye\n')).toEqual(2);
        expect(program.display(true,'hi\nbye\n')).toEqual(true);
        expect(program.display(false,'hi\nbye\n')).not.toEqual(3); 
    });
});
