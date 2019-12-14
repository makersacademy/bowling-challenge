'use strict'

describe('Bowling', function () {
  var bowling

  beforeEach(function () {
    bowling = new Bowling()
  })

  it('has a total score', function () {
    bowling.roll(1)
    bowling.roll(5)
    expect(bowling.total()).toEqual(6)
  })

  describe('#roll', function () {
    it('adds the roll to the current frame', function () {
      bowling.roll(5)
      expect(bowling.current_frame).toContain(5)
    })
  })

  it('should score a spare correctly', function () {
    bowling.roll(6)
    bowling.roll(4)
    bowling.roll(3)
    bowling.roll(2)
    expect(bowling.total()).toEqual(18)
  })
})
