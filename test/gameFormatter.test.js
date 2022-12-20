const GameFormatter = require('../lib/gameFormatter');
const Game = require('../lib/game');

jest.mock('../lib/game');

describe(GameFormatter, () => {
  it('example full game without a bonus final roll', () => {
    Game.mockImplementation(() => {
      return {
        getFrames: () => [
          { getScore: () => 9, getRolls: () => [4,5], getStatus: () => 'completed', format: () => '4 , 5' },
          { getScore: () => 8, getRolls: () => [0,8], getStatus: () => 'completed', format: () => '- , 8' },
          { getScore: () => 11, getRolls: () => [2,8], getStatus: () => 'completed', format: () => '2 , /' },
          { getScore: () => 1, getRolls: () => [1,0], getStatus: () => 'completed', format: () => '1 , -' },
          { getScore: () => 15, getRolls: () => [10], getStatus: () => 'completed', format: () => '    X' },
          { getScore: () => 5, getRolls: () => [4,1], getStatus: () => 'completed', format: () => '4 , 1' },
          { getScore: () => 0, getRolls: () => [0,0], getStatus: () => 'completed', format: () => '- , -' },
          { getScore: () => 8, getRolls: () => [7,1], getStatus: () => 'completed', format: () => '7 , 1' },
          { getScore: () => 9, getRolls: () => [9,0], getStatus: () => 'completed', format: () => '9 , -' },
          { getScore: () => 9, getRolls: () => [8,1], getStatus: () => 'completed', format: () => '8 , 1' }
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