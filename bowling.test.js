const BowlingGame  = require('./bowling');


describe("playFrame", () => {
    it("scores a strike", () => {
        const game = new BowlingGame(10, 2, 10);
        game.getRandomScore = jest.fn(() => 10);
        game.playFrame();
        expect(game.scores[0]).toBe(30);
        expect(game.currentFrame).toBe(1);
    });

    it("scores a spare", () => {
        const game = new BowlingGame(10, 2, 10);
        game.getRandomScore = jest.fn(() => 5);
        game.playFrame();
        expect(game.scores[0]).toBe(15);
        expect(game.currentFrame).toBe(1);
    });

    it("scores a normal frame", () => {
        const game = new BowlingGame(10, 2, 10);
        game.getRandomScore = jest.fn(() => 4);
        game.playFrame();
        expect(game.scores[0]).toBe(8);
        expect(game.currentFrame).toBe(1);
    });
});
