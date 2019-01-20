/* global describe, it, expect, beforeEach */

'use strict'

describe('Scorecard', () => {
  describe('#recordFrameScore()', () => {
    it('records the score of a frame', () => {
      var scorecard = new Scorecard();
      let frame = new Frame();
      frame.roll(3)
      frame.roll(2)
      scorecard.recordFrameScore(frame)
      expect(scorecard._frameScores).toContain(frame._score)
    })
  })
  
  describe('#calculateTotal()', () => {
    it('responds to .calculateTotal()', () => {
      var scorecard = new Scorecard();
      expect(scorecard.calculateTotal).toBeDefined()
    })
  })
})
