const Frames = require('../lib/frames')

describe ('Frames.', () => {
    it ('Returns the score for roll_1.', () => {
        frame = new Frames();
        expect(frame.roll_1(8)).toEqual (8);
    })

    it ('Returns the score for roll_1.', () => {
        frame = new Frames();
        expect(frame.roll_1(9)).toEqual (9);
    })

    it ('Returns error if roll_1 is incorrect.', () => {
        frame = new Frames();
        expect(() => {frame.roll_1(16); }).toThrow ('Incorrect roll. Try again!');
    })

    it ('Returns error if roll_1 is incorrect.', () => {
        frame = new Frames();
        expect(() => {frame.roll_1(-2); }).toThrow ('Incorrect roll. Try again!');
    })

    it ('Returns the score for roll_2.', () => {
        frame = new Frames();
        expect(frame.roll_2(8)).toEqual (8);
    })

    it ('Returns error if roll_2 is incorrect.', () => {
        frame = new Frames();
        expect(() => {frame.roll_2(-2); }).toThrow ('Incorrect roll. Try again!');
    })

    it ('Returns the bonus for the current frame.', () => {
        frame = new Frames();
        expect(frame.roll_1(9)).toEqual (9);
    })
});