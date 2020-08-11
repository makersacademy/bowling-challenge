"use strict";

describe("Game", function() {
  var game;
  var frame;
  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });
  describe("getPoints()", function() {
    it("returns total of frame - no bonus points", function() {
      var aRoll = 4;
      frame.add(aRoll);
      frame.add(aRoll);
      game.add(frame);
      expect(game.getPoints()).toBe(aRoll + aRoll);
    });
  });
});
