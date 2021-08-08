describe('Scorecard', () => {
  
  let scorecard;
  beforeEach(() => {
    scorecard = new Scorecard();
  });

  describe('starting', () => {
    it('starts with empty scores', () => {
      expect(scorecard.currentScorecard()).toEqual({1: [], 2: [], 3: [], 4: [], 5: [], 
                                                    6: [],7: [],8: [],9: [], 10: []})
    })
    it('starts with 10 frames', () => {
      expect(scorecard.currentScorecard()).toHaveSize(10)
    });
    });

  describe('getFrame', () => {
    it('returns scores of given frame', () => {
      expect(scorecard.getFrame(6)).toHaveSize(0)
    });
  });

  describe('getFrameScore', () => {
    it('returns scores of given frame', () => {
      scorecard.addToScorecard(1, 5)
      scorecard.addToScorecard(1, 4)
      expect(scorecard.getFrameScore(1)).toEqual(9)
    });
  });
 

  describe('Adding to scorecard', () => {
    it('adds frame with score to scorecard', () => {
      scorecard.addToScorecard(1, 5)
      expect(scorecard.getFrame(1)).toEqual([5])
    });
    it('adds a score to the same frame', () => {
      scorecard.addToScorecard(1, 5)
      scorecard.addToScorecard(1, 4)
      expect(scorecard.getFrame(1)).toEqual([5, 4])
    });
    it('adds a bonus if needed', () => {
      scorecard.addToScorecard('Bonus', 10)
      expect(scorecard.getFrame('Bonus')).toEqual(10)
    });
  });

  describe('Strike', () => {
    it('knows if previous frame was a strike', () => {
      scorecard.addToScorecard(4, 10)
      expect(scorecard.strike(5)).toEqual(true)
    });
    it('knows if previous frame was NOT a strike', () => {
      scorecard.addToScorecard(4, 4)
      scorecard.addToScorecard(4, 3)
      expect(scorecard.strike(5)).toEqual(false)
    });
  });

  describe('Spare', () => {
    it('knows if previous frame was a spare', () => {
      scorecard.addToScorecard(4, 5)
      scorecard.addToScorecard(4, 5)
      expect(scorecard.spare(5)).toEqual(true)
    });
  });

  describe('Adds score', () => {
    it('adds up all the scores from the scorecard', () => {
      scorecard.addScore(9)
      expect(scorecard.totalScore()).toEqual(9)
    })
  })
});
