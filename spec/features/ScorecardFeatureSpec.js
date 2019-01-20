/* global describe, it, expect, beforeEach */
'use strict'

describe('Scorecard', () => {
  describe('#gutter frames', () => {
    it('calculates the score as 0 after gutter ball frame', () => {
      var scorecard = new Scorecard();
      let frame = new Frame();
      frame.roll(0)
      frame.roll(0)
      scorecard.recordFrameScore(frame)
      scorecard.calculateTotal()
      expect(scorecard._score).toEqual(0)
    })

    it('calculates the score as 1 after 2 frames', () => {
      var scorecard = new Scorecard();
      let frame = new Frame();
      let frameOne = new Frame();
      frame.roll(0)
      frame.roll(0)
      scorecard.recordFrameScore(frame)
      frameOne.roll(0)
      frameOne.roll(1)
      scorecard.recordFrameScore(frameOne)
      scorecard.calculateTotal()
      expect(scorecard._score).toEqual(1)
    })
  })
})
