"use strict";

describe("Game", function() {
  var game;
  var frame;
  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });
  describe("getTotalPoints()", function() {
    it("returns total when no bonus points accrued", function() {
      var aRoll = 4;
      frame.add(aRoll);
      frame.add(aRoll);
      game.add(frame);
      expect(game.getTotalPoints()).toBe(aRoll + aRoll);
      game.add(frame);
      expect(game.getTotalPoints()).toBe(aRoll * 4);
    });
    it("returns total inclusive of bonus points when there is a spare", function() {
      var anotherRoll = 5;
      var aRoll = 4;
      frame.add(anotherRoll);
      frame.add(anotherRoll);
      game.add(frame);
      var anotherFrame = new Frame();
      anotherFrame.add(aRoll);
      anotherFrame.add(aRoll);
      game.add(anotherFrame);
      expect(game.getTotalPoints()).toBe(2 * anotherRoll + 3 * aRoll);
    });
  });
});
