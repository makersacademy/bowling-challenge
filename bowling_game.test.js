const BowlingGame = require('./bowling_game');

describe(BowlingGame, () => {

  describe('roll', () => {

    let game = new BowlingGame

    it('can roll a gutter game', () => {
      for (times = 0; times < 20; times++) {
        game.roll(0)
      };
      expect(game.score()).toBe(0);
    });

    it('can roll all 1s', () => {
      for (times = 0; times < 20; times++) {
        game.roll(1)
      };
      expect(game.score()).toBe(20);
    });
  });
});