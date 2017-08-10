'use strict';

describe('Bowling Game', function() {

  var game;

  beforeEach(function() {
    game = new bowlingGame();
  });

  it('has no score by default', function() {
    expect(game.finalScore()).toEqual(0);
  });

  it('can score a gutter game', function() {
    rollMany(20, 0);
    expect(game.finalScore()).toEqual(0);
  });

  it('can score 20 rolls which knock down one pin per roll', function() {
    rollMany(20, 1);
    expect(game.finalScore()).toEqual(20);
  });

  it('can score a spare', function() {
    game.roll(5);
    game.roll(5);
    game.roll(2);
    rollMany(17,0);
    expect(game.finalScore()).toEqual(14);
  });

  it('can score a strike', function() {
    game.roll(10);
    game.roll(2);
    game.roll(3);
    rollMany(16, 0);
    expect(game.finalScore()).toEqual(20);
  });

  it('can score a perfect game', function() {
    rollMany(12, 10);
    expect(game.finalScore()).toEqual(300);
  });

  it('can score a frame of two rolls of one', function() {
    rollMany(2, 1);
    expect(game.finalScore()).toEqual(2);
  });

  it('can score four rolls of one but will not update the score mid frame', function() {
    rollMany(3,1);
    expect(game.finalScore()).toEqual(2);
    game.roll(1);
    expect(game.finalScore()).toEqual(4);
  });
// score can be called at any point in the game although it will only return the total of the frame.

  function rollMany(rolls, score) {
    for (var i = 0; i < rolls; i++) {
    game.roll(score);
    }
  }

});
