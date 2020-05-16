describe('Game', function () {
    'use strict';
    var scorecard;
    var game;
    beforeEach(function () {
        scorecard = jasmine.createSpy('ScoreCard');
        game = new Game();
    });

    it("starts with a frame of 1 and roll 1", function () {
        expect(game.frame).toEqual(1);
        expect(game.roll).toEqual(1);
    });

    describe('play', function () {
        it("increments roll by 1 if roll was 1", function () {
            game.play(4);
            expect(game.roll).toEqual(2);
        });
        it("increments frame by 1 if roll was 2", function () {
            game.roll = 2;
            game.play(4);
            expect(game.frame).toEqual(2);
            expect(game.roll).toEqual(1);
        });
        it("calls end method if number of frames exceeds 10", function () {
            spyOn(game, 'end');
            game.frame = 11;
            game.play(4);
            expect(game.end).toHaveBeenCalled();
        });
        it("calls add score method", function () {
            spyOn(game, 'addScore');
            game.play(4);
            expect(game.addScore).toHaveBeenCalled();
        });
    });

    describe('end', function () {
        it('prints message saying game has ended', function () {
            expect(game.end).toMatch("The game has ended.");
        });
    });

    describe('addScore', function(){
        it('adds score from round to array as hash', function () {
            game.play(4);
            expect(game.score).toEqual([{frame: 1, roll: 1, knocked: 4}]);
        });
    });
});
