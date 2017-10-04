"use strict";

describe("Game", function() {
  var game;
  beforeEach(function() {
    game = new Game;
  });

  it("handles a gutter game", function() {
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  });
});