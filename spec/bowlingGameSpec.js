'use strict';

describe('BowlingGame', function() {

    var game;

    beforeEach(function() {
      game = new BowlingGame();
    });
    
    it('can roll once', function() {
       game.roll(5);
       expect(game.rolls).toEqual([5]);
    });

    it('can roll multiple times', function() {
       game.roll(4);
       game.roll(3);
       expect(game.rolls).toEqual([4, 3]);
    });
    
    it('calculate my total score', function() {
      for ( var i = 1; i < 11; i++ ) {
        game.roll(4);
      }
      for ( var i = 1; i < 11; i++ ) {
        game.roll(3);
      }
      expect(game.score()).toEqual(70);
    });

    it('can roll a Gutter Game', function() {
      for ( var i = 1; i < 21; i++) { game.roll(0); }
      expect(game.score()).toBe(0);
    });

});