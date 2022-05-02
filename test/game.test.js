var Game = require("../lib/game");

describe("A game", function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  it("calculates a gutter game", function () {
    generateFrames([0, 0]);
    expect(game.score()).toEqual(0);
  });

  it("calculates a standard game", function () {
    generateFrames([1, 3]);
    expect(game.score()).toEqual(40);
  });

  it("calculates a game with spares", function () {
    generateFrames([5, 5], [5, 5, 5]);
    expect(game.score()).toEqual(150);
  });

  it("calculates a game with strikes", function () {
    generateFrames([10], [10, 10, 10]);
    expect(game.score()).toEqual(300);
  });

  it("calculated a whole game", function(){
    game.roll([2,3]);
    game.roll([7,3]);
    game.roll([2,8]);
    game.roll([3,4]);
    game.roll([10]);
    game.roll([3,3]);
    game.roll([2,3]);
    game.roll([10]);
    game.roll([2,3]);
    game.roll([10,10,3]);
    expect(game.score()).toEqual(107);
  });

  function generateFrames(frame, final_frame) {
    for (i = 0; i < 9; i++) {
      game.roll(frame);
    }

    game.roll(final_frame || frame);
  }
});
