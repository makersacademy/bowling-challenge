"use strict";

describe("Game", function() {
  var game;
  var frame;
  beforeEach(function() {
    game = new Game();
    });
  describe("getTotalPoints() returns total points for frame", function() {
    it("when no bonus points accrued", function() {
      frame = new Frame([4,4]);
      for (var i = 0; i <= 9; i += 1) {
        game.add(frame);
      }
      expect(game.frames.length).toBe(10);
      expect(game.getTotalPoints()).toBe(80);
    });
    it("when there is a spare", function() {
    });
    it("when there is a strike", function() {
    });
  });
});
