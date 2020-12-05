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

    it('can roll a all ones', function() {
        for (let i = 0; i < 21; i++) {
            game.roll(1);
        }
        expect(game.score()).toEqual(20);
    });

    it('can roll a spare', function() {
        game.roll(5);
        game.roll(5);
        game.roll(3);
        for (let i = 0; i < 18; i++) {
            game.roll(0);
        }
        expect(game.score()).toEqual(16);
    });

    it('can roll a strike', function() {
        game.roll(10);
        game.roll(4);
        game.roll(3);
        for (let i = 0; i < 17; i++) {
            game.roll(0);
        }
        expect(game.score()).toEqual(24);
    });


});