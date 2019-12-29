'use strict'

describe('Frame', function () {
  var frame

  beforeEach(function () {
    frame = new Frame ()
  })

  describe('#roll', function () {
    it('adds the roll to the frame', function () {
      frame.roll(5)

      expect(frame.score).toContain(5)
    })
  })

  describe('#addBonus', function () {
    it('adds bonus points to the frame', function () {
      frame.roll(6)
      frame.roll(4)

      frame.addBonus(5)
      expect(frame.bonus.points).toEqual(5)
    })
  })

  describe('#spare', function () {
    it('adds a bonus roll to the frame', function () {
      frame.spare()
      expect(frame.bonus.rolls).toEqual(1)
    })
  })

  describe('#strike', function () {
    it('adds bonus rolls to the frame', function () {
      frame.strike()
      expect(frame.bonus.rolls).toEqual(2)
    })
  })

})
