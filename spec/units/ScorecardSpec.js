/* global describe, it, expect, beforeEach */

'use strict'

describe('Scorecard', () => {
  let scorecard
  let frameOne
  let frameTwo
  let frameThree

  beforeEach(() => {
    scorecard = new Scorecard()
    frameOne = new Frame()
    frameTwo = new Frame()
    frameThree = new Frame()
  })

  describe('#recordFrameScore()', () => {
    it('will not allow more than 10 frames to be recorded', () => {
      var times = 10
      for (var i = 0; i < times; i++) {
        scorecard.recordFrameScore(frameOne)
      }
      var error = 'Cannot record frame: 10 frames already recorded'
      expect(function () { scorecard.recordFrameScore(frameTwo) }).toThrow(new Error(error))
    })

    it('tracks bonus points from spares', () => {
      frameOne.roll(3)
      frameOne.roll(7)
      scorecard.recordFrameScore(frameOne)
      frameTwo.roll(7)
      frameTwo.roll(1)
      scorecard.recordFrameScore(frameTwo)
      expect(scorecard._bonusPoints).toEqual(7)
    })

    it('tracks bonus points from a strike', () => {
      frameOne.roll(10)
      frameOne.roll(0)
      scorecard.recordFrameScore(frameOne)
      frameTwo.roll(2)
      frameTwo.roll(2)
      scorecard.recordFrameScore(frameTwo)
      expect(scorecard._bonusPoints).toEqual(4)
    })

    it('sets frame status to normal after non spare/strike frame', () => {
      frameOne.roll(0)
      frameOne.roll(5)
      scorecard.recordFrameScore(frameOne)
      expect(scorecard._frameStatus).toEqual('normal')
    })

    it('sets frame status to spare after a spare', () => {
      frameOne.roll(5)
      frameOne.roll(5)
      scorecard.recordFrameScore(frameOne)
      expect(scorecard._frameStatus).toEqual('spare')
    })

    it('sets frame status to strike after a strike', () => {
      frameOne.roll(10)
      frameOne.roll(0)
      scorecard.recordFrameScore(frameOne)
      expect(scorecard._frameStatus).toEqual('strike')
    })
  })

  describe('#calculateTotal()', () => {
    it('calculates the total non-bonus points', () => {
      frameOne.roll(1)
      frameOne.roll(2)
      scorecard.recordFrameScore(frameOne)
      scorecard.calculateTotal()
      expect(scorecard._normalPoints).toEqual(3)
    })
  })
})
