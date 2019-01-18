const program = require('./multiple-promises.js');

describe('testing multiple promises',() => {
    it('testing if all promises resolved',() => {
        var prom = program.all(new Promise(function(fulfill,reject){
            setTimeout(() => {
                fulfill('good');
            }, 5000);
        }),new Promise(function(fulfill,reject){
            setTimeout(() => {
                fulfill('morning');
            }, 5000);
        }));
        return expect(prom).resolves.toEqual(['good','morning']);
    });
});