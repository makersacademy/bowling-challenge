(function () {
   'use strict';
}());

describe("first frame", function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  describe("storing points", function() {
    // As a bowler,
    // I want my first frame to show my score
    // So that I can know how many points I made
    it("in first frame", function() {
      bowlingGame.firstShot(2);
      bowlingGame.secondShot(2);
      bowlingGame.calculateFrame1Score();
      expect(bowlingGame.frame1).toEqual([4])
    });
  });

  describe("spare", function() {
    // As a bowler,
    // I want to do a spare on first frame,
    // so that I can score extra points
    it("scores 10 points at end of frame", function() {
      bowlingGame.firstShot(2);
      bowlingGame.secondShot(8);
      bowlingGame.calculateFrame1Score();
      expect(bowlingGame.frame1).toEqual([10])
    });
  });

  describe("reset score", function() {
    // As a bowler,
    // I want each frame score to reset
    // so that I can start each new frame
    it("after frame ends", function() {
      bowlingGame.firstShot(2);
      bowlingGame.secondShot(8);
      bowlingGame.calculateFrame1Score();
      bowlingGame.frameScoreReset();
      expect(bowlingGame.frameScore).toEqual(0)
    });
  });


});