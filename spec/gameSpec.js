'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('Gutter game', function(){
    it('rolls gutter game when players misses all pins', function(){
      rollMany(0,20);
      expect(game.score()).toBe(0);
    });
  });

  describe('player hits one pin every rolls', function(){
    it('returns a score of 20 when player hits one pin per roll', function(){
      rollMany(1,20);
      expect(game.score()).toBe(20);
    });
  });

  describe('can roll a spare', function(){
    it('can roll a spare', function(){
      game.roll(5);
      game.roll(5);
      game.roll(3);
      rollMany(0,17);
      expect(game.score()).toBe(16);
    });
  });
  var rollMany = function(pins, rolls){
    for(var i = 0; i < rolls; i++){
      game.roll(pins);
    }
  };
});
