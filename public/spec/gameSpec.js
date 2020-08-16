"use strict";

describe("Game", function() {
  var game, frame, spareFrame, strikeFrame;
  beforeEach(function() {
    game = new Game();
    frame = new Frame([4, 4]);
    spareFrame = new Frame([5, 5]);
    strikeFrame = new Frame([10]);
    });
  describe("totalPoints()", function() {
    it("when no bonus points accrued", function() {
      for (var i = 0; i <= 9; i += 1) {
        game.add(frame);
      }
      expect(game.totalPoints()).toBe(80);
    });
    it("when there is a spare", function() {
      game.add(spareFrame);
      game.add(frame);
      expect(game.totalPoints()).toBe(22);
    });
    it("when there is a strike", function() {
      game.add(strikeFrame);
      game.add(frame);
      expect(game.totalPoints()).toBe(26);
    });
    it("when there is a strike and then a spare", function() {
      game.add(strikeFrame);
      game.add(spareFrame);
      expect(game.totalPoints()).toBe(30);
    });
    it("when there is a spare and then a strike", function() {
      game.add(spareFrame);
      game.add(strikeFrame);
      expect(game.totalPoints()).toBe(30);
    });
  });
});
