const Frame = require('../lib/frame');
const Scorecard = require('../lib/scorecard');

describe(Scorecard, () => {

  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard;
  });

  describe('seeScorecard()', () => {
    it('returns an empty array when no scores have been added', () => {
      expect(scorecard.seeScorecard()).toEqual([]);
    });


  });
});



