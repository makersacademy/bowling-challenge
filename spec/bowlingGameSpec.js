'use strict';

describe('BowlingGame', function() {
    
    it('can roll a ball', function() {
       var game = new BowlingGame();
       game.roll(5);
       expect(game.frame).toEqual([5]);
    });

    it('can roll multiple times', function() {
        var game = new BowlingGame();
        game.roll(4);
        game.roll(3);
        expect(game.frame).toEqual([4, 3]);
    });
    
});