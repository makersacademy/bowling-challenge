'use strict';

describe('Update Game Status Unit Tests', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('.updateGameStatus', function() {
    it('sets game_status to Active if player rolls', function() {
      game.roll();
      game.updateGameStatus();
      expect(game.getCurrentGameStatus()).toEqual('Active');
    });
  });

});
