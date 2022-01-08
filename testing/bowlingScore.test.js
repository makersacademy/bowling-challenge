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
    it('increases by the number of pins knocked down on roll', () => {
      bowling.roll(5)
      expect(bowlingScore.getTotalScore()).toEqual(5);
    })
    it('has a total of 0 for a gutter game', () => {
      for(let i = 0; i < 20 ; i++) {
        bowling.roll(0);
      }
      expect(bowlingScore.getTotalScore()).toEqual(0);
    })
    it('has a correct total for a game without spares and strikes', () => {
      for(let i = 0; i < 20 ; i++) {
        bowling.roll(2);
      }
      expect(bowlingScore.getTotalScore()).toEqual(40);
    })
  })
})