const BowlingGame = require('./bowlingGame');

describe('BowlingGame', () => {
  describe('when taking score inputs', () => {
    it('takes two scores per frame', () => {
      const game = new BowlingGame();
      game.addScore([3, 5]);
      expect(game.getScorecard()).toEqual([[3, 5]]);
    });

  });

});