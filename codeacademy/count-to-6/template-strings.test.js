const templatestrings = require('./template-strings.js');

describe('Prints a template string',() => {
    it('should return a template string',() => {
        process.argv=["node","template-strings.js","LOGAN"];
        expect(templatestrings()).toEqual("Hello, LOGAN!\nYour name lowercased is \"logan\".");
    });
});













