function createFrameSpy () {
  return {
    addRoll: () => {},
    score: () => { return 0 },
    addBonus: () => {},
    isOver: () => {}
  }
}

describe('Game', () => {
  describe('#addRoll()', () => {
    it('calls addRoll() on the current frame', () => {
      const frame = createFrameSpy()
      const game = new Game()
      game.frames = [frame]
      spyOn(frame, 'addRoll')

      game.addRoll(9)
      expect(frame.addRoll).toHaveBeenCalledWith(9)
    })

    it('calls addRoll() current frame for 2 rolls', () => {
      const frame = createFrameSpy()
      const game = new Game()
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
        expect(() => { game.addRoll(-1) }).toThrow(new Error('Invalid roll'))
      })

      it('throws error when number over 10 is input', () => {
        const game = new Game()
        expect(() => { game.addRoll(11) }).toThrow(new Error('Invalid roll'))
      })
    })
  })

  describe('scoring functions', () => {
    describe('#totalScore()', () => {
      it('calls totalScore() on scoreBoard', () => {
        const scoreBoard = { totalScore: () => {} }
        const game = new Game(scoreBoard)

        spyOn(scoreBoard, 'totalScore')
        game.totalScore()

        expect(scoreBoard.totalScore).toHaveBeenCalledTimes(1)
      })
    })

    describe('#runningTotal()', () => {
      it('calls runningTotal() on scoreBoard', () => {
        const scoreBoard = { calculateRunningTotal: () => {} }
        const game = new Game(scoreBoard)

        spyOn(scoreBoard, 'calculateRunningTotal')
        game.runningTotal()

        expect(scoreBoard.calculateRunningTotal).toHaveBeenCalledTimes(1)
      })
    })
  })
})
