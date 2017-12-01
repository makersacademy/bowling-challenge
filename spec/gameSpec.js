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
    });
});