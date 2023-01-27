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

  describe('newTenthFrame()', () => {
    test('throws error if called before the tenth frame', () => {
      expect(() => {
        scorecard.newTenthFrame(7, 2, 0, 0);
      }).toThrow('newTenthFrame can only be called for the tenth frame');
    });
  });

  describe('calculateTotalScores()', () => {
    test('throws error if called before the tenth frame is over', () => {
      expect(() => {
        scorecard.calculateTotalScore();
      }).toThrow('The total score can only be calculated once the game is over');
    });
  });
  
  describe('calculateScoreWithoutBonusRolls()', () => {
    test('throws error if called before the tenth frame is over', () => {
      expect(() => {
        scorecard.calculateScoreWithoutBonusRolls();
      }).toThrow('Scores can only be calculated once the game is over');
    });
  });

  describe('calculateScoreFromBonusRolls()', () => {
    test('throws error if called before the tenth frame is over', () => {
      expect(() => {
        scorecard.calculateScoreFromBonusRolls();
      }).toThrow('Bonus scores for the tenth frame can only be calculated once the game is over');
    });
  });
});