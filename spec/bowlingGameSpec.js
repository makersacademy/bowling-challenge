describe('BowlingGame', function () {
    "use strict";

    let game;

    beforeEach(function () {
        game = new BowlingGame();
    });

    function rollMany(times, pins) {
        for (let i = 0; i < times; i++) {
            game.roll(pins);
        }
    }

    function rollSpare() {
        game.roll(5);
        game.roll(5);
    }

    function rollStrike() {
        game.roll(10);
    }

    describe('gutter game', function () {
        it('scores 0', function () {
            rollMany(20, 0);
            expect(game.score()).toEqual(0);
        });
    });

    describe('game of all ones', function () {
        it('scores 20', function () {
            rollMany(20, 1);
            expect(game.score()).toEqual(20);
        });
    });

    describe('one spare followed by a three', function () {
        it('scores 16', function () {
            rollSpare();
            game.roll(3);
            rollMany(17, 0);
            expect(game.score()).toEqual(16);
        });
    });

    describe('one strike followed by a three and a four', function () {
        it('scores 24', function () {
            rollStrike();
            game.roll(3);
            game.roll(4);
            rollMany(16, 0);
            expect(game.score()).toEqual(24);
        });
    });

    describe('perfect game', function () {
        it ('scores 300', function () {
            rollMany(12, 10);
            expect(game.score()).toEqual(300);
        });
    });
});