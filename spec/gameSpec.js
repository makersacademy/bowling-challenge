describe("Game", function () {
    var game;
    beforeEach(function () {
        game = new Game();
    });

    it('Gutter Game', function () {
        for (var i = 0; i < 20; i++) {
            game.roll(0);
        }
        expect(game.score()).toEqual(0);
    });

    it('Score all ones', function () {
        for (var i = 0; i < 20; i++) {
            game.roll(1);
        }
        expect(game.score()).toEqual(20);
    });

    it('can roll a spare', function () {
        game.roll(5)
        game.roll(5)
        game.roll(4)
        for (var i = 0; i < 17; i++) {
            game.roll(0);
        }
        expect(game.score()).toEqual(14);
    });
});