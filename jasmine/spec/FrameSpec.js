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
    it('updates the state of a frame to "waiting" after a strike', function () {
      frame.enterRoll(10)
      expect(frame.getState()).toEqual('waiting')
    })
    it('updates the state of a frame to "waiting" after a spare', function () {
      frame.enterRoll(5)
      frame.enterRoll(5)
      expect(frame.getState()).toEqual('waiting')
    })
    it('updates the state of a regular frame to "closed" when the frame is complete', function () {
      frame.enterRoll(4)
      frame.enterRoll(3)
      expect(frame.getState()).toEqual('closed')
    })
    // it('does not allow the game to enter more than 10 pins in two rolls', function () {
    //   frame.enterRoll(5)
    //   expect(function () { frame.enterRoll(6) }).toThrowError('You cannot drop more than 10 pins in one frame');
    // })
  })
  describe('enterBonus', function () {
    it('allows the game to record the number of dropped pins for each bonus roll', function () {
      frame.enterBonus(5)
      expect(frame.getBonusRolls()).toEqual([5])
    })
    it('does not allow the game to enter numbers over 10', function () {
      expect(function () { frame.enterBonus(11) }).toThrowError('Enter a number between 1 and 10');
    })
    it('updates the state of a strike frame to "closed" when the bonuses have been recorded', function () {
      frame.enterRoll(10)
      frame.enterBonus(3)
      frame.enterBonus(5)
      expect(frame.getState()).toEqual('closed')
    })
    it('updates the state of a spare frame to "closed" when the bonuses have been recorded', function () {
      frame.enterRoll(5)
      frame.enterRoll(5)
      frame.enterBonus(6)
      expect(frame.getState()).toEqual('closed')
    })
  })

  describe('_setState', function () {
    describe('state active', function () {
      it('sets the state of a new frame to "active"', function () {
        expect(frame.getState()).toEqual('active')
      })
      it('a frame that is not a strike or spare is "active" after its first roll', function () {
        frame.enterRoll(5)
        expect(frame.getState()).toEqual('active')
      })
    })
    describe('state waiting', function () {
      it('sets the state a frame to "waiting" after a "strike"', function () {
        frame.enterRoll(10)
        frame._setState()
        expect(frame.getState()).toEqual('waiting')
      })
      it('sets the state a frame to "waiting" after a "spare"', function () {
        frame.enterRoll(5)
        frame.enterRoll(5)
        frame._setState()
        expect(frame.getState()).toEqual('waiting')
      })
    })
    describe('state closed', function () {
      it('sets the state of a regular frame to "closed" after two regular rolls', function () {
        frame.enterRoll(5)
        frame.enterRoll(3)
        frame._setState()
        expect(frame.getState()).toEqual('closed')
      })
      it('sets the state of a "spare" frame to "closed" after two regular rolls and one bonus roll', function () {
        frame.enterRoll(5)
        frame.enterRoll(5)
        frame.enterBonus(4)
        frame._setState()
        expect(frame.getState()).toEqual('closed')
      })
      it('sets the state of a "strike" frame to "closed" after one regular roll and two bonus rolls', function () {
        frame.enterRoll(10)
        frame.enterBonus(5)
        frame.enterBonus(4)
        frame._setState()
        expect(frame.getState()).toEqual('closed')
      })
    })
  })

})