const BowlingGame = require('./bowling_game');

describe(BowlingGame, () => {

  it('can create a new bowling game', () => {
    let game = new BowlingGame
  });

  describe('roll', () => {

    it('can roll all 0s', () => {
      let game = new BowlingGame
      for (times = 0; times < 21; times++) {
        game.roll(0)
      };
      expect(game.score()).toBe(0);
    });
  });
});