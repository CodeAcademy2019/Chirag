const templatestrings = require('./template-strings.js');

var ip=['LOGAN','LOGAn','',' ','12','sdf'];
var op=[`Hello, LOGAN!\nYour name lowercased is "logan".`,
`Hello, LOGAn!\nYour name lowercased is "logan".`,
`Hello, !\nYour name lowercased is "".`,
`Hello,  !\nYour name lowercased is " ".`,
`Hello, 12!\nYour name lowercased is "12".`,
`Hello, sdf!\nYour name lowercased is "sdf".`]
describe('Prints a template string',() => {
    test('should return a template string',() => {
        for(var i=0;i<ip.length;i++){
        process.argv=['node','template-strings.js',ip[i]];
        expect(templatestrings()).toBe(op[i]);
        }
    });
});