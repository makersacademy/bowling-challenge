(function () {
   'use strict';
}());

describe("bowling game", function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  describe("rules", function() {
    // As a bowler,
    // I want to follow bowling game rules,
    // so that I can finish my game after 10 frames
    it("has 10 frames", function() {
      expect(bowlingGame.frames.length).toEqual(10);
    });
  });

  describe("on start", function() {
    // As a bowler,
    // I want to start a game of bowling,
    // so that I can get points
    it("has a total of 0", function() {
      expect(bowlingGame.total).toEqual(0);
    });
  });

  describe("adding scores to frame 1", function() {
    // As a bowler,
    // I want to knock some pins on my first shot
    // so that I can get some points
    it("on first frame shot", function() {
      bowlingGame.firstShot(2);
      expect(bowlingGame.frames[0].firstShotScore).toEqual(2)
    });

    it("ending frame shot", function() {
      bowlingGame.secondShot(4);
      expect(bowlingGame.frames[0].secondShotScore).toEqual(4)
    });
  });

  describe("shots in a frame", function() {
    // As a bowler,
    // I want to do a spare shot in a frame
    // so that I can add an extra score to this frame
    it("make a spare", function() {
      bowlingGame.firstShot(2);
      bowlingGame.secondShot(8);
      expect(bowlingGame.spare).toBe(true)
    });
  });

});