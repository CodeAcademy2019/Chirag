const reject = require('./reject-a-promise.js');

jest.useFakeTimers();

describe('we are writing test cases for a Promise which rejects using setTimeout',() => {
    it('we check if setTimeout is called only once in Promise',() => {
        reject.runner();
        expect(setTimeout).toHaveBeenCalledTimes(1);
    });

    it('we are checking if arguments to setTimeout is proper',() => {
        reject.runner();
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function),300);
    });

    it('we are checking if arguments to setTimeout is proper',() => {
        reject.runner();
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),300);
    });

    it('we are checking if error object is passed to reject',async () => {
        var promise=reject.runner();
        expect(promise).rejects.toHaveBeenCalledWith(expect.any(Error));
    });
});