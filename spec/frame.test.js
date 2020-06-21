const Frame = require('../lib/frame')

describe('Frame Class', () => {
    test('it can return the score of the frame', () => {
        var frame = new Frame([1, 7])
        expect(frame.score()).toEqual(8)
    });
    test('it returns Strike if the player knocks down 10 pins', () => {
        var frame = new Frame([10])
        expect(frame.isStrike()).toBeTrue
    })
});