const Frame = require('../services/frame');
const myMock = jest.fn();

describe ('frame class', () => {
    it ('records pins for roll 1', () => {
        const frame = new Frame;
        frame.roll1(myMock(0));
        expect(frame.ball1).toEqual(0);
    });

    it ('records pins for roll 2', () => {
        const frame = new Frame;
        frame.roll2(myMock(3));
        expect(frame.ball2).toEqual(3);
    });

    // test('limits pins recorded to 10', () => {
    //     const frame = new Frame;
    //     frame.roll1(myMock(3));
    //     expect(frame.roll2(myMock(8))).toBe('Please recount pins knocked down (2nd ball only) and enter again');
    // });
});
