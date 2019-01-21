const program = require('./filteredls.js');

const op=[ 'babysteps.js',
'babysteps.test.js',
'filteredls.js',
'filteredls.test.js',
'firstio.js',
'firstio.test.js',
'helloworld.js',
'helloworld.test.js',
'makeitmodular.js',
'makeitmodular.test.js',
'myfirstasyncio.js',
'myfirstasyncio.test.js',
'mymodule.js',
'package.json',
'rough.js',
'test.txt' ];

const op1=[ 'babysteps.js',
'babysteps.test.js',
'filteredls.js',
'filteredls.test.js',
'firstio.js',
'firstio.test.js',
'helloworld.js',
'helloworld.test.js',
'makeitmodular.js',
'makeitmodular.test.js',
'myfirstasyncio.js',
'myfirstasyncio.test.js',
'mymodule.js',
'package.json',
'rough.js' ];

describe('testing filteredls.js',() => {
    it('Test 1',() => {
        process.argv[2]='.';
        program.runner(process.argv[2],(err,data) => {
            expect(err).toEqual(null);
            expect(data).toEqual(op);
        });
    });

    it('Checking if display() function works',() => {
        process.argv[3]='js';
        expect(program.display(true,op)).toEqual(true);
        expect(program.display(false,op)).toEqual(op1);
    });
});