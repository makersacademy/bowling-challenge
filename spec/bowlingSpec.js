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
    it('should not allow you to roll more than 10 pins', function () {

      expect(function () {
        bowling.roll(11)
      }).toThrowError('Invalid number of pins')
    })

    it('should not allow you to roll after the tenth frame is complete', function () {
      for (var i = 0; i < 20; i++) {
        bowling.roll(4)
      }

      expect(function () {
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

  it('should score a single strike correctly', function () {
    bowling.roll(10)
    bowling.roll(3)
    bowling.roll(2)

    expect(bowling.total()).toEqual(20)
  })

  it('should score a double strike correctly', function () {
    bowling.roll(10)
    bowling.roll(10)
    bowling.roll(3)
    bowling.roll(2)

    expect(bowling.total()).toEqual(43)
  })

  it('should score a triple strike correctly', function () {
    bowling.roll(10)
    bowling.roll(10)
    bowling.roll(10)
    bowling.roll(3)
    bowling.roll(2)
    
    expect(bowling.total()).toEqual(73)
  })

  it('can score a gutter game', function () {
    for (var i = 0; i < 20; i++) {
      bowling.roll(0)
    }

    expect(bowling.total()).toEqual(0)
  })

  it('can score a perfect game', function () {
    for (var i = 0; i < 12; i++) {
      bowling.roll(10)
    }

    expect(bowling.total()).toEqual(300)
  })

  it('can roll again after a spare in tenth frame', function () {
    for (var i = 0; i < 9; i++) {
      bowling.roll(10)
    }

    bowling.roll(5)
    bowling.roll(5)

    expect( function() {
      bowling.roll(4)
    }).not.toThrow()
  })

  it('can roll strike then a spare in tenth frame', function () {
    for (var i = 0; i < 10; i++) {
      bowling.roll(10)
    }

    bowling.roll(5)

    expect( function() {
      bowling.roll(5)
    }).not.toThrow()
  })
})
