var Pins = require('../public/src/pins')

describe('Pins class', function () {
  describe('#managePins', function () {
    var pins

    beforeEach(function () {
      pins = new Pins()
    })

    it('reduces pins standing number by score', function () {
      pins.managePins(3)
      expect(pins.leftStanding).toEqual(7)
    })

    it('resets pins standing number after two bowls', function () {
      pins.managePins(3)
      pins.managePins(3)
      expect(pins.leftStanding).toEqual(10)
    })

    it('resets pins standing number after strike', function () {
      pins.managePins(10)
      expect(pins.leftStanding).toEqual(10)
    })
  })

  describe('#isImpossibleScore', function () {
    var pins

    beforeEach(function () {
      pins = new Pins()
    })

    it('raises an error if the input over 10', function () {
      expect(function () { pins.isImpossibleScore(12) }).toThrow('Not enough pins')
    })

    it('raises an error if the input exceeds number of pins left', function () {
      pins.managePins(9)
      expect(function () { pins.isImpossibleScore(2) }).toThrow('Not enough pins')
    })
  })
})
