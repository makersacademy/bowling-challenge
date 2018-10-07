'use strict'

describe('Game', function () {
  let game
  let frame
  let frameCurrent
  let frameOpen
  let frameClosed

  beforeEach(function () {
    game = new Game()
    frame = jasmine.createSpy('frame', ['_rolls'])

    frameCurrent = {
      isCurrent: function () {
        return true
      },
      enterPins: true
    }

    frameOpen = {
      isCurrent: function () {
        return false
      }
    }

    frameClosed = {
      isCurrent: function () {
        return false
      }
    }
    // ['isOpen', 'isClosed', 'isCurrent', 'enterBonus', 'enterPins'])
  })

  it('shows the number of frames of a game', function () {
    expect(game.getNumberOfFrames()).toBeGreaterThan(0)
  })
  it('has a default number of frames of 10', function () {
    expect(game.getNumberOfFrames()).toEqual(10)
  })
  it('shows the number of the current frame of a game', function () {
    expect(game._frames.length).toEqual(jasmine.any(Number))
  })
  it('shows the number of the current frame of a game', function () {
    expect(game._frames.length).toBeWithinRange(0, 10)
  })
  
  describe('enterDroppedPins', function () {
    it('creates a new frame if none exists', function () {
      game._frames = []
      game.enterDroppedPins()
      expect(game._frames.length).toEqual(1)
    })
    it('does not open a new frame if game has maximum number of frames', function () {
      for (let i = 0; i < game._numberOfFrames; i++) {
        game.addFrame();
      }
      expect(function () { game.enterDroppedPins() }).toThrowError('You cannot start a new frame')
      expect(game._frames.length).toEqual(game._numberOfFrames)
    })
    it('opens a new frame if none is current', function () {
      
    })
    // it('calls "enterRoll" on frame that isCurrent', function() {
    //   // game._frames = [frameCurrent]
    //   // spyOn(frameCurrent, "enterPins")
    //   // game.enterDroppedPins(5)
    //   // expect(frameCurrent.enterPins).toHaveBeenCalledWith(5)
    // })
  })

  describe('addFrame', function () {
    it('starts a new frame', function () {
      game._frames = []
      game.addFrame()
      expect(game._frames.length).toEqual(1)
    })
  })

})
