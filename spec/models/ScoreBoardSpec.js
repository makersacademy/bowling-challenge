describe('ScoreBoard', () => {
  describe('#calculateTotalScore()', () => {
    it('calculates the total score of 2 frames', () => {
      const scoreBoard = new ScoreBoard()
      const frame = { score: () => {} }
      spyOn(frame, 'score').and.returnValue(5)

      expect(scoreBoard.calculateTotalScore([frame, frame])).toEqual(10)
      expect(frame.score).toHaveBeenCalledTimes(2)
    })

    it('calculates the total score of 4 frames', () => {
      const scoreBoard = new ScoreBoard()
      const frame = { score: () => {} }
      const frames = [frame, frame, frame, frame]
      spyOn(frame, 'score').and.returnValue(5)

      expect(scoreBoard.calculateTotalScore(frames)).toEqual(20)
      expect(frame.score).toHaveBeenCalledTimes(4)
    })
  })

  describe('#calculateRunningTotal()', () => {
    it('calculates the running total of all frames', () => {
      const scoreBoard = new ScoreBoard()
      const frame = { score: () => {} }
      const frames = [frame, frame, frame, frame]
      spyOn(frame, 'score').and.returnValue(5)

      expect(scoreBoard.calculateRunningTotal(frames)).toEqual([5, 10, 15, 20])
      expect(frame.score).toHaveBeenCalledTimes(4)
    })
  })
})
