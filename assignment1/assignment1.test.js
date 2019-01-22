const program = require('./assignment1.js');

var tio=[
    [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
    [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [10,10,10,10,10,10,10,10,10,10,10,10],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var op=[90,30,16,300,0];

describe('Testing',() => {
    test('Checking if correct score is returned',() => {
        for(var i=0;i<tio.length;i++){
        expect(program.runner(tio[i])).toEqual(op[i]);
        expect(program.tally.frames).toEqual(tio[i]);
        expect(program.tally.points).toEqual(op[i]);
    }
    });

    it('Checking if pins adds to list',() => {
    expect(program.score()).toEqual(0);
    })

    it('Checking if initial values are set correctly',() => {
        // expect(program.tally.frames).toEqual([]);
        expect(program.tally.points).toEqual(0);
    });

});