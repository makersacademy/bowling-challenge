'use strict';

describe('Scorecard', function() {

    var scorecard;
    var frame;
    var frame2;
    var frame3;

    beforeEach(function() {
        scorecard = new Scorecard();
        frame = jasmine.createSpyObj('frame', ['getRolls','isSpare', 'isStrike']);
        frame2 = jasmine.createSpyObj('frame', ['getRolls']);
        frame3 = jasmine.createSpyObj('frame', ['getRolls']);
    });

    it('Starts with no frames stored.', function() {
        expect(scorecard.getFrames()).toEqual([]);
    });
    it('Can add frame objects to frames hash.', function() {
        frame.getRolls.and.returnValue([1, 1]);
        scorecard.addFrame(frame);
        expect(scorecard.getFrames()[0]).toEqual(frame);
    });
    it('Can return the score from a frame.', function() {
        frame.getRolls.and.returnValue([3, 4]);
        scorecard.addFrame(frame);
        expect(scorecard.getFrameScore(0)).toEqual(7);
    });
    it('Can return current score.', function() {
        frame.getRolls.and.returnValue([2, 3]);
        scorecard.addFrame(frame);
        expect(scorecard.getCurrentScore()).toEqual(5);
    });
    it('Can return current score, accounting for spares', function() {
        frame.getRolls.and.returnValue([9, 1]);
        frame2.getRolls.and.returnValue([3, 2]);
        scorecard.addFrame(frame);
        scorecard.addFrame(frame2);
        expect(scorecard.getCurrentScore()).toEqual(18);
    });
    it('Can return current score, accounting for spares and strikes', function() {
        frame.getRolls.and.returnValue([10]);
        frame2.getRolls.and.returnValue([3, 7]);
        frame3.getRolls.and.returnValue([1, 4]);
        scorecard.addFrame(frame);
        scorecard.addFrame(frame2);
        scorecard.addFrame(frame3);
        expect(scorecard.getCurrentScore()).toEqual(36);
    });
});
