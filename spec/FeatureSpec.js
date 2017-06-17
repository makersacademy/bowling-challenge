'use strict';

describe('Feature test', function () {
    var bowlingGame;

    beforeEach(function () {
        bowlingGame = new BowlingGame();

    });

    describe('A Bowling Game ', function () {

        it('calculates a gutter game', function () {
            expect(bowlingGame.getTotalScore()).toEqual(0);
        });
    });


});
