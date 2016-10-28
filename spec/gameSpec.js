'use strict';

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("starts a game with 10 pins", function() {
    expect(game.pins).toEqual(10);
  });

  it("ends a game when all 10 pins are knocked down", function() {
    expect(game.pins).toEqual(o);
  });
});
