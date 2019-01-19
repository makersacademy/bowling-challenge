'use strict'
/* global describe, it, expect, beforeEach, Scoresheet */

describe('Scoresheet', function () {
  let scoresheet

  beforeEach(function () {
    scoresheet = new Scoresheet()
  })

  describe('by default', function () {
    it('is not complete', function () {
      expect(scoresheet.isComplete).toEqual(false)
    })

    it('has a final score of 0', function () {
      expect(scoresheet.finalScore).toEqual(0)
    })

    it('has 0 rolls', function () {
      expect(scoresheet.rollCount).toEqual(0)
    })

    it('the last frame was not a spare', function () {
      expect(scoresheet.wasSpare).toEqual(false)
    })
  })

  describe('#roll', function () {
    it('increments the rollCount by one', function () {
      scoresheet.roll()
      expect(scoresheet.rollCount).toEqual(1)
    })

    it('rolling 20 times completes the scoresheet', function () {
      for (let i = 1; i <= 20; i++) {
        scoresheet.roll(0)
      }

      expect(scoresheet.isComplete).toBeTruthy()
    })
  })

  describe('#updateFrame', function () {
    it('adds the current roll to the frame score', function () {
      scoresheet.updateFrame(1)
      expect(scoresheet.currentFrame).toEqual([1])
    })

    describe('when the frame is complete', function () {
      beforeEach(function () {
        scoresheet.currentFrame = [1]
        scoresheet.updateFrame(9)
      })

      it('adds the frame score to the finalScore', function () {
        expect(scoresheet.finalScore).toEqual(10)
      })

      it('changes wasSpare to true when the frame is a spare', function () {
        expect(scoresheet.wasSpare).toBeTruthy()
      })

      it('clears currentFrame', function () {
        expect(scoresheet.currentFrame).toEqual([])
      })
    })
  })

  describe('#calculateFrameScore', function () {
    it('checks to see if the currentFrame is a spare', function () {
      scoresheet.currentFrame = [1, 9]
      expect(scoresheet.calculateFrameScore()).toEqual(10)
    })
  })

  describe('#isFrameComplete', function () {
    it('checks to see if the current frame is complete', function () {
      scoresheet.currentFrame = [0, 0]
      expect(scoresheet.isFrameComplete()).toBeTruthy()
    })

    it('checks to see if the current frame is incomplete', function () {
      scoresheet.currentFrame = [0]
      expect(scoresheet.isFrameComplete()).toBeFalsy()
    })
  })
})
