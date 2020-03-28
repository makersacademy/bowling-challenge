'use strict';

describe ('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  })

  describe('initialize', function() {

    it('starts score at zero', function() {
      expect(game.returnScore()).toEqual(0);
    })
  });

  describe('score', function()    {

    it('a game with all 0s should return a score of 0', function() {
      rollMany(0, 20);
      expect(game.returnScore()).toEqual(0);
    });

    it('a game with all 1s should return a score of 20', function() {
      rollMany(1, 20);
      expect(game.returnScore()).toEqual(20);
    });
  });

  // Refactor: function that rolls x pins x times
  function rollMany(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }
});
