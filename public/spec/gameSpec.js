"use strict";

describe("Game", function() {
  var game;
  var frame;
  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });
  describe("getTotalPoints()", function() {
    it("returns total - no bonus points accrued", function() {
      var aRoll = 4;
      frame.add(aRoll);
      frame.add(aRoll);
      game.add(frame);
      expect(game.getTotalPoints()).toBe(aRoll + aRoll);
    });
  });
});
