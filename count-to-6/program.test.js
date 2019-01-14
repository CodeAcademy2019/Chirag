const program = require('./program.js');

test('checking console.log', () => {
expect(program()).toBe('HELLO ES6');
});