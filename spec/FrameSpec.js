'use strict';

describe('Frame', function(){
    var frame;


    beforeEach(function() {
        frame = new Frame();
    });

    it('default max score is 10', function () {
        expect(frame.MAX_SCORE).toEqual(10)
    })    

    it('adds score to rollOne', function() {
        frame.addScore(5)
        expect(frame.rollOne).toEqual(5);
    });

    it('rollTwo is null if one score entered', function() {
        frame.addScore(4)
        expect(frame.rollTwo).toEqual(null);
    });

    it('adds score to rollTwo', function() {
        frame.addScore(4)
        frame.addScore(3)
        expect(frame.rollTwo).toEqual(3);
    });

    it('isComplete to default with false', function() {
        expect(frame.isComplete).toBe(false);
    });

    it('isFrameComplete function returns true when frame complete', function() {
        frame.addScore(4)
        frame.addScore(3)
        expect(frame.isFrameComplete()).toBeTruthy();
    });

    it('returns complete when two scores', function() {
        frame.addScore(3)
        frame.addScore(4)
        expect(frame.isComplete).toEqual(true);
    });

    it('returns strike as true if 10 scored on first go', function() {
        frame.addScore(10)
        expect(frame.isStrike()).toBeTruthy;
    });

    it('returns strike as false if 10 not scored on first go', function() {
        frame.addScore(5)
        expect(frame.isStrike()).toBeFalsy;
    });

    it('returns spare as true if rollOne plus rollTwo is 10', function() {
        frame.addScore(6)
        frame.addScore(4)
        expect(frame.isSpare()).toBeTruthy;
    });

});