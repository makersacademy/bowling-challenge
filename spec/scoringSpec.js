'use strict';

describe('BowlingGame', function() {
var game;

beforeEach(function() {
  game = new BowlingGame();
});

function manyRoll(n, pins) {
  for(var i = 0; i < n; i++) {
    game.roll(pins);
  }
}

  it('can handle a gutter game', function() {
    manyRoll(20,0);
    expect(game.score()).toEqual(0);
  });

  it('can handle a game of all ones', function() {
    manyRoll(20,1);
    expect(game.score()).toEqual(20);
  });

  it('can handle one spare', function() {
    manyRoll(2,5);
    game.roll(3);
    manyRoll(17,0)
    expect(game.score()).toEqual(16);
  });
});
