'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('initializes the game score as 0', function() {
    expect(game.getCurrentScore()).toEqual(0);
  });

});
