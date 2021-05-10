describe('Game', () => {
  let game
  let frame
  let frameClass

  beforeEach(() => {
    frameClass = jasmine.createSpy('frameClass')
    game = new Game(frameClass)
    frame = jasmine.createSpyObj('frame', [
      'addRoll', 'isOver', 'isFinal', 'score', 'addBonus'
    ])
    spyOn(game, '_createNewFrame').and.returnValue(game.frames.push(frame))
  })

  describe('#addRoll()', () => {
    it('adds roll to current frame', () => {
      game.addRoll(9)
      expect(frame.addRoll).toHaveBeenCalledWith(9)
    })

    it('adds both rolls to current frame', () => {
      game.addRoll(6)
      game.addRoll(2)

      expect(frame.addRoll).toHaveBeenCalledTimes(2)
      expect(frame.addRoll).toHaveBeenCalledWith(6)
      expect(frame.addRoll).toHaveBeenCalledWith(2)
    })

    it('throws error when negative number is input', () => {
      expect(() => { game.addRoll(-1) }).toThrow(new Error('Invalid roll'))
    })

    it('throws error when number over 10 is input', () => {
      expect(() => { game.addRoll(11) }).toThrow(new Error('Invalid roll'))
    })
  })

  describe('scoring functions', () => {
    describe('#totalScore()', () => {
      it('calls totalScore() on scoreBoard', () => {
        const scoreBoard = { totalScore: () => {} }
        const game = new Game(frameClass, scoreBoard)
        spyOn(scoreBoard, 'totalScore')
        game.totalScore()
        expect(scoreBoard.totalScore).toHaveBeenCalledTimes(1)
      })
    })

    describe('#runningTotal()', () => {
      it('calls runningTotal() on scoreBoard', () => {
        const scoreBoard = { calculateRunningTotal: () => {} }
        const game = new Game(frameClass, scoreBoard)
        spyOn(scoreBoard, 'calculateRunningTotal')
        game.runningTotal()
        expect(scoreBoard.calculateRunningTotal).toHaveBeenCalledTimes(1)
      })
    })
  })
})
