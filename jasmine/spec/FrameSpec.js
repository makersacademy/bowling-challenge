'use strict'

describe('frame', function () {
  let frame

  beforeEach(function () {
    frame = new Frame()
  })

  it('holds the number of pins dropped in the rolls of a frame', function () {
    expect(frame.getRolls().length).toBeWithinRange(0, 3)
  })

  describe('enterRoll', function () {
    it('allows the game to record the number of dropped pins for each roll', function () {
      frame.enterRoll(5)
      expect(frame.getRolls()).toEqual([5])
    })
    it('does not allow the game to enter numbers over 10', function () {
      expect(function () { frame.enterRoll(11) }).toThrowError('Enter a number between 1 and 10');
    })
    it('does not allow the game to enter more than 10 pins in two rolls', function () {
      frame.enterRoll(5)
      expect(function () { frame.enterRoll(6) }).toThrowError('You cannot drop more than 10 pins in one frame');
    })
  })

  describe('has states', function () {
    it('can set the state of a frame to active', function () {
      frame.setState(Symbol('active'))
      expect(frame.isActive()).toReturn(true)
    })
    it('can set the state of a frame to closed', function () {
      frame.setState(Symbol('closed'))
      expect(frame.isClosed()).toReturn(true)
    })
    it('can set the state a frame to open for bonus', function () {
      frame.setState(Symbol('bonus'))
      expect(frame.isBonus()).toReturn(true)
    })
  })

})