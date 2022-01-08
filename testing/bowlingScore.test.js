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
})