describe('Bowling Game', function () {
    var game;
    beforeEach(function () {
        game = new Game();
    });
    describe('Game', function () {
        it('has 10 frames', function () {
            expect(game.frames.length).toEqual(10);
        });
    });
    describe('Frame', function () {
        it('has 2 rolls', function () {
            expect(game.frames[0]).toEqual([0, 0]);
        });
        it('player can roll twice and keep score', function () {
            game.scoreRoll(0, 0, 3)
            game.scoreRoll(0, 1, 4)
            game.scoreRoll(1, 0, 9)
            game.scoreRoll(1, 1, 0)
            expect(game.score()).toEqual(16)
        });
        it('can roll a spare and add bonus from next roll', function() {
            game.scoreRoll(0, 0, 6)
            game.scoreRoll(0, 1, 4)
            game.scoreRoll(1, 0, 3)
            game.scoreRoll(1, 1, 4)
            expect(game.score()).toEqual(20)
        });
        it('can roll a strike, skipping second roll and add a bonus from next two rolls', function() {
            game.scoreRoll(0, 0, 10)
            game.scoreRoll(1, 0, 3)
            game.scoreRoll(1, 1, 4)
            expect(game.score()).toEqual(24)
        })
    });
});