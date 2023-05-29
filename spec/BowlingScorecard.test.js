const {BowlingScorecard} = require('../lib/index');

let scorecard;

beforeEach(() => {
  scorecard = new BowlingScorecard();
})

describe('BowlingScorecard class', () => {
  it('constructs', () => {
    expect(scorecard).toBeTruthy;
    expect(scorecard).toHaveProperty('completedFrames', []);
  });
});
