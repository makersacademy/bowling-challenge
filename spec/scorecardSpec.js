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
});
