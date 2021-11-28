const Frame = require('../services/frame');

describe ('frame class', () => {
    it ('records pins for roll 1', () => {
        const frame = new Frame;
        frame.roll1(0);
        expect(frame.ball1).toEqual(0);
    });

    it ('records pins for roll 2', () => {
        const frame = new Frame;
        frame.roll2(3);
        expect(frame.ball2).toEqual(3);
    });

    test('limits pins recorded to 10', () => {
        const frame = new Frame;
        frame.roll1(3);
        expect(() => {
            frame.roll2(8);
        }).toThrow('Please recount pins knocked down (2nd ball only) and enter again');
    });
});
