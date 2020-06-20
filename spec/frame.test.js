const Frame = require('../lib/frame')

describe('Frame Class', () => {
    test('it can return the score of the frame', () => {
        var frame = new Frame([1, 7])
        expect(frame.score()).toEqual(8)
    });
});