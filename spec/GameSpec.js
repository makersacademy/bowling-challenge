'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  function rollLoop(n, pins) {
    for (var i = 0; i < n; i++) {
      game.roll(pins)
    }
  }

  it('calculates a gutter game', function() {
    rollLoop(20, 0);
    expect(game.score()).toEqual(0);
  });

});
