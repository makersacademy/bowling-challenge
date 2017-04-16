(function () {
   'use strict';
}());

describe("Mid game", function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  describe("in a frame",function() {
    //As a bowler,
    //I want to fail my shots in a frame,
    //so that I can obtain 0 points for that frame
    it("obtain 0 points", function() {
      bowlingGame.firstShot(0)
      bowlingGame.secondShot(0)
      expect(bowlingGame.frameScore).toEqual(0)
    });

  });

  describe("spare shot", function() {
    // As a bowler,
    // I want to do a spare shot in my first frame
    // so that I can add an extra shot to my first frame
    xit("saves the spare shot to be calculated with the next shot", function() {
      bowlingGame.firstShot(2)
      bowlingGame.secondShot(8)
      bowlingGame.currentSpareScore()
      expect(bowlingGame.spare).toBe(true)
    });
  });

  describe("strike shot", function() {
    // As a bowler,
    // I want to do a strike shot in my first frame
    // So that I can get double points on my next frame
    xit("saves the strike shot to be calculated with the next 2 shots", function() {
      bowlingGame.firstShot(10)
      bowlingGame.currentStrikeScore()
      bowlingGame.firstShot(2)
      bowlingGame.firstShot(6)
      expect(bowlingGame.strike).toBe(true)
      bowlingGame.frameScoreReset;
    });
  });
});
