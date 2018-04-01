'use strict'

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('when a game starts:', function() {
    it('contains an empty scorecard', function() {
     expect(game._scorecard).toEqual([]);
     });
  });

  describe('while playing the game:', function() {
    it('records my score', function() {
      game.roll(1)
      game.roll(3)
      expect(game._scorecard).toEqual([1,3]);
    });

    it('displays my tot score', function() {
      game.roll(1)
      game.roll(3)
      expect(game.tot()).toEqual(4);
    });

    it('raises an error if someone tries to knock down more than 10 pins', function() {
      expect(function() {game.roll(11);}).toThrow(new Error('There are only 10 pins'));
    });
  });

  describe('when the game finishes', function() {
    it('has a total of 10 frames', function() {
      for (var i=0; i<22; i++) {
        game.roll(5)
      }
      expect(game._scorecard.length).toEqual(20);
    });
  });

});
