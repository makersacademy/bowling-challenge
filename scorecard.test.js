const Scorecard = require('./scorecard');

describe(Scorecard, () => {
  describe('Without bonuses', () => {

    it('returns a score', () => {
      const score = new Scorecard([[3, 4], [5, 3], [4, 5], [5, 3], [1, 0], [3, 6], [4, 4], [3, 5], [3, 3], [7, 2]]);
      expect(score.finalScore()).toBe(73)
    });
    it('returns a score', () => {
      const score = new Scorecard([[2, 2], [3, 3], [7, 0], [2, 5], [8, 0], [2, 6], [5, 4], [1, 5], [3, 3], [7, 2]]);
      expect(score.finalScore()).toBe(70)
    });
  });

  describe('With Strikes', () => {
    it('Returns a score of 300', () => {
      const score = new Scorecard([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]]);
      expect(score.finalScore()).toBe(300)
    })
    it('Returns a score of 257', () => {
      const score = new Scorecard([[5, 3], [5, 4], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]]);
      expect(score.finalScore()).toBe(257)
    })
  })
  describe('With Spares', () => {
    it('Returns a score of 150', () => {
      const score = new Scorecard([[5, 5], [5, 5], [5, 5], [5, 5], [5, 5], [5, 5], [5, 5], [5, 5], [5, 5], [5, 5, 5]])
      expect(score.finalScore()).toBe(150)
    })
  })
  describe('With No pins knocked over', () => {
    it('Returns a score of 0', () => {
      const score = new Scorecard([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0, 0]])
      expect(score.finalScore()).toBe(0)
    })
  })
});