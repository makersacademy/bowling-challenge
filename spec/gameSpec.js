describe('Bowling Game', function () {
    var game;
    beforeEach(function () {
        game = new Game();
    });

    describe('Game', function () {
        it('can roll standard game and keep score', function () {
            standardGame(game);
            expect(game.score()).toEqual(60);
        });
        it('can roll a gutter game and keep score', function () {
            gutterGame(game);
            expect(game.score()).toEqual(0);
        });
        it('can roll a spare and add a bonus from the next roll', function () {
            rollSpare(game);
            rollStandardFrame(game);
            expect(game.score()).toEqual(20);
        });
        it('can roll a strike, skipping second roll and add a bonus from next two rolls', function () {
            rollStrike(game);
            expect(game.score()).toEqual(30);
        })
        it('can handle a perfect game', function () {
            perfectGame(game);
            expect(game.score()).toEqual(300)
        });
    });
});