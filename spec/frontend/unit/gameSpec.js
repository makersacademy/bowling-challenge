describe('Game', () => {
  let Game = require('../../../app/public/js/Game');
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe('#roll', () => {
    // A better test would spy on recording a roll in a frame.

    it('records the score from a roll', () => {
      game.roll(2);
      expect(game.getScore()).toEqual(2);
    });

    describe('preventing rolling excess balls', () => {
      // These may properly be feature tests. An isolated test might just demonstrate passing
      // in complete mock frames and seeing that the error occurs.

      it('when no bonuses are scored, it errors if maximum rolls (20) are exceeded', () => {
        for (let i = 0; i < 20; i++) {
          game.roll(2);
        }
        expect(() => {
          game.roll(2);
        }).toThrowError('Game is complete');
      });

      it('when a spare is rolled in the final frame, it errors if maximum rolls (21) are exceeded', () => {
        for (let i = 0; i < 21; i++) {
          game.roll(5);
        }
        expect(() => {
          game.roll(2);
        }).toThrowError('Game is complete');
      });

      it('when a strike is rolled in the final frame, it errors if maximum rolls (22) are exceeded', () => {
        for (let i = 0; i < 12; i++) {
          game.roll(10);
        }
        expect(() => {
          game.roll(2);
        }).toThrowError('Game is complete');
      });
    });
  });

  describe('#getScore', () => {
    // A better test would spy on all frames and see that they are all called for their totals.
    // The final expectation, to prove that those results are summed would still be required.

    it('returns to sum of all recorded scores', () => {
      for (let i = 0; i < 5; i++) {
        game.roll(i);
      }
      expect(game.getScore()).toEqual(10);
    });
  });
});
