"use strict";

describe("Feature Test", function() {
  var game, frame, strikeFrame, spareFrame;
  beforeEach(function() {
    game = new Game();
    frame = new Frame([4, 4]);
    strikeFrame = new Frame([10]);
    spareFrame = new Frame([5, 5]);
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
      var gutterFrame = new Frame([0, 0]);
      for (var i = 0; i <= 9; i += 1) {
        game.add(gutterFrame);
      }
      expect(game.totalPoints()).toBe(0);
    });
    it("No spare/strike game", function() {
      for (var i = 0; i < 10; i += 1) {
        game.add(frame);
      }
      expect(game.totalPoints()).toBe(80);
    });
    it("Game of spares", function() {
      for (var i = 0; i < 9; i += 1) {
        game.add(spareFrame);
      }
      var finalFrame = new Frame([5, 5, 5]);
      game.add(finalFrame);
      expect(game.totalPoints()).toBe(150);
    });
    it("Game of strikes", function() {
      for (var i = 0; i < 9; i += 1) {
        game.add(strikeFrame);
      }
      var finalFrame = new Frame([10, 10, 10]);
      game.add(finalFrame);
      expect(game.totalPoints()).toBe(300);
    });
    it("half spares and then half strikes", function() {
      for (var i = 0; i < 5; i += 1) {
        game.add(spareFrame);
      }
      for (i = 0; i < 4; i += 1) {
        game.add(strikeFrame);
      }
      var finalFrame = new Frame([10, 10, 10]);
      game.add(finalFrame);
      expect(game.totalPoints()).toBe(230);
    });
    it("half strikes and then half spares", function() {
      for (var i = 0; i < 5; i += 1) {
        game.add(strikeFrame);
      }
      for (i = 0; i < 4; i += 1) {
        game.add(spareFrame);
      }
      var finalFrame = new Frame([5, 5, 5]);
      game.add(finalFrame);
      expect(game.totalPoints()).toBe(210);
    });
  });
});
