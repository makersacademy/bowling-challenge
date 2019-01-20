/* global describe, it, expect, beforeEach */

'use strict'

describe('Scorecard', () => {
  it('instance of Scorecard can be stored as a variable', () => {
    var scorecard = new Scorecard();
    expect(scorecard instanceof Scorecard).toBe(true)
  })

  describe('#recordFrameScore()', () => {
    it('responds to .recordFrameScore()', () => {
      var scorecard = new Scorecard();
      expect(scorecard.recordFrameScore).toBeDefined()
    })

    it('records the score of a frame', () => {
      var scorecard = new Scorecard();
      let frame = new Frame();
      frame.roll(3)
      frame.roll(2)
      scorecard.recordFrameScore(frame)
      console.log(frame._score)
      console.log(scorecard)
      expect(scorecard._frameScores).toContain(frame._score)
    })
  })
})
