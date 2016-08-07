'use strict';

describe ('A game of 10 pin bowling', function(){
  var game;
  var i;

  beforeEach(function(){
    game = new Game();
  });

  function rollMany(n, pins) {
    for (i = 0; i < n; i++) {
      game.roll(pins);
    }
  }

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  it('calculates a game score for a "gutter" game', function(){
    rollMany(20,0);
    expect(game.gameTotal()).toEqual(0);
  });

  it('calculates a game score without strikes', function(){
    rollMany(20,2);
    expect(game.gameTotal()).toEqual(40);
  });

  it('calculates a game score for a game with a spare', function(){
    rollSpare();
    game.roll(4);
    rollMany(17, 0);
    expect(game.gameTotal()).toEqual(18);
  });

});
