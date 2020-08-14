"use strict";

describe("Game", function() {
  var game;
  var frame;
  beforeEach(function() {
    game = new Game();
    });
  describe("getTotalPoints() returns total points for game", function() {
    it("when no bonus points accrued", function() {
      frame = new Frame([4, 4]);
      for (var i = 0; i <= 9; i += 1) {
        game.add(frame);
      }
      expect(game.frames.length).toBe(10);
      expect(game.getTotalPoints()).toBe(80);
    });
    it("when there is a spare", function() {
      frame = new Frame([5, 5]);
      var anotherFrame = new Frame([4, 4]);
      game.add(frame);
      game.add(anotherFrame);
      expect(game.getTotalPoints()).toBe(22);
    });
    it("when there is a strike", function() {
      frame = new Frame([10]);
      var anotherFrame = new Frame([4, 4]);
      game.add(frame);
      game.add(anotherFrame);
      expect(game.getTotalPoints()).toBe(26);
    });
    it("when there is a strike and then a spare", function() {
      frame = new Frame([10]);
      var spareFrame = new Frame([5, 5]);
      game.add(frame);
      game.add(spareFrame);
      expect(game.getTotalPoints()).toBe(30);
    });
  });
});
