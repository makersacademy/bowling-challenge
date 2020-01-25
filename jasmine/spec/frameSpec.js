'use strict'

describe('frame', function () {
  let frame

  beforeEach(function () {
    frame = new Frame()
  })

  describe('getShot', function () {
    it('get the number of pin hit on shot 1', function () {
      frame.addShot(7)
      expect(frame.getShot(1)).toEqual(7)
    })

    it('get the number of pin hit on shot 2', function () {
      frame.addShot(2)
      frame.addShot(4)
      expect(frame.getShot(2)).toEqual(4)
    })
  })

  describe('addShot', function () {
    it('throw an error if trying to add a third shot', function () {
      frame.addShot(2)
      frame.addShot(2)
      expect(function () { frame.addShot(2) }).toThrowError(Error, 'You already inserted two shot!')
    })

    it('throw an error if passing the wrong kind of value', function () {
      expect(function () { frame.addShot('3') }).toThrowError(TypeError, 'You need to insert the number of pins as an Integer')
      expect(function () { frame.addShot(true) }).toThrowError(TypeError, 'You need to insert the number of pins as an Integer')
      expect(function () { frame.addShot(5.3) }).toThrowError(TypeError, 'You need to insert the number of pins as an Integer')
      expect(function () { frame.addShot([3, 4]) }).toThrowError(TypeError, 'You need to insert the number of pins as an Integer')
      expect(function () { frame.addShot({ shot: 2 }) }).toThrowError(TypeError, 'You need to insert the number of pins as an Integer')
    })

    it('throw an error if trying to add more than 10 pins to a shot', function () {
      expect(function () { frame.addShot(11) }).toThrowError(Error, "You can't hit more than 10 pins!")
    })

    it('throw an erorr if adding more then 10 pins between the two shots', function () {
      frame.addShot(6)
      expect(function () { frame.addShot(9) }).toThrowError(Error, "You can't hit more than 10 pins!")
    })
  })

  describe('isSpare', function () {
    it('return false if is not a spare', function () {
      frame.addShot(2)
      frame.addShot(7)
      expect(frame.isSpare()).toEqual(false)
    })

    it('return true if is a spare', function () {
      frame.addShot(3)
      frame.addShot(7)
      expect(frame.isSpare()).toEqual(true)
    })
  })
})
