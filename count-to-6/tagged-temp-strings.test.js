const tag = require('./tagged-temp-strings.js');

describe('Checking tagged-template-strings',() => {
    it('Running test case',() => {
        process.argv=['node','tagged-temp-strings.js','Muad\'Dib','The power to destroy a thing is the absolute control over it.\"'];
        expect(tag).toEqual('<b>Muad&apos;Dib says</b>: \"The power to destroy a thing is the absolute control over it.\"');
    });
});