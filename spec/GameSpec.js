'use strict';

describe('Game', function() {
    var game;
    beforeEach(function() {
        game = new Game();
    });
    describe('getScoreCard', function() {
        it('returns each frame that has been started', function() {
            for (var i = 0; i < 6; i++) {
                game.play();
            }
            expect(game.getScoreCard().length).toEqual(6);
        });
        xit('returns both rolls for each frame', function() {
            for (var i = 0; i < 6; i++) {
                game.play();
            }
            expect(game.getScoreCard()[1].length).toEqual(2);
        });
    });
    describe('play', function() {
        it('rolls a ball and updates the frame score', function() {
            spyOn(Math, "random").and.returnValue(0.5);
            game.play();
            expect(game.getScoreCard()).toEqual([[5]]);
        });
    });
    describe('getTotalScore', function() {
        it('returns total score', function() {
            spyOn(Math, "random").and.returnValues(0.5, 0.9, 0.1, 0.5);
            for (var i = 0; i < 5; i++) {
                game.play();
                console.log(game.getScoreCard()[i]);
            }
            expect(game.getTotalScore()).toEqual( );
        });
    });

});