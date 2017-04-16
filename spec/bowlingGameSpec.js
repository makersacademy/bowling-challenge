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

});