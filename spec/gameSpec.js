"use strict";

describe("Game", function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  it("can roll a Gutter Game", function () {
    for (var i = 0; i <= 20; i++) {
      game.roll(0);
    };
    expect(game.getScore()).toEqual(0);
  });

});
