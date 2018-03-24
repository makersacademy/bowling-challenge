'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('total frame score when rolled twice in each frame', function() {
    game.roll(3, 5);
    expect(game.frameScore).toBe(8);
  });

  it('player scores when knock down pins', function() {
    game.roll(7, 2);
    game.score();
    expect(game.totalScore).toEqual(9);
  });

  it('final score', function() {
    expect(game.finalScore()).toEqual(150);
  });

  it('check after each set currnt roll changes by 2', function() {
    game.roll(2, 4);
    game.roll(3, 1);
    expect(game.currentRoll).toEqual(4);
  });

});
