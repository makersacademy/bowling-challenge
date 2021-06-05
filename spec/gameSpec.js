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

  describe('.prototype.bowl(pinfall)', () => {
    it('sends .addRoll(pinfall) to the current frame', () => {
      const firstFrame = game._currentFrame
      spyOn(firstFrame, 'addRoll')
      game._addNewFrame()
      const secondFrame = game._currentFrame
      spyOn(secondFrame, 'addRoll')
      game.bowl(4)

      expect(firstFrame.addRoll).not.toHaveBeenCalled()
      expect(secondFrame.addRoll).toHaveBeenCalledWith(4)
    })

    it('sends .addBonus(pinfall) to all frames', () => {
      const firstFrame = game._currentFrame
      spyOn(firstFrame, 'addBonus')
      game._addNewFrame()
      const secondFrame = game._currentFrame
      spyOn(secondFrame, 'addBonus')
      game._addNewFrame()
      const thirdFrame = game._currentFrame
      spyOn(thirdFrame, 'addBonus')
      game.bowl(4)

      expect(firstFrame.addBonus).toHaveBeenCalledWith(4)
      expect(secondFrame.addBonus).toHaveBeenCalledWith(4)
      expect(thirdFrame.addBonus).toHaveBeenCalledWith(4)
    })
  })
})
