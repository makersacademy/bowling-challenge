'use strict';

describe('Game', function () {

    var game;

    beforeEach(function () {
        game = new Game();
    });

    it('starts a new game with a score 0', function () {
        expect(game.currentScore()).toEqual(0);
    });

    it('can tally two rolls to the score', function () {
        game.roll1(3);
        game.roll2(5);
        game.addRolls();
        expect(game.roundTotalScore).toEqual(8);
    });

    it('returns an X if roll 1 is a strike or 10', function () {
        game.roll1(10);
        game.addRolls();
        expect(game.roundTotalScore).toEqual(10);
    });

    it('stores scores in rounds array', function () {
        game.roll1(3);
        game.roll2(5);
        game.addRolls();
        game.saveRolls();
        expect(game.rounds.reduce((a, b) => a + b, 0)).toEqual(8);
    });

    it('resets scores on new round', function () {
        game.roll1(3);
        game.roll2(5);
        game.addRolls();
        game.saveRolls();
        game.resetScore();
        expect(game.roundTotalScore).toEqual(0);
        expect(game.score1).toEqual(0);
        expect(game.score2).toEqual(0);
    });
    //it('if strike add next two frame points', function (){
    //    game.roll1(10);
    //    game.addRolls
    //})
    it('adds bonus points onto score after spare', function () {
        game.roll1(5);
        game.roll2(5);
        game.addRolls();
        game.saveRolls();
        game.resetScore();
        game.bonusPoints();
        game.roll1(5);
        game.roll2(4);
        game.addRolls();
        game.saveRolls();
        expect(game.currentScore)
    });
});