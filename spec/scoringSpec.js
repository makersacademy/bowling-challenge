'use strict';

describe('BowlingGame', function() {
  var game;

  beforeEach(function(){
    game = new BowlingGame();
  });

  function rollMany(n, pins) {
    for(var i = 0; i < n; i++) {
      game.roll(pins)
    }
  }

  it('can handle a gutter game', function() {
    rollMany(20, 0)
    expect(game.score()).toEqual(0);
  });

  it('can handle a game of all ones', function() {
    rollMany(20, 1)
    expect(game.score()).toEqual(20);
  });

});
