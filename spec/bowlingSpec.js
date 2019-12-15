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
      expect(bowling.currentFrame).toContain(5)
    })

    it('should not allow you to roll after the tenth frame is complete', function () {
      for(var i = 0; i < 20; i++) {
        bowling.roll(4)
      }
      
      expect( function () {
        bowling.roll(4)
      }).toThrowError('Game is complete, cannot roll')
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
