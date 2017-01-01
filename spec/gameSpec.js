'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game(Frame);
  });

  describe('calculates the scores', function() {

  it('calculates the score for one roll', function() {
    game.roll(1);
    expect(game.finalSum()).toBe(1);
  });

  it('calculates the score for two rolls', function() {
    game.roll(1);
    game.roll(5);
    expect(game.currentFrame()).toBe(2);
    expect(game.finalSum()).toBe(6);
  });
});

  describe('calculates the bonus', function() {

  it('calculates the bonus and score for strike', function() {
    game.roll(10);
    game.roll(5);
    game.roll(2);
    expect(game.currentFrame()).toBe(3);
    expect(game.finalSum()).toBe(24);
  });
});
});
