'use strict';

describe('Bowling', function() {
    var game;

    beforeEach(function() {
        game = new Bowling();
    });


    it('should return a score of 0 if all rolls were 0', () => {
        for (var i = 0; i < 20; i++) {
            game.roll(0);
        }
        expect(game.score()).toEqual(0);
    });

    it('should return a score of 20 if all rolls were 1', () => {
        for (var i = 0; i < 20; i++) {
            game.roll(1);
        }
        expect(game.score()).toEqual(20);
    });

    it('should calculate the bonus if there is a spare', () => {
        game.roll(5);
        game.roll(5);
        game.roll(1);
        for (var i = 0; i < 17; i++) {
            game.roll(0);
        }
        expect(game.score()).toEqual(12);
    });

    it('should calculate the bonus if there is a strike', () => {
        game.roll(10);
        game.roll(1);
        game.roll(1);
        for (var i = 0; i < 17; i++) {
            game.roll(0);
        }
        expect(game.score()).toEqual(14);
    });

    it('can calculate a perfect game', () => {
        for (var i = 0; i < 12; i++) {
            game.roll(10);
        }
        expect(game.score()).toEqual(300);
    });

    it('can calculate all spare', () => {
        for (var i = 0; i < 21; i++) {
            game.roll(5);
        }
        expect(game.score()).toEqual(150);
    });
});