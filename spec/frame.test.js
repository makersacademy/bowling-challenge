const Frame = require('../lib/frame')

describe('Frame Class', () => {
    test('it can return the score of the frame', () => {
        var frame = new Frame([1, 7])
        expect(frame.score()).toEqual(8)
    });
    test('it returns Strike if the player knocks down 10 pins', () => {
        var frame = new Frame([10])
        expect(frame.isStrike()).toBeTrue
    });
    test('it returns a Gutter if the player knocks down 0 pins', () => {
        var frame = new Frame([0])
        expect(frame.isGutter()).toBeTrue
    });
    test('it returns a Spare if the player knocks down 10 pins within the 2 rolls', () => {
        var frame = new Frame([2, 8])
        expect(frame.isSpare()).toBeTrue
    });
});