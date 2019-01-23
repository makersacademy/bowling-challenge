/* global describe, it, expect, beforeEach */

'use strict'

describe('Scorecard', () => {
  let scorecard
  let frame
  let frameTwo
  let frameThree
  let frameFour

  beforeEach(() => {
    scorecard = new Scorecard()
  })

  describe('#recordFrameScore()', () => {
    it('will not allow more than 10 frames to be recorded', () => {
      frame = new Frame();
      frame.roll(4)
      frame.roll(3)
      var times = 10
      for (var i = 0; i < times; i++) {
        scorecard.recordFrameScore(frame)
      }
      var error = 'Cannot record frame: 10 frames already recorded'
      expect(function () { scorecard.recordFrameScore(frame) }).toThrow(new Error(error))
    })

    it('calculates the bonus points following spares', () => {
      frame = new Frame();
      frame.roll(3)
      frame.roll(7)
      scorecard.recordFrameScore(frame)
      frameTwo = new Frame();
      frameTwo.roll(7)
      frameTwo.roll(1)
      scorecard.recordFrameScore(frameTwo)
      expect(scorecard._bonusPoints).toEqual(7)
    })

    it('calculates the bonus points following a strike', () => {
      frame = new Frame();
      frame.roll(10)
      frame.roll(0)
      scorecard.recordFrameScore(frame)
      frameTwo = new Frame();
      frameTwo.roll(2)
      frameTwo.roll(2)
      scorecard.recordFrameScore(frameTwo)
      expect(scorecard._bonusPoints).toEqual(4)
    })

    it('calculates the bonus points after consecutive strikes', () => {
      frame = new Frame();
      frame.roll(10)
      frame.roll(0)
      scorecard.recordFrameScore(frame)
      frameTwo = new Frame();
      frameTwo.roll(10)
      frameTwo.roll(0)
      scorecard.recordFrameScore(frameTwo)
      frameThree = new Frame();
      frameThree.roll(10)
      frameThree.roll(0)
      scorecard.recordFrameScore(frameThree)
      frameFour = new Frame();
      frameFour.roll(10)
      frameFour.roll(0)
      scorecard.recordFrameScore(frameThree)
      expect(scorecard._bonusPoints).toEqual(60)
    })
  })

  describe('#calculateNormalPoints()', () => {
    it('calculates the total non-bonus points', () => {
      frame = new Frame();
      frame.roll(5)
      frame.roll(5)
      scorecard.recordFrameScore(frame)
      scorecard.calculateTotal()
      expect(scorecard._normalPoints).toEqual(10)
    })
  })
})
