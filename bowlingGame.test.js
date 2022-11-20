const BowlingGame = require('./bowlingGame');
const BowlingScoring = require('./bowlingScoring');

describe('BowlingGame', () => {
  describe('when taking score inputs', () => {    
    it('adds and returns two scores from a single frame', () => {
      const game = new BowlingGame();
      game.addScore([3, 5]);
      expect(game.getScorecard()).toEqual([[3, 5]]);
    });

    it('adds and returns scores from 10 frames', () => {
      const game = new BowlingGame();
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      expect(game.getScorecard()).toEqual([[3, 5], [3, 5], [3, 5], [3, 5], [3, 5], [3, 5], [3, 5], [3, 5], [3, 5], [3, 5]]);
    });

  });

  describe('when the game is finished', () => {    
    it('calls calculate score', () => {
      const game = new BowlingGame();
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      expect(game.endGame()).toEqual('Your score from the last game is: 80.');
    });

  });

});