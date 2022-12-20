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
      const scorecard = gameFormatter.getScorecard();
      expect(scorecard).toContain('| FRAME | ROLLS | SCORE |');
      expect(scorecard).toContain('|   1.  |       |       |');
      expect(scorecard).toContain('|  10.  |       |       |');
      expect(scorecard).toContain('|       | TOTAL |    0  |');
    });

    it('one frame', () => {
      game.addRoll(7);
      game.addRoll(2);
      
      const scorecard = gameFormatter.getScorecard();
      expect(scorecard).toContain('|   1.  | 7 , 2 |    9  |');
      expect(scorecard).toContain('|   2.  |       |       |');
      expect(scorecard).toContain('|       | TOTAL |    9  |');
    });

    it('2 and a half frames (ONE CALL)', () => {
      for (let i = 0; i < 5; i++) {
        game.addRoll(4);
      }

      const scorecard = gameFormatter.getScorecard();
      expect(scorecard).toContain('|   1.  | 4 , 4 |    8  |');
      expect(scorecard).toContain('|   2.  | 4 , 4 |   16  |');
      expect(scorecard).toContain('|   3.  | 4     |       |');
      expect(scorecard).toContain('|   4.  |       |       |');
      expect(scorecard).toContain('|       | TOTAL |   16  |');
    });
  });
});