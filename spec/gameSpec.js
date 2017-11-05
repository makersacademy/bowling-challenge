'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();

  });

  it('should have a player', function() {
    expect(game.getPlayerName()).toEqual('Ollie');
  });

  // it('gets the total score', function() {
  //   expect(game.getTotalScore()).toEqual(0);
  // });

});
