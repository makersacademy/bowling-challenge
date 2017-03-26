var Game = require('../src/game');

describe("A game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('calculates a gutter game', function() {
    generateFrames([0, 0]);
    expect(game.score()).toEqual(0);
  });

  it('calculates a normal game', function() {
    generateFrames([1, 3]);
    expect(game.score()).toEqual(40);
  });

  it('calculates a game with spares', function() {
    generateFrames([5, 5], [5, 5, 5]);
    expect(game.score()).toEqual(150);
  });

  it('calculates a game with strikes', function() {
    generateFrames([10], [10, 10, 10]);
    expect(game.score()).toEqual(300);
  });

  function generateFrames(frame, last_frame) {
    for(var i = 0; i < 9; i++) {
      game.roll(frame);
    };

    game.roll(last_frame || frame);
  };
});