describe('feature: gutter game', function() {
  var Game = require('../../src/game');
  var Scorecard = require('../../src/scorecard');
  var game, scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
    game = new Game();
    for (var i = 0; i < 20; i++) {
      game.addRoll(0);
    };
  });

  describe('completed game', function() {
    it('knows the game is completed', function() {
      expect(game.isComplete()).toBe(true);
    });
    it('returns a final score total of 0', function() {
      expect(scorecard.score(game)).toEqual(0);
    });
  });
});
