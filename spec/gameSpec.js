'use strict';

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("starts a game with 10 frames", function() {
    expect(game.frames.length).toEqual(10);
  });
});
