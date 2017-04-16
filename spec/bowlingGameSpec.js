(function () {
   'use strict';
}());

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
    // As a bowler,
    // I want to see all the pins in a frame,
    // so that I can take 2 shots and get points
    it("sets the number of pins at start of a frame", function() {
      expect(bowlingGame.pins).toEqual(10);
    });

    // As a bowler,
    // At the end of the first shot,
    // I want to see how many pins are left,
    // so that I can know my next shot options
    it("displays pins left after the first shot", function() {
      bowlingGame.firstShot(2);
      bowlingGame.pinsInUse();
      expect(bowlingGame.pins).toEqual(8)
    });

    // As a bowler,
    // At the end of the second shot,
    // I want the pins to reset,
    // so that I can play a new frame
    it("resets pins at start of next frame ", function() {
      bowlingGame.firstShot(2);
      bowlingGame.secondShot(7);
      bowlingGame.pinsInUse();
      expect(bowlingGame.pins).toEqual(10)
    });
  });
});
