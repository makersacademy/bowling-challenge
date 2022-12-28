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

  describe('newFrame(firstScore, secondScore)', () => {
    test('throws error if newFrame is called more than 9 times', () => {
      expect(() => {
        scorecard.newFrame(7, 2);
        scorecard.newFrame(7, 2);
        scorecard.newFrame(7, 2);
        scorecard.newFrame(7, 2);
        scorecard.newFrame(7, 2);
        scorecard.newFrame(7, 2);
        scorecard.newFrame(7, 2);
        scorecard.newFrame(7, 2);
        scorecard.newFrame(7, 2);
        scorecard.newFrame(7, 2);
      }).toThrow('newFrame can only be called 10 times, please call newTenthFrame for the final frame');
    });
  });

  describe('newTenthFrame(firstScore, secondScore, thirdScore, fourthScore) (with seeScorecard())', () => {
    it('adds first two scores to scorecard if no bonus rolls', () => {
      scorecard.newTenthFrame(5, 4, 0, 0);
      expect(scorecard.seeScorecard()).toEqual([5, 4])
    });

    it('adds first three scores to scorecard if one bonus roll', () => {
      scorecard.newTenthFrame(5, 5, 5, 0);
      expect(scorecard.seeScorecard()).toEqual([5, 5, 5])
    });

    it('adds four scores to scorecard if two bonus rolls', () => {
      scorecard.newTenthFrame(10, 0, 7, 6);
      expect(scorecard.seeScorecard()).toEqual([10, 0, 7, 6])
    });
  });
});