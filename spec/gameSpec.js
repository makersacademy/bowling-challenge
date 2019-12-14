"use strict";

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("has a default total score of 0", function() {
    expect(game.getTotalScore()).toEqual(0);
  });
});
