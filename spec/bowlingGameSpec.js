describe('BowlingGame', function () {
    let game;

    beforeEach(function () {
        game = new BowlingGame();
    });

    function rollMany(times, pins) {
        for (let i = 0; i < times; i++) {
            game.roll.call(game, pins)
        }
    }

    describe('gutter game', function () {
        it('scores 0', function () {
            rollMany(20, 0);
            expect(game.score()).toEqual(0);
        })
    });

    describe('game of all ones', function () {
        it('scores 20', function () {
            rollMany(20, 1);
            expect(game.score()).toEqual(20);
        })
    });
});