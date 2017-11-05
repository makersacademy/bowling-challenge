'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();

  });

  it('should have a player', function() {
    expect(game.getPlayerName()).toEqual('Ollie');
  });

});
