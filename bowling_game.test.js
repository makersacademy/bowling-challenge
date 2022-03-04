const BowlingGame = require('./bowling_game');

describe(BowlingGame, () => {

  describe('roll', () => {

    let game;

    beforeEach(() => {
      game = new BowlingGame;
    });

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

    it('can roll a spare', () => {
      game.roll(5);
      game.roll(5);
      game.roll(2);
      for (times = 0; times < 17; times++) {
        game.roll(0)
      };
      expect(game.score()).toBe(14)
    });

    it('can roll a strike', () => {
      game.roll(10);
      game.roll(3);
      game.roll(2);
      for (times = 0; times < 16; times++) {
        game.roll(0)
      };     
      expect(game.score()).toBe(20)
    });
  });
});