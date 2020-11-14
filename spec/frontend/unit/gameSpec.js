describe('Game', () => {
  let Game = require('../../../app/public/js/Game');
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe('#roll', () => {
    // records a roll in a frame
    it('records the score from a roll', () => {
      game.roll(2); // replace with something that shows the roll being passed to a frame?
      expect(game.getScore()).toEqual(2); // get rid
    });

    // does not record a roll in a complete frame

    // when all frames are complete, it errors

    describe('preventing rolling excess balls', () => {
      it('when no bonuses are scored, it errors if maximum rolls (20) are exceeded', () => {
        // put some of this out to a feature test
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
    //sums the totals from frames
    it('returns to sum of all recorded scores', () => {
      for (let i = 0; i < 5; i++) {
        game.roll(i);
      }
      expect(game.getScore()).toEqual(10);
    });
  });
});
