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
  });

  it('one frame', () => {
    game.addRoll(7);
    game.addRoll(2);
    
    const scorecard = gameFormatter.getScorecard();
    expect(scorecard).toContain('|   1.  | 7 , 2 |    9  |');
    expect(scorecard).toContain('|   2.  |       |       |');
    expect(scorecard).toContain('|       | TOTAL |    9  |');
  });

  it('one spare', () => {
    game.addRoll(7);
    game.addRoll(3);

    const scorecard = gameFormatter.getScorecard();
    expect(scorecard).toContain('|   1.  | 7 , / |       |');
    expect(scorecard).toContain('|   2.  |       |       |');
    expect(scorecard).toContain('|       | TOTAL |    0  |');
  });

  it('one strike', () => {
    game.addRoll(10);
    
    const scorecard = gameFormatter.getScorecard();
    expect(scorecard).toContain('|   1.  |     X |       |');
    expect(scorecard).toContain('|   2.  |       |       |');
    expect(scorecard).toContain('|       | TOTAL |    0  |');
  });

  it('2 and a half frames (all rolls of 4)', () => {
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

  it('two strikes and a roll', () => {
    game.addRoll(10);
    game.addRoll(10);
    game.addRoll(4);

    const scorecard = gameFormatter.getScorecard();
    expect(scorecard).toContain('|   1.  |     X |   24  |');
    expect(scorecard).toContain('|   2.  |     X |       |');
    expect(scorecard).toContain('|   3.  | 4     |       |');
    expect(scorecard).toContain('|   4.  |       |       |');
    expect(scorecard).toContain('|       | TOTAL |   24  |');
  });

  it('two [7, 3] spares and a roll', () => {
    game.addRoll(7); game.addRoll(3);
    game.addRoll(7); game.addRoll(3);
    game.addRoll(4);

    const scorecard = gameFormatter.getScorecard();
    expect(scorecard).toContain('|   1.  | 7 , / |   17  |');
    expect(scorecard).toContain('|   2.  | 7 , / |   31  |');
    expect(scorecard).toContain('|   3.  | 4     |       |');
    expect(scorecard).toContain('|   4.  |       |       |');
    expect(scorecard).toContain('|       | TOTAL |   31  |');
  });

  it('10 strikes', () => {
    for (let i = 0; i < 10; i++) {
      game.addRoll(10);
    }

    const scorecard = gameFormatter.getScorecard();
    expect(scorecard).toContain('|   1.  |     X |   30  |');
    expect(scorecard).toContain('|   2.  |     X |   60  |');
    expect(scorecard).toContain('|   8.  |     X |  240  |');
    expect(scorecard).toContain('|   9.  |     X |       |');
    expect(scorecard).toContain('|  10.  | X     |       |');
    expect(scorecard).toContain('|       | TOTAL |  240  |');
  });

  it('10 [9, 1] spares and a strike', () => {
    for (let i = 0; i < 10; i++) {
      game.addRoll(9);
      game.addRoll(1);
    }
    game.addRoll(10);

    const scorecard = gameFormatter.getScorecard();
    expect(scorecard).toContain('|   1.  | 9 , / |   19  |');
    expect(scorecard).toContain('|   2.  | 9 , / |   38  |');
    expect(scorecard).toContain('|   8.  | 9 , / |  152  |');
    expect(scorecard).toContain('|   9.  | 9 , / |  171  |');
    expect(scorecard).toContain('|  10.  | 9,/,X |  191  |');
    expect(scorecard).toContain('|       | TOTAL |  191  |');
  });

  it('gutter game', () => {
    for (let i = 0; i < 20; i++) {
      game.addRoll(0);
    }

    const scorecard = gameFormatter.getScorecard();
    expect(scorecard).toContain('|   1.  | - , - |    0  |');
    expect(scorecard).toContain('|   2.  | - , - |    0  |');
    expect(scorecard).toContain('|  10.  | - , - |    0  |');
    expect(scorecard).toContain('|       | TOTAL |    0  |');
  });
});