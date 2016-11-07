'use strict'

describe('Frame:', function () {
  var frame

  beforeEach(function () {
    frame = new Frame()
  })

  describe('Keeping Score', function () {
    beforeEach(function () {
      frame.firstRoll(8)
      frame.secondRoll(1)
    })

    it('tracks first and second rolls', function () {
      expect(frame.firstRollTotal).toEqual(8)
      expect(frame.secondRollTotal).toEqual(1)
    })

    it('keeps a tempTotal', function () {
      expect(frame.tempTotal).toEqual(9)
    })
  })

  describe('Strikes', function () {
    it('with 10 pins on firstRoll a strike is recorded', function () {
      frame.firstRoll(10)
      expect(frame.isStrike).toEqual(true)
    })
    it('when <10 pins on firstRoll a strike is not recorded', function () {
      frame.firstRoll(9)
      expect(frame.isStrike).toEqual(false)
    })
  })
  describe('Spares', function () {
    it('with 10 pins on first and second roll a spare is recorded', function () {
      frame.firstRoll(9)
      frame.secondRoll(1)
      expect(frame.isSpare).toEqual(true)
    })
    it('when <10 pins on first and second roll a spare is not recorded', function () {
      frame.firstRoll(5)
      frame.secondRoll(3)
      expect(frame.isSpare).toEqual(false)
    })
  })
  describe('Finishing a frame', function () {
    it('bowling a strike should end the frame', function () {
      frame.firstRoll(10)
      expect(frame.isFinished).toEqual(true)
    })
    it('Secondroll should finish the frame', function () {
      frame.firstRoll(5)
      frame.secondRoll(1)
      expect(frame.isFinished).toEqual(true)
    })
  })
})
