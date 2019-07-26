'use strict';

describe('Feature', function() {

    var scorecard;
    var frame1;
    var frame2;

    beforeEach(function() {
        scorecard = new Scorecard();
        frame1 = new Frame();
        frame2 = new Frame();
    });

    it('Scorecard can return current score for simple (non-strike, non-spare) frames', function() {
        frame1.inputRoll(3);
        frame1.inputRoll(5);
        scorecard.addFrame(frame1);
        expect(scorecard.getCurrentScore()).toEqual(8);
        frame2 = new Frame();
        frame2.inputRoll(9);
        frame2.inputRoll(0);
        scorecard.addFrame(frame2);
        expect(scorecard.getCurrentScore()).toEqual(17);
    });
});