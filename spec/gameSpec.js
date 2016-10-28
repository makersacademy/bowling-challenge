'use strict';

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("starts a game with 10 frames", function() {
    expect(game.frame).toEqual(10);
  });
});
