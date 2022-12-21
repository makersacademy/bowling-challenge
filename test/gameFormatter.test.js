const GameFormatter = require('../lib/gameFormatter');
const Game = require('../lib/game');

jest.mock('../lib/game');

describe(GameFormatter, () => {
  it('example full game without a bonus final roll', () => {
    Game.mockImplementation(() => {
      return {
        frames: [
          { score: 9, rolls: [4,5], status: 'completed', format: () => '4 , 5' },
          { score: 8, rolls: [0,8], status: 'completed', format: () => '- , 8' },
          { score: 11, rolls: [2,8], status: 'completed', format: () => '2 , /' },
          { score: 1, rolls: [1,0], status: 'completed', format: () => '1 , -' },
          { score: 15, rolls: [10], status: 'completed', format: () => '    X' },
          { score: 5, rolls: [4,1], status: 'completed', format: () => '4 , 1' },
          { score: 0, rolls: [0,0], status: 'completed', format: () => '- , -' },
          { score: 8, rolls: [7,1], status: 'completed', format: () => '7 , 1' },
          { score: 9, rolls: [9,0], status: 'completed', format: () => '9 , -' },
          { score: 9, rolls: [8,1], status: 'completed', format: () => '8 , 1' }
        ]
      }
    });

    const mockGame = new Game();
    const gameFormatter = new GameFormatter(mockGame);

    const scorecard = gameFormatter.getScorecard();
    expect(scorecard).toContain('| FRAME | ROLLS | SCORE |');
    expect(scorecard).toContain('|   1.  | 4 , 5 |    9  |');
    expect(scorecard).toContain('|   2.  | - , 8 |   17  |');
    expect(scorecard).toContain('|   3.  | 2 , / |   28  |');
    expect(scorecard).toContain('|   4.  | 1 , - |   29  |');
    expect(scorecard).toContain('|   5.  |     X |   44  |');
    expect(scorecard).toContain('|   6.  | 4 , 1 |   49  |');
    expect(scorecard).toContain('|   7.  | - , - |   49  |');
    expect(scorecard).toContain('|   8.  | 7 , 1 |   57  |');
    expect(scorecard).toContain('|   9.  | 9 , - |   66  |');
    expect(scorecard).toContain('|  10.  | 8 , 1 |   75  |');
    expect(scorecard).toContain('|       | TOTAL |   75  |');
  });
});