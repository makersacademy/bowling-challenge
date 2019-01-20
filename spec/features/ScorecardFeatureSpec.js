/* global describe, it, expect, beforeEach */
'use strict'

describe('Scorecard', () => {
  describe('#gutter frame score recorded in scoreCard', () => {
    it('calculates the score as 0 after gutter ball frame', () => {
      var scorecard = new Scorecard();
      let frame = new Frame();
      frame.roll(0)
      frame.roll(0)
      scorecard.recordFrameScore(frame)
      scorecard.calculateTotal()
      expect(scorecard._score).toEqual(0)
    })
  })
})
