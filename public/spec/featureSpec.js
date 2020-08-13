"use strict";

describe("Feature Test", function() {
  var game;
  var frame;
  beforeEach(function() {
    frame = new Frame();
    game = new Game();
  });
  describe("adding frames to game", function() {
    it("records 10 frames per game", function() {
      for (var i = 1; i <= 10; i += 1) {
        game.add(frame);
      }
      expect(game.frames).toContain(frame);
      expect(game.frames.length).toBe(10);
      game.add(frame);
      expect(game.frames.length).toBe(10);
      expect(game.frames.length).not.toBe(11);
    });
  });
});
