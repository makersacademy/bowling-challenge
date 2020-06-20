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
    
    it('calculate my total score', function() {
        var game = new BowlingGame();
        game.roll(5);
        game.roll(4);
        expect(game.score()).toEqual(9);
    });
});