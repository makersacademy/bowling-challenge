const BowlingGame = require('./bowlingGame');

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

    it('stops more than 10 frame scores from being added', () => { 
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
      expect(game.addScore([3, 5])).toEqual('Game scorecard complete (10/10 frames). Cannot add another score.')
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