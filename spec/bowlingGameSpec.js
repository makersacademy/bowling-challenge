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

  it('can roll a gutter game', function() {
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });
});