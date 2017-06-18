'use strict';

describe('Feature test', function () {
    var bowlingGame, frame, lastFrame;
    var ball, firstBall, secondBall;

    beforeEach(function () {
      bowlingGame = new BowlingGame();
      frame = new Frame();
      lastFrame = new Frame();
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

      it('calculates a game with spares', function () {
        spyOn(firstBall, "getThrow").and.returnValue(5);
        spyOn(secondBall, "getThrow").and.returnValue(5);
        spyOn(ball, "getThrow").and.returnValue(5);
        generateGameFrames(frame, lastFrame);
        expect(bowlingGame.getTotalScore()).toEqual(frame.MAX_FRAME_SCORE * 5);
      });

      it('calculates a game with strikes', function () {
        spyOn(firstBall, "getThrow").and.returnValue(10);
        spyOn(ball, "getThrow").and.returnValue(10);
        generateGameFrames(frame, lastFrame);
        console.log('inside feature strikes', bowlingGame.getNumOfFrames());
        expect(bowlingGame.getTotalScore()).toEqual(frame.MAX_FRAME_SCORE * 10);
      });

    });

    function generateGameFrames(frame, lastF) {

      for(var i = 0; i < 9; i++) {
        frame.addBall(firstBall);
        frame.addBall(secondBall);
        bowlingGame.addFrame(frame);
      }

      if (lastF) {
        lastF.isLastFrameWithBonus = true;
        lastF.addBall(firstBall);
        lastF.addBall(ball);
        lastF.addBall(ball);
        bowlingGame.addFrame(lastF);
        console.log('inside lastF,', lastF.getFrameSize(), lastF.getFrameTotalScore(), bowlingGame.getNumOfFrames());
      }
      else {
        frame.addBall(firstBall);
        frame.addBall(secondBall);
        bowlingGame.addFrame(frame);
      }
    }


});
