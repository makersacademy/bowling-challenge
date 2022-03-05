const Scoreboard = require('./scoreboard')

let scoreboard;

beforeEach(() => {
  scoreboard = new Scoreboard;
});

describe (Scoreboard, () => {

  describe ('constructor', () => {
    it ('starts a game with a score of 0', () => {
      expect(scoreboard.gameScore).toBe(0);
    });
  });

  describe ('singleRoll', () => {
    it ('should return an error if a single roll is greater than 10', () => {
      expect(() => scoreboard.singleRoll(14)).toThrow('Score recorded for throw 1 is invalid');
    });
  });
});