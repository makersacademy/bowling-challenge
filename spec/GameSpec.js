'use strict';

describe('Game', function() {
    var game;
    beforeEach(function() {
        game = new Game();
    });
    describe('totalScore', function() {
        xit('returns total score up to but not including current frame', function() {
            game.updateTotalScore(11);
            expect(game.totalScore()).toEqual(11);
        });
    });
});