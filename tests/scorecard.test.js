const Scorecard = require('../src/scorecard');

describe('Scorecard', () => {
  describe('adding frames', () => {
    it('starts with an empty frames array', () => {
      scorecard = new Scorecard();

      expect(scorecard.frames).toEqual([])
    })
  })
})