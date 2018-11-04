'use strict';

describe('game', function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  describe('Play a game', function() {
    it('can roll a gutter game', function() {
      rollMany(0,20);
      expect(game.score()).toBe(0);
    });

    it('can roll all ones', function() {
      rollMany(1,20);
      expect(game.score()).toBe(20);
    });

    it('can roll a spare', function() {
      game.roll(2)
      game.roll(8)
      game.roll(5)
      rollMany(0,17);
      expect(game.score()).toBe(20);
    });

    it('can roll a strike', function() {
      game.roll(10)
      game.roll(1)
      game.roll(5)
      rollMany(0,16);
      expect(game.score()).toBe(22);
    });

    it('can roll a perfect game', function() {
      rollMany(10,12);
      expect(game.score()).toBe(300);
    });
  });

  var rollMany = function(pins, rolls) {
    for (var i = 0; i < 20; i++) {
      game.roll(pins);
    }
  };
});
