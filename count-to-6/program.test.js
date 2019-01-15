const program = require('./program.js');

var ip=['HELLO ES6','HELLo es6'];
for(var i=0;i<ip.length;i++){
test('checking console.log', () => {
    expect(program()).toBe(ip[0]);
});
}