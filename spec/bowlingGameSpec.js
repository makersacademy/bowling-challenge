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
      game.roll(5);
      game.roll(4);
      expect(game.score()).toEqual(9);
    });

});