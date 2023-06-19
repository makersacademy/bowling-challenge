const Frame = require('./frame');
const Game = require('./game');

describe('integration test', () => {
  describe('game.play()', () => {
    it("takes an array of points and each to the frame's rolls array", () => {
      let game = new Game(Frame);
      const scores = [[1, 4], [4, 5], [6, 4], [5, 5], [10], [0, 1], [7, 3], [6, 4], [10], [2, 7]];
      game.play(scores);
      expect(game.frames[9].rolls).toEqual([2, 7]);
    });

    it('Allocates bonus points for a spare in the final frame', () => {
      let game = new Game(Frame);
      const scores = [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [5, 5], [6]];
      game.play(scores);
      expect(game.frames[9].regularPoints).toEqual(10);
      expect(game.frames[9].bonusPoints).toEqual(6);
      expect(game.grandTotal).toEqual(16);
    });

    it('Allocates bonus points for a strike in the final frame', () => {
      let game = new Game(Frame);
      const scores = [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [10], [6, 10]];
      game.play(scores);
      expect(game.frames[9].regularPoints).toEqual(10);
      expect(game.frames[9].bonusPoints).toEqual(16);
      expect(game.grandTotal).toEqual(26);
    });

    it('Alloates bonus points for spares', () => {
      let game = new Game(Frame);
      const scores = [[5, 5], [6, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
      game.play(scores);
      expect(game.frames[0].bonusPoints).toEqual(6);
      expect(game.grandTotal).toEqual(22);
    });

    it('Allocates bonus points for a single strike', () => {
      let game = new Game(Frame);
      const scores = [[10], [6, 3], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
      game.play(scores);
      expect(game.frames[0].bonusPoints).toEqual(9);
      expect(game.grandTotal).toEqual(28);
    });

    it('Scores a complex game correctly', () => {
      let game = new Game(Frame);
      const scores = [[1, 4], [4, 5], [6, 4], [5, 5], [10], [0, 1], [7, 3], [6, 4], [10], [2, 8], [6]];
      game.play(scores);
      expect(game.grandTotal).toEqual(133);
    });

    it('Scores succesive strikes', () => {
      let game = new Game(Frame);
      const scores = [[10], [10], [10], [10], [10], [10], [10], [10], [10], [0, 0]];
      game.play(scores);
      expect(game.grandTotal).toEqual(240);
    });

    it('Scores succesive strikes + spare in last frame', () => {
      let game = new Game(Frame);
      const scores = [[10], [10], [10], [10], [10], [10], [10], [10], [10], [5, 5], [5]];
      game.play(scores);
      expect(game.grandTotal).toEqual(270);
    });

    it('Score succesive strikes + strike in last frame', () => {
      let game = new Game(Frame);
      const scores = [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10], [5, 5]];
      game.play(scores);
      expect(game.grandTotal).toEqual(285);
    });

    it('Score a perfect game', () => {
      let game = new Game(Frame);
      const scores = [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10]];
      game.play(scores);
      expect(game.grandTotal).toEqual(300);
      expect(game.isPerfectGame()).toEqual(true);

    });

    it('Allocates a gutter game correctly', () => {
      let game = new Game(Frame);
      const scores = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
      game.play(scores);
      expect(game.grandTotal).toEqual(0);
      expect(game.isGutterGame()).toEqual(true);
    });
  })
})