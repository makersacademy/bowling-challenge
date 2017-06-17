'use strict';

describe('Gutter game', function() {
  var game;

  beforeEach(function() {
    game = new Game;
  });

  it('Has a score of 0, does not allow player to bowl again', function() {
    for(var i = 0; i < 20; i++) { game.bowl(0) };
    game.calculateScore();
    expect(game.currentScore()).toEqual(0);
    expect(function() { game.bowl(0) }).toThrow(new Error('Cannot bowl - game is complete'));
  });
});
