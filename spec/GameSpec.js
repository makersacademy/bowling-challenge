'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('player can roll the ball', function() {
    expect(game.roll()).toBe(true);
  });

  it('player scores when knock down pins', function() {
    expect(game.score()).toEqual(4);
  });

});
