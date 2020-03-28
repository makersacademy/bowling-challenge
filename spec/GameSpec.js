'use strict';

describe ('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('score', function()    {

    it('a gutter game returns a score of 0', function() {
      // gutter game: 20 rolls with no pins
      rollMany(0, 20);
      expect(game.returnScore()).toEqual(0);
    });

    it('a game with all 1s returns a score of 20', function() {
      rollMany(1, 20);
      expect(game.returnScore()).toEqual(20);
    });

    it('a spare frame has a bonus', function() {
      // spare frame(5-5) = 10 + next roll score
      game.roll(5);
      game.roll(5);
      game.roll(3);
      // finish the game with gutter balls
      rollMany(0, 17);
      expect(game.returnScore()).toEqual(16);
    });

    it('a strike frame has a bonus', function() {
      // strike frame(10) = 10 + next two rolls scores
      game.roll(10);
      game.roll(1);
      game.roll(1);
      // finish the game with gutter balls
      rollMany(0, 17);
      expect(game.returnScore()).toEqual(14);
    });

    it('a perfect game returns a score of 300', function(){
      // perfect game: 12 strikes
      rollMany(10, 12);
      expect(game.returnScore()).toEqual(300);
    });
  });

  // Refactor: function that rolls x pins x times
  function rollMany(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }
});
