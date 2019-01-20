/* global describe, it, expect, beforeEach */

'use strict'

describe('Scorecard', () => {
  describe('#recordFrameScore()', () => {
    it('records the score of a frame', () => {
      var scorecard = new Scorecard();
      let frame = new Frame();
      frame.roll(0)
      frame.roll(0)
      scorecard.recordFrameScore(frame)
      expect(scorecard._frameScores).toEqual([[0, 0]])
    })
  })

  describe('#calculateTotal()', () => {
    it('responds to .calculateTotal()', () => {
      var scorecard = new Scorecard();
      expect(scorecard.calculateTotal).toBeDefined()
    })
  })
})
