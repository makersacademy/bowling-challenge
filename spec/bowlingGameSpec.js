"use strict";

describe("bowling game", function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  describe("structure rules", function() {
    // As a bowler,
    // I want to follow bowling game rules,
    // so that I can finish my game after 10 frames
    it("has 10 frames", function() {
      expect(bowlingGame.frames).toEqual(10);
    });

    it("resets frame score after a normal frame", function() {
      bowlingGame.firstShot(2);
      bowlingGame.secondShot(4);
      bowlingGame.frameScoreReset();
      expect(bowlingGame.frameScore).toEqual(0);
    });
  });


});
