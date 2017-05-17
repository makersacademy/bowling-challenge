'use strict'

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game;
  });

  describe('#start_game', function() {

    it('starts the game with score 0', function() {
      expect(game.gameScore()).toEqual(0);
    });
  });

    it('starts the game with frame 1', function() {
      expect(game.currentFrame()).toEqual(1);
    });




})
