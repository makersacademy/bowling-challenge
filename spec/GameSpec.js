'use strict'

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('when a game starts:', function() {
    it('contains an empty scorecard', function(){
     expect(game._scorecard).toEqual([]);
     });
  });

  describe('while playing the game:', function() {
    it('records my score in a scorecard', function() {
      game.roll(1)
      game.roll(3)
      game.roll(9)
      expect(game._scorecard).toEqual([1,3,9]);
    });

    it('displays my current tot score', function() {
      game.roll(1)
      game.roll(3)
      game.roll(9)
      expect(game.tot()).toEqual(13);
    });

    it('raises an error if someone tries to knock down more than 10 pins', function() {
      expect(function() {game.roll(11);}).toThrow(new Error('There are only 10 pins'));
    });

  });

});
