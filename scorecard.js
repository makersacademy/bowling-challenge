const scorecard = require('./scorecard');

describe('scorecard', () => {
  beforeEach(() => {
    scorecard = new Scorecard;
  });

  describe('initialize', () => {
    it('initializes a new instance of scorecard', () => {
      expect(scorecard).toBe(Scorecard);
    });
  });
});