'use strict'

describe('Game', function () {
  let game
  // let frame
  let activeFrame
  let waitingFrame
  let closedFrame

  beforeEach(function () {
    game = new Game()
    // frame = jasmine.createSpy('frame', ['_rolls'])

    activeFrame = {
      getState: function () {
        return 'active'
      },
      enterRoll: function () {
        return true
      },
      enterBonus: function () {
        return false
      }
    }

    waitingFrame = {
      getState: function () {
        return 'waiting'
      },
      enterRoll: function () {
        return false
      },
      enterBonus: function () {
        return true
      }
    }

    closedFrame = {
      getState: function () {
        return 'closed'
      },
      enterRoll: function () {
        return false
      },
      enterBonus: function () {
        return false
      }  
    }
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

  describe('_addFrame', function () {
    it('starts a new frame', function () {
      game._frames = []
      game._addFrame()
      expect(game._frames.length).toEqual(1)
    })
  })
  
  describe('enterDroppedPins', function () {
    it('creates a new frame if none exists', function () {
      game._frames = []
      game.enterDroppedPins()
      expect(game._frames.length).toEqual(1)
    })
    it('opens a new frame if none is "active"', function () {
      game._frames = [closedFrame]
      game.enterDroppedPins()
      expect(game._frames.length).toEqual(2)
    })
    it('does not open a new frame if game is already at maximum number of frames', function () {
      for (let i = 0; i < game._numberOfFrames; i++) {
        game._addFrame();
      }
      game.enterDroppedPins()
      expect(game._frames.length).toEqual(game._numberOfFrames)
    })
    it('calls "enterRoll" to enter regular pins on a frame that is "active"', function() { 
      game._frames = [activeFrame, waitingFrame]
      spyOn(activeFrame, "enterRoll")
      spyOn(waitingFrame, "enterRoll")
      game.enterDroppedPins(5)
      expect(activeFrame.enterRoll).toHaveBeenCalledWith(5)
      expect(waitingFrame.enterRoll).not.toHaveBeenCalledWith(5)
    })
    it('calls "enterBonus" to enter bonus pins on a frame that is "waiting"', function () {
      game._frames = [waitingFrame, activeFrame]
      spyOn(activeFrame, "enterBonus")
      spyOn(waitingFrame, "enterBonus")
      game.enterDroppedPins(5)
      expect(waitingFrame.enterBonus).toHaveBeenCalledWith(5)
      expect(activeFrame.enterBonus).not.toHaveBeenCalledWith(5)
    })
    it('adds regular pins to the "active" frame and bonus pins to "waiting" frames', function () {
      game._frames = [activeFrame, waitingFrame]
      spyOn(activeFrame, "enterRoll")
      spyOn(waitingFrame, "enterBonus")
      game.enterDroppedPins(5)
      expect(waitingFrame.enterBonus).toHaveBeenCalledWith(5)
      expect(activeFrame.enterRoll).toHaveBeenCalledWith(5)
    })
  })

})
