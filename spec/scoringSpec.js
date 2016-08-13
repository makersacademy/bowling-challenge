'use strict';

describe('BowlingGame', function() {
var game;

beforeEach(function() {
  game = new BowlingGame();
});

function manyRolls(n, pins) {
  for(var i = 0; i < n; i++) {
    game.roll(pins)
  }
}

  it('can handle a gutter game', function() {
    manyRolls(20,0);
    expect(game.score()).toEqual(0);
  });

  it('can handle a game of all ones', function() {
    manyRolls(20,1);
    expect(game.score()).toEqual(20);
  });

  it('can handle one spare', function() {
    manyRolls(2,5);
    game.roll(3);
    manyRolls(17,0);
    expect(game.score()).toEqual(16);
  });
});
