'use strict';

describe('BowlingGame', function() {

    let game;

    beforeEach(function() {
        game = new BowlingGame();
    });

    it('can roll a gutter game', function() {
        for (let i = 0; i < 21; i++) {
            game.roll(0);
        }
        expect(game.score()).toEqual(0);
    });

});