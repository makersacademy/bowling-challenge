const Scorecard = require('./scorecard');
const Frame = require('./frame');

beforeEach(() => {
  scorecard = new Scorecard();
});

describe('Scorecard', () => {

  it('checks that scorecard is an instance of the Scorecard Class', () => {
    expect(scorecard).toBeInstanceOf(Scorecard);
  });
});
