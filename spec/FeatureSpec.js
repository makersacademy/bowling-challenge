'use strict';

describe('Feature test', function () {
    var bowlingGame, frame, lastFrame;
    var ball, firstBall, secondBall;

    beforeEach(function () {
      bowlingGame = new BowlingGame();
      frame = new Frame();
      firstBall = new Ball();
      secondBall = new Ball();
      ball = new Ball();
    });

    describe('A Bowling Game ', function () {

      it('calculates a gutter game', function () {
        spyOn(frame, "getFrameTotalScore").and.returnValue(0);
        generateGameFrames(frame);
        expect(bowlingGame.getTotalScore()).toEqual(0);
      });

      it('calculates a normal game', function () {
        spyOn(frame, "getFrameTotalScore").and.returnValue(9);
        generateGameFrames(frame);
        expect(bowlingGame.getTotalScore()).toEqual(90);
      });


    });

    function generateGameFrames(frame, lastFrame) {
      for(var i = 0; i < 9; i++) {
        frame.addBall(firstBall);
        frame.addBall(secondBall);
        bowlingGame.addFrame(frame);
      }

      if (lastFrame !== undefined) {
        bowlingGame.addFrame(lastFrame);
      }
      else {
        bowlingGame.addFrame(frame);
      }
    }


});
