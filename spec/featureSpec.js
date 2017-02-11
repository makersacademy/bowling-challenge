'use strict';

describe('Feature: ', function() {
    var game;
    var frame;

    var bowlMany = function(n, pins) {
        for (var i = 0; i < n; i++) {
            game.bowl(pins)
        }
    }

    var bowlSpare = function() {
        game.bowl(5);
        game.bowl(5);
    }

    var bowlStrike = function() {
        game.bowl(10);
    }

    beforeEach(function() {
        game = new Game();
        game.start();
        frame = game.currentFrame();
    });

    describe('Playing a game', function() {

        it('I can take my first turn and knock some pins down', function() {
            expect(frame._turnsRemaining).toEqual(2);
            game.bowl(8);
            expect(frame._turnsRemaining).toEqual(1);
            expect(frame.firstScore()).toEqual(8);
        });

        it('I can take my second turn and knock some pins down', function() {
            expect(frame._turnsRemaining).toEqual(2);
            game.bowl(3);
            expect(frame.firstScore()).toEqual(3);
            expect(frame._turnsRemaining).toEqual(1);
            game.bowl(6);
            expect(frame._scores[1]).toEqual(6);
        });

        it('I can fail to knock any pins down (gutter ball)', function() {
            game.bowl(0);
            expect(frame.firstScore()).toEqual(0);
        });

        it('I can get a spare', function() {
            game.bowl(8);
            game.bowl(2);
            expect(frame.isSpare()).toBeTruthy();
        });

        it('I can get a strike', function() {
            game.bowl(10);
            expect(frame.isStrike()).toBeTruthy();
        });

    });

    describe('Finishing a game', function() {

        it('I can finish a game', function() {
            bowlMany(20, 4);
            expect(game.bowl(1)).toEqual("The game has ended");
        });

        it('I can bowl a gutter game (hit no pins...ever)', function() {
            bowlMany(20, 0);
            expect(game.score()).toEqual(0);
        });

        it('I can bowl a perfect game (all strikes)', function() {
            bowlMany(12, 10);
            expect(game.score()).toEqual(300);
        });

    });

});
