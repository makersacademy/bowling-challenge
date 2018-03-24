'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('When game starts', function(){
    it('generates an empty array containing score', function(){
      expect(game.rolls).toEqual([]);
    });

    it('is initialised with a score of 0', function(){
      expect(game.result).toEqual(0);
    });
  });

  describe('Score calculation for', function(){
    it('a gutter game', function(){
      rollMany(0, 20);
      expect(game.score()).toBe(0);
    });

    it('an all ones game', function(){
      rollMany(1, 20);
      expect(game.score()).toBe(20);
    });

    it('a spare', function(){
      game.roll(3);
      game.roll(7);
      game.roll(8);
      rollMany(0, 17);
      expect(game.score()).toBe(26);
    });

    it('a strike', function (){
      game.roll(10);
      game.roll(2);
      game.roll(7);
      rollMany(0, 16);
      expect(game.score()).toBe(28);
    });
  });

  var rollMany = function(pins, rolls) {
    for (var i = 0; i < 20; i++){
      game.roll(pins);
    }
  };
});
