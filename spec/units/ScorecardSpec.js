/* global describe, it, expect, beforeEach */

'use strict'

describe('Scorecard', () => {
  let scorecard
  let frame

  beforeEach(() => {
    scorecard = new Scorecard();
    frame = new Frame();
    frame.roll(5)
    frame.roll(5)
  })

  describe('#recordFrameScore()', () => {
    it('will not allow more than 10 frames to be recorded', () => {
      var times = 10
      for (var i = 0; i < times; i++) {
        scorecard.recordFrameScore(frame)
      }
      var error = 'Cannot record frame: 10 frames already recorded'
      expect(function () { scorecard.recordFrameScore(frame) }).toThrow(new Error(error))
    })
  })

  describe('#calculateNormalPoints()', () => {
    it('calculates the total non-bonus points', () => {
      scorecard.recordFrameScore(frame)
      scorecard.calculateNormalPoints()
      expect(scorecard._normalPoints).toEqual(10)
    })
  })

  describe('#calculateBonusPoints()', () => {
    it('calculates the bonus points following spares', () => {
      scorecard.recordFrameScore(frame)
      let frameTwo = new Frame();
      frameTwo.roll(7)
      frameTwo.roll(3)
      scorecard.recordFrameScore(frameTwo)
      scorecard.calculateBonusPoints()
      expect(scorecard._bonusPoints).toEqual(7)
    })
  })
})
