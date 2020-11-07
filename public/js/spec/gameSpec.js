'use strict';

describe('Game', function(){
  let game;

  beforeEach(function(){
    game = new Game();
  });
  
  describe('bowl', function(){
    it('adds pins to score in a regular frame', function(){
      for (var i = 0; i < 2; i ++){
        game.bowl(2);
      }
      expect(game.score()).toEqual(4);
    });
  });

  describe('newGame', function(){
    it('Wipes the current game score', function(){
      for (var i = 0; i < 2; i ++){
        game.bowl(2);
      }
      game.newGame();
      expect(game.score()).toEqual(0);
    });
  });
});