const defaul = require('./defaultarg2.js');

describe('Checking if default arg can access previous def arg',() => {
    it('Running test cases',() => {
        expect(defaul("hi!",3)).toEqual('hi!!!!');
    });
});