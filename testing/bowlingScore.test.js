const BowlingScore = require('../bowlingScore.js');

describe('class BowlingScore', () => {
  beforeEach(()=> {
    bowlingScore = new BowlingScore();
  })
  const bowling = { roll: (pins) => bowlingScore.totalScore += pins }
  describe('total score', () => {
    it('starts with a total score of 0', () => {
      expect(bowlingScore.getTotalScore()).toEqual(0);
    })
    it('increases by the number of pins knocked down on a frame', () => {
      bowlingScore.addToScorecard([3, 2])
      expect(bowlingScore.getTotalScore()).toEqual(5);
    })
    it('has a total of 0 for a gutter game', () => {
      for(let i = 0; i < 10 ; i++) {
        bowlingScore.addToScorecard([0, 0]);
      }
      expect(bowlingScore.getTotalScore()).toEqual(0);
    })
    it('has a correct total for a game without spares and strikes', () => {
      for(let i = 0; i < 10 ; i++) {
        bowlingScore.addToScorecard([2, 2]);
      }
      expect(bowlingScore.getTotalScore()).toEqual(40);
    })
    it('has a correct total for a game with spares', () => {
      bowlingScore.addToScorecard([1, 1]);
      bowlingScore.addToScorecard([5, 5]);
      bowlingScore.addToScorecard([1, 1]);
      bowlingScore.addToScorecard([1, 1]);
      bowlingScore.addToScorecard([5, 5]);
      bowlingScore.addToScorecard([1, 1]);
      bowlingScore.addToScorecard([1, 1]);
      bowlingScore.addToScorecard([1, 1]);
      bowlingScore.addToScorecard([1, 1]);
      bowlingScore.addToScorecard([1, 1]);
      expect(bowlingScore.getTotalScore()).toEqual(38);
    })
    it('has a correct total for a game with multiple spares in a row', () => {
      bowlingScore.addToScorecard([5, 5]);
      bowlingScore.addToScorecard([5, 5]);
      bowlingScore.addToScorecard([5, 5]);
      bowlingScore.addToScorecard([5, 5]);
      bowlingScore.addToScorecard([5, 5]);
      bowlingScore.addToScorecard([5, 5]);
      bowlingScore.addToScorecard([5, 5]);
      bowlingScore.addToScorecard([5, 5]);
      bowlingScore.addToScorecard([5, 5]);
      bowlingScore.addToScorecard([5, 2]);
      expect(bowlingScore.getTotalScore()).toEqual(142);
    })
  })
  describe('addToScorecard', () => {
    it('adds the frame to the scorecard', () => {
      bowlingScore.addToScorecard([5, 2]);
      expect(bowlingScore.getScorecard()).toEqual([[5, 2]]);
    })
    it('adds multiple frames to the scorecard and stores it ', () => {
      bowlingScore.addToScorecard([5, 2]);
      bowlingScore.addToScorecard([4, 3])
      expect(bowlingScore.getScorecard()).toEqual([[5, 2], [4, 3]]);
    })
  })
  describe('calcBonus', () => {
    it('calcs the correct bonus for a single spare', () => {
      expect(bowlingScore.calcBonus([[4, 6], [5, 4]])).toBe(5)
    })
    it('calcs the correct bonus for a single spare', () => {
      expect(bowlingScore.calcBonus([[4, 3], [5, 5], [9, 1]])).toBe(9)
    })
    it('calcs the correct bonus for multiple spares', () => {
      expect(bowlingScore.calcBonus([[4, 6], [5, 5], [9, 1]])).toBe(14)
    })
  })
})