const Frame = require('../services/frame');

describe ('frame class', () => {
    it ('records pins for roll 1', () => {
        const frame = new Frame;
        frame.ball1(0);
        expect(frame.frame_array).toEqual([0]);
    });
});