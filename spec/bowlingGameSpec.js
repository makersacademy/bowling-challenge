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

  describe("first frame", function() {
    // As a bowler,
    // I want to start a game of bowling,
    // so that I can get points
    it("start new game", function() {
      expect(bowlingGame.total).toEqual(0);
    });
    // As a bowler,
    // I want to have 2 shots,
    // so that I can complete a frame
    it("complete a frame", function() {
      bowlingGame.firstShot(2)
      bowlingGame.secondShot(4)
      expect(bowlingGame.total).toEqual(6)
    });
    // As a bowler,
    // I want to do a spare shot in my first frame
    // so that I can add an extra shot to my first frame
    it("starts with a spare shot", function() {
      bowlingGame.firstShot(2)
      bowlingGame.secondShot(8)
      bowlingGame.currentScore()
      expect(bowlingGame.spare).toBe(true)
    });
  });
});
