'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('Gutter game', function(){
    it('rolls gutter game when players misses all pins', function(){
      rollMany(0, 20);
      expect(game.score()).toBe(0);
    });
  });

  describe('Player hits one pin every roll', function(){
    it('returns a score of 20 when player hits one pin per roll', function(){
      rollMany(1, 20);
      expect(game.score()).toBe(20);
    });
  });

  describe('Player makes a spare', function(){
    it('returns a score of 10 plus the score in the following roll', function(){
      game.roll(3);
      game.roll(7);
      game.roll(8);
      rollMany(0, 17);
      expect(game.score()).toBe(26);
    });
  });

  var rollMany = function(pins, rolls) {
    for (var i = 0; i < 20; i++){
      game.roll(pins);
    }
  };
});
