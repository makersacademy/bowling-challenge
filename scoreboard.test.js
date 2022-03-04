const Scoreboard = require('./scoreboard')

describe (Scoreboard, () => {
  describe ('constructor', () => {
    it ('starts a game with a score of 0', () => {
      let scoreboard = new Scoreboard;
      expect(scoreboard.game_score).toBe (0);
    });
  });
});