function createFrameSpy () {
  return {
    addRoll: () => {},
    score: () => { return 0 },
    addBonus: () => {},
    isOver: () => {},
    _isSpare: () => { return false }
  }
}

describe('Game', () => {
  describe('#addRoll()', () => {
    it('calls addRoll() on the current frame', () => {
      const game = new Game()
      const frame = createFrameSpy()

      game.frames = [frame]
      spyOn(frame, 'addRoll')

      game.addRoll(9)
      expect(frame.addRoll).toHaveBeenCalledWith(9)
    })

    it('calls addRoll() current frame for 2 rolls', () => {
      const game = new Game()
      const frame = createFrameSpy()

      game.frames = [frame]
      spyOn(frame, 'addRoll')

      game.addRoll(6)
      game.addRoll(2)

      expect(frame.addRoll).toHaveBeenCalledTimes(2)
      expect(frame.addRoll).toHaveBeenCalledWith(6)
      expect(frame.addRoll).toHaveBeenCalledWith(2)
    })

    describe('Guard conditions', () => {
      it('throws error when negative number is input', () => {
        const game = new Game()
        expect(() => {
          game.addRoll(-1)
        }).toThrow(new Error(INVALID_ROLL_ERROR))
      })

      it('throws error when number over 10 is input', () => {
        const game = new Game()
        expect(() => {
          game.addRoll(11)
        }).toThrow(new Error(INVALID_ROLL_ERROR))
      })

      it('throws error when game is over', () => {
        const game = new Game()
        const frame = createFrameSpy()

        frame.isOver = () => { return true }
        game.frames = new Array(10).fill(frame)

        expect(() => {
          game.addRoll(5)
        }).toThrow(new Error(GAME_OVER_ERROR))
      })

      it('throws error when roll is more than remaining pins', () => {
        const game = new Game()
        const frame = createFrameSpy()

        frame.score = () => { return 8 }
        game.frames = [frame]

        expect(() => {
          game.addRoll(5)
        }).toThrow(new Error(INVALID_ROLL_ERROR))
      })
    })
  })

  describe('scoring functions', () => {
    describe('#totalScore()', () => {
      it('calls calculateTotalScore() on scoreBoard', () => {
        const scoreBoard = { calculateTotalScore: () => {} }
        const game = new Game(scoreBoard)

        spyOn(scoreBoard, 'calculateTotalScore')
        game.totalScore()

        expect(scoreBoard.calculateTotalScore).toHaveBeenCalledTimes(1)
      })
    })

    describe('#runningTotal()', () => {
      it('calls calculateRunningTotal() on scoreBoard', () => {
        const scoreBoard = { calculateRunningTotal: () => {} }
        const game = new Game(scoreBoard)

        spyOn(scoreBoard, 'calculateRunningTotal')
        game.runningTotal()

        expect(scoreBoard.calculateRunningTotal).toHaveBeenCalledTimes(1)
      })
    })
  })
})
