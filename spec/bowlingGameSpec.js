'use strict';

describe('Bowling Game', function() {

  var game;

  beforeEach(function() {
    game = new bowlingGame();
  });

  it('has no score by default', function() {
    expect(game.score()).toEqual(NaN);
  });

  it('can score a gutter game', function() {
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });

  it('can score 20 rolls which knock down one pin per roll', function() {
    rollMany(20, 1);
    expect(game.score()).toEqual(20);
  });

  it('can score a spare', function() {
    game.roll(5);
    game.roll(5);
    game.roll(2);
    rollMany(17,0);
    expect(game.score()).toEqual(14);
  });

  it('can score a strike', function() {
    game.roll(10);
    game.roll(2);
    game.roll(3);
    rollMany(16, 0);
    expect(game.score()).toEqual(20);
  });

  it('can score a perfect game', function() {
    rollMany(12, 10);
    expect(game.score()).toEqual(300);
  });

  function rollMany(rolls, score) {
    for (var i = 0; i < rolls; i++) {
    game.roll(score);
    }
  }

});
