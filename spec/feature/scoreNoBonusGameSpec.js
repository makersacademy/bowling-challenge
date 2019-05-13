describe('feature: no bonus scoring game', function() {
  var Game = require('../../src/game');
  var Scorecard = require('../../src/scorecard');
  var game, scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
    game = new Game();

    game.addRoll(2);
    game.addRoll(3);
    game.addRoll(4);
    game.addRoll(5);
    game.addRoll(6);
    game.addRoll(7);
    game.addRoll(8);
    game.addRoll(9);
    game.addRoll(1);
    game.addRoll(2);
    game.addRoll(3);
    game.addRoll(4);
    game.addRoll(5);
    game.addRoll(6);
    game.addRoll(7);
    game.addRoll(8);
    game.addRoll(9);
    game.addRoll(1);
    game.addRoll(0);
    game.addRoll(2);
  });

  describe('completed game', function() {
    it('knows the game is completed', function() {
      expect(game.isComplete()).toBe(true);
    });
    it('returns a final score total of 0', function() {
      expect(scorecard.score(game)).toEqual(92);
    });
  });
});
