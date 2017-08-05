'use strict';

describe('Bowling Game', function() {

  var game;

  beforeEach(function() {
    game = new bowlingGame();
  });

  it('has no score by default', function() {
    expect(game.score()).toEqual(0);
  });

  it('can score a gutter game', function() {
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it('can score 20 rolls which knock down one pin per roll', function() {
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toEqual(20);
  });

  it('can score a spare', function() {
    game.roll(5);
    game.roll(5);
    game.roll(2);
    for (var i = 0; i < 17; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(14);
  });

});
