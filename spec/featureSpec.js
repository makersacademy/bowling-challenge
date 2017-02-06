'use strict';

describe('Feature: ', function() {
    var game;
    var frame;

    beforeEach(function() {
        game = new Game();
        frame = game._frame;
    });

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

    it('I can take my first turn and knock some pins down', function() {
        expect(frame._currentTurn).toEqual(0);
        game.bowl(8);
        expect(frame._scores[0]).toEqual(8);
    });

    it('I can take my second turn and knock some pins down', function() {
        expect(frame._currentTurn).toEqual(0);
        game.bowl(3);
        expect(frame._scores[0]).toEqual(3);
        expect(frame._currentTurn).toEqual(1);
        game.bowl(6);
        expect(frame._scores[1]).toEqual(6);
    });

    it('I can fail to knock any pins down (gutter ball)', function() {
        game.bowl(0);
        expect(frame._scores[0]).toEqual(0);
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

    describe('Finishing a game', function() {

        it('I can finish a game', function() {
            bowlMany(4, 20);
            expect(function() {
                game.bowl(2);
            }).toThrowError("The game has ended")
        });

        it('I can bowl a gutter game (hit no pins...ever)', function() {
            bowlMany(20, 0);
            expect(game.score()).toEqual(0);
        });

        it('I can bowl a perfect game', function() {
            bowlMany(12, 10);
            expect(game.score()).toEqual(300);
        });

    });

});
