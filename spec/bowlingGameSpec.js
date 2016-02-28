'use strict';

describe('BowlingGame', function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  function rollMany(n, pins) {
    for(var i = 0; i < n; i++) {
      game.roll(pins)
    }
  };

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  };

  it('can roll a gutter game', function() {
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });

  it('can roll all ones', function() {
    rollMany(20, 1);
    expect(game.score()).toEqual(20);
  });

  it('can roll a spare', function() {
    rollSpare();
    game.roll(2);
    rollMany(17, 0);
    expect(game.score()).toEqual(14);
  });
});