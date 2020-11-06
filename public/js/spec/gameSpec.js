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
});