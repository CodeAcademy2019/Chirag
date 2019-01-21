const program = require('./babysteps.js');

describe('Testing if babysteps.js works',() => {
    it('Test case 1',() => {
        process.argv=['node','babysteps.js','1','2','3','23'];
        expect(program()).toEqual(29);
    });
    it('Test case 2',() => {
        process.argv=['node','babysteps.js','1','2','3','23'];
        expect(program()).not.toEqual(0);
    });
});