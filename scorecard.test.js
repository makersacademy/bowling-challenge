const Scorecard = require('./scorecard');

describe(Scorecard, () => {
  describe('Without bonuses', () => {
    beforeEach(() => {
    });

    it('returns a score', () => {
      const score = new Scorecard();
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      expect(score.finalScore()).toBe(60)
    });

    it('separates the scorecard into frames', () => {
      const score = new Scorecard();
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      score.addRoll(3)
      expect(score.sortIntoFrames()).toEqual([
        [ 3, 3 ], [ 3, 3 ],
        [ 3, 3 ], [ 3, 3 ],
        [ 3, 3 ], [ 3, 3 ],
        [ 3, 3 ], [ 3, 3 ],
        [ 3, 3 ], [ 3, 3 ]
      ])
    })
  })
});