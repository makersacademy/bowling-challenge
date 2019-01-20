/* global describe, it, expect, beforeEach */
'use strict'

describe('Scorecard', () => {
  describe('#gutter frame score recorded in scoreCard', () => {
    it('player misses the pins with 2 roles', () => {
      var scorecard = new Scorecard();
      let frame = new Frame();
      frame.roll(0)
      frame.roll(0)
      let totalScore = scorecard.calculateTotal()
      expect(totalScore).toEqual(0)
    })
  })
})
