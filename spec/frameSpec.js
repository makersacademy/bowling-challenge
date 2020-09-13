'use strict';

describe('Frame', function() {

    let frame;

    beforeEach(function() {
        frame = new Frame();
    });

    it('should accept 2 bowls', function() {
        frame.addScore(2);
        frame.addScore(4);
        expect(frame.frame.length).toEqual(2);
    });

    it('should calculate the total of 2 bowls', function() {
        frame.addScore(2);
        frame.addScore(4);;
        expect(frame.scoreTotal()).toEqual(6);
    })

    it('should calculate a spare', function() {
        frame.addScore(5);
        frame.addScore(5);
        expect(frame.isSpare()).toBe(true);
    })

    it('should calculate a strike', function() {
        frame.addScore(10);
        expect(frame.isStrike()).toBe(true);
    })

    it('should need extra points if there is a spare', function() {
        frame.addScore(5);
        frame.addScore(5);
        expect(frame.extraPoints()).toBe(true);
    })

    it('should need extra points if there is a strike', function() {
        frame.addScore(10);
        expect(frame.extraPoints()).toBe(true);
    })

    it('should be able to edit the score', function() {
        frame.addScore(3);
        frame.addScore(3);
        frame.editScore(2);
        expect(frame.scoreTotal()).toEqual(8);
    })

    it('should know if frame is completed after a strike', function() {
        frame.addScore(10);
        expect(frame.frameCompleted()).toBe(true);
    })

    it('should know if frame is completed after two bowls', function() {
        frame.addScore(3);
        frame.addScore(3);
        expect(frame.frameCompleted()).toBe(true);
    })
});