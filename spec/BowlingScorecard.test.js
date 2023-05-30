const {BowlingScorecard} = require('../lib/index');

let scorecard;

beforeEach(() => {
  scorecard = new BowlingScorecard();
});

describe('BowlingScorecard class', () => {
  it('constructs', () => {
    expect(scorecard).toBeTruthy;
    expect(scorecard).toHaveProperty('framesToScore', []);
  });

  describe('setFramesToScore method', () => {
    it( 'sets the framesToScore variable', () => {
      const test = ['test'];
      scorecard.setFramesToScore(test);
      expect(scorecard).toHaveProperty('framesToScore', test);
    });
  });
});
