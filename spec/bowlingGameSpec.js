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

  it('can score multiple spares', function() {
    rollMany(20, 5);
    game.roll(5);
    expect(game.score()).toEqual(150);
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

  it('can score a frame of two rolls of one', function() {
    rollMany(2, 1);
    expect(game.score()).toEqual(2);
  });

  it('can score four rolls of one but will not update the score mid frame', function() {
    rollMany(3,1);
    expect(game.score()).toEqual(2);
    game.roll(1);
    expect(game.score()).toEqual(4);
  });

  it('stops the score at 10 frames and returns the final score', function() {
    rollMany(20,1);
    expect(game.roll(1)).toEqual('game over');
  });

  function rollMany(rolls, score) {
    for (var i = 0; i < rolls; i++) {
    game.roll(score);
    }
  }

});
