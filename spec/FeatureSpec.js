'use strict';

describe('Feature', function() {

    var scorecard;
    var frame1;
    var frame2;
    var frame3;
    var frame4;

    beforeEach(function() {
        scorecard = new Scorecard();
        frame1 = new Frame();
        frame2 = new Frame();
        frame3 = new Frame();
        frame4 = new Frame();
    });

    it('Scorecard can return current score for simple (non-strike, non-spare) frames', function() {
        frame1.inputRoll(3);
        frame1.inputRoll(5);
        scorecard.addFrame(frame1);
        expect(scorecard.getCurrentScore()).toEqual(8);
        frame2.inputRoll(9);
        frame2.inputRoll(0);
        scorecard.addFrame(frame2);
        expect(scorecard.getCurrentScore()).toEqual(17);
    });
    it('Scorecard can return current scores, including spares, not including strikes.', function() {
        frame1.inputRoll(5);
        frame1.inputRoll(5);
        scorecard.addFrame(frame1);
        frame2.inputRoll(7);
        frame2.inputRoll(0);
        scorecard.addFrame(frame2);
        expect(scorecard.getCurrentScore()).toEqual(24);
    });
    it('Scorecard can return current scores, including both spares and strikes.', function() {
        frame1.inputRoll(10);
        scorecard.addFrame(frame1);
        expect(scorecard.getCurrentScore()).toEqual(10);
        frame2.inputRoll(7);
        frame2.inputRoll(3);
        scorecard.addFrame(frame2);
        expect(scorecard.getCurrentScore()).toEqual(30)
        frame3.inputRoll(5);
        frame3.inputRoll(4);
        scorecard.addFrame(frame3);
        expect(scorecard.getCurrentScore()).toEqual(44);
    });
    it('Functions with strike streaks.', function() {
        frame1.inputRoll(10);
        scorecard.addFrame(frame1);
        frame2.inputRoll(10);
        scorecard.addFrame(frame2);
        frame3.inputRoll(10);
        scorecard.addFrame(frame3);
        frame4.inputRoll(5);
        frame4.inputRoll(4);
        scorecard.addFrame(frame4);
        expect(scorecard.getCurrentScore()).toEqual(83);
    });
    it('Functions with a perfect game.', function() {
        frame1.inputRoll(10);
        for (var i = 1; i <= 9; i++) {
            scorecard.addFrame(frame1);
          }
        frame2.inputRoll(10);
        frame2.inputRoll(10);
        frame2.inputRoll(10);
        scorecard.addFrame(frame2);
        expect(scorecard.getCurrentScore()).toEqual(300);
    });
    it('Functions with a near perfect game.', function() {
        frame1.inputRoll(10);
        for (var i = 1; i <= 9; i++) {
            scorecard.addFrame(frame1);
          }
        frame2.inputRoll(10);
        frame2.inputRoll(3);
        frame2.inputRoll(5);
        scorecard.addFrame(frame2);
        expect(scorecard.getCurrentScore()).toEqual(281);
    });
    it('Functions with a spare in the last frame', function() {
        frame1.inputRoll(4);
        frame1.inputRoll(4);
        for (var i = 1; i <= 9; i++) {
            scorecard.addFrame(frame1);
          }
        frame2.inputRoll(4);
        frame2.inputRoll(6);
        frame2.inputRoll(10);
        scorecard.addFrame(frame2);
        expect(scorecard.getCurrentScore()).toEqual(92);
    })
});