const Scorecard = require('../src/scorecard');

describe('Scorecard', () => {
  describe('adding frames', () => {
    it('starts with an empty frames array', () => {
      scorecard = new Scorecard();

      expect(scorecard.frames).toEqual([])
    })

    it('adds one frame to frames array', () => {
      scorecard = new Scorecard();
      scorecard.addFrame(2, 2)

      expect(scorecard.frames[0].rolls[0]).toEqual(2)
      expect(scorecard.frames[0].rolls[1]).toEqual(2)
    })


    it('adds two frames to frames array', () => {
      scorecard = new Scorecard();
      scorecard.addFrame(2, 2)
      scorecard.addFrame(3, 4)

      expect(scorecard.frames[0].rolls[0]).toEqual(2)
      expect(scorecard.frames[0].rolls[1]).toEqual(2)
      expect(scorecard.frames[1].rolls[0]).toEqual(3)
      expect(scorecard.frames[1].rolls[1]).toEqual(4)
    })
  })
})