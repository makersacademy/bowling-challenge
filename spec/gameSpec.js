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

    it('a perfect game', function(){
      rollMany(10, 12);
      expect(game.score()).toBe(300);
    });

    it('an average game', function(){
      game.roll(1); //frame1 roll1
      game.roll(4); //frame1 roll2
      game.roll(4); //frame2 roll2
      game.roll(5); //frame2 roll2
      game.roll(6); //frame3 roll1
      game.roll(4); //frame3 roll2 -- spare
      game.roll(5); //frame4 roll1
      game.roll(5); //frame4 roll2 -- spare
      game.roll(10); //frame5 roll1 -- strike
      // no roll for frame5 roll2 - strike
      game.roll(0); //frame6 roll1
      game.roll(1); //frame6 roll2
      game.roll(7); //frame7 roll1
      game.roll(3); //frame7 roll2 -- spare
      game.roll(6); //frame8 roll1
      game.roll(4); //frame8 roll2 -- spare
      game.roll(10); // frame9 roll1 -- strike
      // no roll for frame9 roll2
      game.roll(2); //frame10 roll1
      game.roll(8); //frame10 roll2 -- spare
      game.roll(6); //frame10 roll3 -- extra because of spare
      expect(game.score()).toBe(133);
    });
  });



  var rollMany = function(pins, rolls) {
    for (var i = 0; i < 20; i++){
      game.roll(pins);
    }
  };
});
