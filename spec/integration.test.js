const Frame = require('../lib/frame');
const Scorecard = require('../lib/scorecard');

describe('integration', () => {

  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard;
  });

  describe('seeScorecard() (with newFrame() and addFrameToScorecard()', () => {
    it('returns [6, 3], the score of the first frame', () => {
      scorecard.newFrame(6, 3);
      expect(scorecard.seeScorecard()).toEqual([6, 3]);
    });

    it('returns [10, 0], the score of the first frame', () => {
      scorecard.newFrame(10, 0);
      expect(scorecard.seeScorecard()).toEqual([10, 0]);
    });

    it('returns [7, 2, 5, 0], the score of first two frames', () => {
      scorecard.newFrame(7, 2);
      scorecard.newFrame(5, 0);
      expect(scorecard.seeScorecard()).toEqual([7, 2, 5, 0]);
    });
  });
});