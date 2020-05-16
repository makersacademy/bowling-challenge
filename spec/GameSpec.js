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
        it("calls add score method", function () {
            spyOn(game, 'addScore');
            game.play(4);
            expect(game.addScore).toHaveBeenCalled();
        });
        it('strike - so is an extra round', function () {
          for (let i = 0; i < 11; i += 1) {
            game.play(10)
          };
          game.play(2);
          expect(game.score[game.score.length - 1].roll).toEqual(3);
        });
        it('spare - so is an extra round', function () {
          for (let i = 0; i < 19; i += 1) {
            game.play(4)
          };
          game.play(6);
          game.play(2);
          expect(game.score[game.score.length - 1].roll).toEqual(3);
        });
        it('neither - so game ends', function () {
          for (let i = 0; i < 20; i += 1) {
            game.play(4)
          };
          expect(game.play(4)).toEqual("The game has ended.");
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

    describe('isExtraRound', function () {
        it('returns true for a strike', function(){
          for (let i = 0; i < 20; i += 1) {
            game.play(10)
          };
          expect(game.isExtraRound()).toEqual(true)
        });

        it('returns true for a spare', function(){
          for (let i = 0; i < 19; i += 1) {
            game.play(4)
          };
          game.play(6);
          expect(game.isExtraRound()).toEqual(true)
        });

        it('returns false for neither', function(){
          for (let i = 0; i < 20; i += 1) {
            game.play(4)
          };
          expect(game.isExtraRound()).toEqual(false)
        });
    });
});
