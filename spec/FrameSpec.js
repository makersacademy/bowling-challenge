'use strict'

describe('Frame', () => {
    var frame;

    beforeEach(() => {
        frame = new Frame();
    });

    it('knows its score', () => {
        frame.addRoll(5);
        frame.addRoll(3);
        expect(frame.score()).toEqual(8);      
    });
});