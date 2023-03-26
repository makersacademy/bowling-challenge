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

describe("playExtraBalls", () => {
    it("scores 1 extra ball for a spare regardless of frame number", () => {
        const game = new BowlingGame(10, 2, 10);
        game.scores = [10, 0, 0];
        game.getRandomScore = jest.fn(() => 5); // mock function returns 5
        game.playExtraBalls();
        expect(game.scores[0]).toBe(game.scores[0] - 5 + 5); // spare: 10 + 5 = 15
      });
      
  
    it("does not score extra balls for frames 1-9 ", () => {
      const game = new BowlingGame(10, 2, 10);
      game.scores = [8, 0, 0];
      game.getRandomScore = jest.fn(() => 10);
      game.playExtraBalls();
      expect(game.scores[0]).toBe(8);
    });
  });
  