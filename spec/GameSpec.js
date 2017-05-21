'use strict';

describe('Game', function() {
    var game;
    beforeEach(function() {
        game = new Game();
    });
    describe('totalScore', function() {
        xit('returns both rolls for each frame', function() {
            game.updateTotalScore(11);
            expect(game.totalScore()).toEqual(11);
        });
        xit('returns total score up to but not including current frame', function() {
            game.updateTotalScore(11);
            expect(game.totalScore()).toEqual(11);
        });
    });
    describe('play', function() {
        it('rolls a ball and updates the frame score', function() {
            spyOn(Math, "random").and.returnValue(0.5);
            game.play();
            expect(game.scoreCard()).toEqual([[5]]);
        });
        xit('returns total score up to but not including current frame', function() {
            game.updateTotalScore(11);
            expect(game.totalScore()).toEqual(11);
        });
    });
    
});