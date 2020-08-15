"use strict";

describe("Feature Test", function() {
  var game;
  var frame;
  beforeEach(function() {
    frame = new Frame([4, 4]);
    game = new Game();
  });
  describe("adding frames to game", function() {
    it("records 10 frames per game", function() {
      for (var i = 0; i <= 9; i += 1) {
        game.add(frame);
      }
      expect(game.frames).toContain(frame);
      expect(game.frames.length).toBe(10);
      game.add(frame);
      expect(game.frames.length).toBe(10);
      expect(game.frames.length).not.toBe(11);
    });
  });
  describe("Points total", function () {
    it("Gutter Game", function() {
      var gutterFrame = new Frame([0,0]);
      for (var i = 0; i < 10; i += 1) {
        game.add(gutterFrame);
      }
      expect(game.getTotalPoints()).toBe(0);
    });
    it("No spare/strike game", function() {
      for (var i = 0; i < 10; i += 1) {
        game.add(frame);
      }
      expect(game.getTotalPoints()).toBe(80);
    });
    it("Game of spares", function() {
      var spareFrame = new Frame([5, 5]);
      for (var i = 0; i < 9; i += 1) {
        game.add(spareFrame);
      }
      var finalFrame = new Frame([5, 5, 5]);
      game.add(finalFrame);
      expect(game.getTotalPoints()).toBe(150);
    });
    it("Game of strikes", function() {
      var strikeFrame = new Frame([10]);
      for (var i = 0; i < 9; i += 1) {
        game.add(strikeFrame);
      }
      var finalFrame = new Frame([10, 10, 10]);
      game.add(finalFrame);
      expect(game.getTotalPoints()).toBe(300);
    });
    it("half spares and then half strikes", function() {
      var spareFrame = new Frame([5, 5]);
      for (var i = 0; i < 5; i += 1) {
        game.add(spareFrame);
      }
      var strikeFrame = new Frame([10]);
      for (var i = 0; i < 4; i += 1) {
        game.add(strikeFrame);
      }
      var finalFrame = new Frame([10, 10, 10]);
      game.add(finalFrame);
      expect(game.getTotalPoints()).toBe(230);
    })
  });
});
