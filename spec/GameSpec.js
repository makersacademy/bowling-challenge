'use strict'

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('When a game starts:', function() {
    it('Contains an empty scorecard.', function(){
     expect(game._scorecard).toEqual([]);
     });
  });

  describe('While playing the game:', function() {
    it('My scorecard records my score.', function() {
      game.roll(1)
      game.roll(3)
      game.roll(9)
      expect(game._scorecard).toEqual([1,3,9]);
    });

    it('Displays my current tot score.', function() {
      game.roll(1)
      game.roll(3)
      game.roll(9)
      expect(game.tot()).toEqual(13);
    });

  });

});
