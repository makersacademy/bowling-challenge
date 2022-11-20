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

  describe('when end game is requested', () => {    
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

    it('returns prompt to add more scores if there are fewer than 10 frames', () => {
      const game = new BowlingGame();
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      expect(game.endGame()).toEqual('You only have scores for 7 / 10 frames. Input 3 more for a complete game.')
    });

  });

});