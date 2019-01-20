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

    it('the last frame was not a strike', function () {
      expect(scoresheet.wasStrike).toEqual(false)
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

  describe('#calculateSpareBonus', function () {
    describe('if the previous frame was a spare', function () {
      it('immediately adds the currentRoll to the finalScore', function () {
        scoresheet.finalScore = 10
        scoresheet.wasSpare = true
        scoresheet.calculateSpareBonus(9)

        expect(scoresheet.finalScore).toEqual(19)
      })
    })
  })

  describe('#calculateStrikeBonus', function () {
    describe('if the previous frame was a strike', function () {
      it('immediately adds the frame score to the finalScore', function () {
        scoresheet.finalScore = 10
        scoresheet.wasStrike = true
        scoresheet.calculateStrikeBonus(9)

        expect(scoresheet.finalScore).toEqual(19)
      })
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

  describe('#_isFrameComplete', function () {
    it('checks to see if the current frame is complete', function () {
      scoresheet.currentFrame = [0, 0]
      expect(scoresheet._isFrameComplete()).toBeTruthy()
    })

    it('checks to see if the current frame is incomplete', function () {
      scoresheet.currentFrame = [0]
      expect(scoresheet._isFrameComplete()).toBeFalsy()
    })
  })

  describe('#checkStrike', function () {
    it('checks to see if the roll was a strike', function () {
      scoresheet.checkStrike(10)
      expect(scoresheet.wasStrike).toBeTruthy()
    })
  })

  describe('#checkSpare', function () {
    it('checks to see if the roll was a strike', function () {
      scoresheet.checkSpare(10)
      expect(scoresheet.wasSpare).toBeTruthy()
    })
  })
})
