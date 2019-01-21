const program = require('./firstio.js');

describe('Testing firstio.js',() => {
    it('Test 1',() => {
        process.argv=['node','firstio.js','test.txt'];
        expect(program()).toEqual(5);
    });

    it('Test 2',() => {
        process.argv=['node','firstio.js','test.txt'];
        expect(program()).not.toEqual(6);
    })
});