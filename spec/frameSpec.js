'use strict'

describe('Frame', function () {
  var frame

  beforeEach(function () {
    frame = new Frame()
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

  it('should have a bonus roll from a spare', function () {
    frame.roll(6)
    frame.roll(4)

    expect(frame.hasBonus()).toEqual(true)
  })

  it('should have bonus rolls from a strike', function () {
    frame.roll(10)

    expect(frame.hasBonus()).toEqual(true)
  })
})
