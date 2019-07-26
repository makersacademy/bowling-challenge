'use strict';

describe('Scorecard', function() {

    var scorecard;
    var frame;

    beforeEach(function() {
        scorecard = new Scorecard();
        frame = jasmine.createSpyObj('frame', ['getRolls']);
    });

    it('Starts with no frames stored.', function() {
        expect(scorecard.getFrames()).toEqual([]);
    });
    it('Can add frame objects to frames hash.', function() {
        scorecard.addFrame(frame);
        expect(scorecard.getFrames()[0]).toEqual(frame);
    });
    it('Can return the score from a frame.', function() {
        frame.getRolls.and.returnValue([3, 4]);
        scorecard.addFrame(frame);
        expect(scorecard.getFrameScore(1)).toEqual(7);
    })
    it('Can return current score.', function() {
        frame.getRolls.and.returnValue([2, 3]);
        scorecard.addFrame(frame);
        expect(scorecard.getCurrentScore()).toEqual(5);
    })
});
