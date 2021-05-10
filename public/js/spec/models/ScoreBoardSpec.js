describe('ScoreBoard', () => {
  let scoreBoard
  let frame

  beforeEach(() => {
    scoreBoard = new ScoreBoard()
    frame = { score: () => {} }
    spyOn(frame, 'score').and.returnValue(5)
  })

  describe('#totalScore()', () => {
    it('calculates the total score of 2 frames', () => {
      expect(scoreBoard.totalScore([frame, frame])).toEqual(10)
      expect(frame.score).toHaveBeenCalled()
    })

    it('calculates the total score of 4 frames', () => {
      expect(scoreBoard.totalScore([frame, frame, frame, frame])).toEqual(20)
      expect(frame.score).toHaveBeenCalled()
    })
  })
})
