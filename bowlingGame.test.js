const BowlingGame = require('./bowlingGame');

describe('BowlingGame', () => {
  describe('after taking score inputs', () => {    
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

    it('resets scorecard when requested', () => {
      const game = new BowlingGame();
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.resetScorecard();
      expect(game.getScorecard()).toEqual([]);
    });

    it('removes last score when requested', () => {
      const game = new BowlingGame();
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      game.removeLast();
      expect(game.getScorecard()).toEqual([[3, 5]]);
    });

    it('returns number of frames played so far when requested', () => {
      const game = new BowlingGame();
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      expect(game.getFramesPlayed()).toEqual('Frames played so far: 2 / 10.');
    });

    it('returns current score when requested', () => {
      const game = new BowlingGame();
      game.addScore([3, 5]);
      game.addScore([3, 5]);
      expect(game.getCurrentScore()).toEqual('Score so far: 16.');
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
      expect(game.endGame()).toEqual('Score from the last game: 80.');
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
      expect(game.endGame()).toEqual('Scores only inputted for 7 / 10 frames. Input 3 more for a complete game.')
    });

  });

});