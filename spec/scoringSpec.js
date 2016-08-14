'use strict';

describe('BowlingGame', function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  function rollMany(n, pins) {
    for(var i = 0; i < n; i++) {
      game.roll(pins);
    }
  }

  function rollSpare() {
    rollMany(2,5);
  }

  function rollStrike() {
    game.roll(10);
  }

  it('can handle a gutter game', function() {
    rollMany(20,0)
    expect(game.score()).toEqual(0);
  });

  it('can handle a game of ones', function() {
    rollMany(20,1)
    expect(game.score()).toEqual(20);
  });

  it('can handle one spare', function() {
    rollSpare();
    game.roll(3);
    rollMany(17,0);
    expect(game.score()).toEqual(16);
  });

  it('can handle one strike', function() {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).toEqual(24);
  });

  it('can handle a perfect game', function() {
    rollMany(12,10);
    expect(game.score()).toEqual(300);
  });

});
