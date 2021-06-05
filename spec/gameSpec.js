const Game = require('../lib/game')

describe('Game', () => {
  let game

  class FrameClassDouble {
    addRoll () {}
    addBonus () {}
  }

  beforeEach(() => {
    game = new Game(FrameClassDouble)
  })

  describe('.prototype.bowl()', () => {
    it('sends .addRoll() to the current frame', () => {
      const firstFrame = game._currentFrame
      spyOn(firstFrame, 'addRoll')
      game._addNewFrame()
      const secondFrame = game._currentFrame
      spyOn(secondFrame, 'addRoll')
      game.bowl(4)

      expect(firstFrame.addRoll).not.toHaveBeenCalled()
      expect(secondFrame.addRoll).toHaveBeenCalledWith(4)
    })
  })
})
