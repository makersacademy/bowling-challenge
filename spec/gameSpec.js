'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('Gutter game', function(){
    it('rolls gutter game when players misses all pins', function(){
      for (var i = 0; i < 20; i++){
        game.roll(0)
      }
      expect(game.score()).toBe(0);
    });
  });
});
