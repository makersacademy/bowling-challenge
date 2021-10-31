const Bowling = require('./bowling');

describe('Bowling', () => {
  beforeEach(() => {
    game = new Bowling();
  });

  describe('Basic rules', () => {
    it('calculates the total score', () => {
      expect(game.totalScore()).toBe(0);
      game.roll(1);
      game.roll(4);
      expect(game.totalScore()).toBe(5);
    });

    it('accounts for spares', () => {
      game.roll(6);
      game.roll(4);
      game.roll(5); // spare + bonus 5 = 15, total + 5 for this frame
      game.roll(0); // ending the frame so the score updates
      expect(game.totalScore()).toBe(20);
    });

    it('accounts for strikes', () => {
      game.roll(10);
      game.roll(1);
      game.roll(2); // strike + bonus 1 and 2 = 13, total + 3 for this frame
      game.roll(0); // ending the frame so the score updates
      expect(game.totalScore()).toBe(16);
    });
  });

  describe('Full games', () => {
    it('calculates a total score of 20 for 20 rolls of 1', () => {
      for (i = 1; i <= 20; i++) {
        game.roll(1);
      }
      expect(game.totalScore()).toBe(20);
    });

    it('calculates a total score of 0 for a gutter game', () => {
      for (i = 1; i <= 20; i++) {
        game.roll(0);
      }
      expect(game.totalScore()).toBe(0);
    });

    it('calculates a total score of 300 for a perfect game', () => {
      for (i = 1; i <= 12; i++) {
        game.roll(10);
      }
      expect(game.totalScore()).toBe(300);
    });

    it('calculates a total score of 133', () => {
      // example from README
      rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6];
      game.inputFullGame(rolls);
      expect(game.totalScore()).toBe(133);
    });

    it('calculate a score of 122', () => {
      // ending with a spare and strike
      rolls = [8, 1, 0, 9, 2, 8, 10, 6, 3, 7, 0, 5, 2, 10, 0, 6, 2, 8, 10];
      game.inputFullGame(rolls);
      expect(game.totalScore()).toBe(122);
    });
  });

  describe('Ending games', () => {
    const extraRoll = () => {
      game.roll(1); // expect___.toThrow() needs an anonymous function
    };

    beforeEach(() => {
      game = new Bowling();
      for (i = 1; i <= 18; i++) {
        game.roll(0); // getting to the final frame
      }
    });

    it("ends game after 2 rolls if they aren't a strike or spare", () => {
      extraRoll();
      extraRoll();
      expect(extraRoll).toThrow('Game Over!');
    });

    it('ends the game after 3 rolls if there is a strike', () => {
      game.roll(10);
      extraRoll();
      extraRoll();
      expect(extraRoll).toThrow('Game Over!');
    });

    it('ends the game after 3 rolls if there is a spare', () => {
      game.roll(8);
      game.roll(2);
      extraRoll();
      expect(extraRoll).toThrow('Game Over!');
    });
  });

  describe('Scorecard', () => {
    it('shows the scorecard', () => {
      rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6];
      game.inputFullGame(rolls);
      expect(game.scorecard()).toEqual(
        ['1  4 | 4  5 | 6  / | 5  / | X  - | 0  1 | 7  / | 6  / | X  - | 2  /  6',
         '   5 |   14 |   29 |   49 |   60 |   61 |   77 |   97 |  117 |  133'].join('\n')
      );
    });
  });
});
