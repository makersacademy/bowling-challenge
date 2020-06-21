'use strict';

describe('BowlingGame', function() {

    var game;

    beforeEach(function() {
      game = new BowlingGame();
    });
    
    it('has default 10 pins for each frame', function() {
       game.roll(5);
       expect(game.pins).toEqual(5);
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

    it('can reset pins back to 10 after 1 frame', function() {
      game.roll(3);
      game.roll(4);
      game.resetPins();
      expect(game.pins).toEqual(10);
    });
});