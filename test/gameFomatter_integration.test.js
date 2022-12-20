const GameFormatter = require('../lib/gameFormatter');
const Game = require('../lib/game');

describe('GameFormatter integration', () => {
  let game;
  let gameFormatter;

  beforeEach(() => {
    game = new Game();
    gameFormatter = new GameFormatter(game);
  });

  describe('Initialized game', () => {
    it('returns an empty scorecard', () => {
      scorecard = gameFormatter.getScorecard();
      expect(scorecard).toContain('| FRAME | ROLLS | SCORE |');
      expect(scorecard).toContain('|   1.  |       |       |');
      expect(scorecard).toContain('|  10.  |       |       |');
      expect(scorecard).toContain('|       | TOTAL |    0  |');
    });
  });

});