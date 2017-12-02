describe('Bowling Game', function () {
    var game;
    beforeEach(function () {
        game = new Game();
    });

    describe('Game', function () {
        it('has 11 frames', function () {
            expect(game.frames.length).toEqual(11);
        });
    });
    describe('Frame', function () {
        it('has 2 rolls', function () {
            expect(game.frames[0]).toEqual([0, 0]);
        });
        it('player can roll twice and keep score', function () {
            rollStandardFirstFrame(game);
            rollStandardSecondFrame(game);
            expect(game.score()).toEqual(16);
        });
        it('can roll a spare and add bonus from next roll', function () {
            rollSpare(game);
            rollStandardSecondFrame(game);
            expect(game.score()).toEqual(20);
        });
        it('can roll a strike, skipping second roll and add a bonus from next two rolls', function () {
            rollStrike(game);
            rollStandardSecondFrame(game);
            expect(game.score()).toEqual(24);
        })
        xit('can handle a perfect game', function () {
            rollPerfectGame(game);
            expect(game.score()).toEqual(300)
        });
    });
});