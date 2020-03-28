'use strict';

describe ('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  })

  describe('score', function()    {

    it('a game with all 0s should return a score of 0', function() {
      rollMany(0, 20);
      expect(game.returnScore()).toEqual(0);
    });

    it('a game with all 1s should return a score of 20', function() {
      rollMany(1, 20);
      expect(game.returnScore()).toEqual(20);
    });

    it('should return the correct score when a spare is rolled', function() {
      // spare frame(5-5) = 10 + next roll score
      game.roll(5);
      game.roll(5);
      game.roll(3);
      // finish the game with gutter balls
      rollMany(0, 17);
      expect(game.returnScore()).toEqual(16);
    })
  });

  // Refactor: function that rolls x pins x times
  function rollMany(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }
});
