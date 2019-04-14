'use strict';

describe("BowlingGame", function () {
  var bowlingGame;
  var frame;

  beforeEach(function() {
    frame = new Frame();
    bowlingGame = new BowlingGame();
  });
  
  describe('recordFrame', function () {

    it("records the frame object", function () {
      bowlingGame.frame.roll(1);
      bowlingGame.frame.roll(2);
      bowlingGame.recordFrame();
      expect(bowlingGame.frame.pinsRolled).toEqual([1,2]);
      expect(bowlingGame.frames.length).toEqual(1);
    });

  });

  describe('newFrame', function () {

    it("makes a new frame", function () {
      bowlingGame.newFrame();
      expect(bowlingGame.frame.pinsRolled).toEqual([]);
    });

  });

  describe('addScore', function () {

    it("adds a frame score of 3 for rolls [1,2] to scorecard if it is not a strike or a spare", function () {
      bowlingGame.frame.roll(1);
      bowlingGame.frame.roll(2);
      bowlingGame.recordFrame();
      bowlingGame.addScore(bowlingGame.frameIndex);
      expect(bowlingGame.scoreCard).toEqual([3]);
    });

  });

  describe('finalScore', function () {

    it("final score of 0 for a gutter game", function () {
      bowlingGame.frame.roll(0);
      bowlingGame.frame.roll(0);
      bowlingGame.recordFrame();
      bowlingGame.addScore(bowlingGame.frameIndex);
      expect(bowlingGame.finalScore(bowlingGame.scoreCard)).toEqual(0);
    });

  });

});