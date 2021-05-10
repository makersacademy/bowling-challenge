describe('ScoreBoard', () => {
  let scoreBoard
  let frame

  beforeEach(() => {
    scoreBoard = new ScoreBoard()
    frame = { score: () => {} }
    spyOn(frame, 'score').and.returnValue(5)
  })

  describe('#totalScore()', () => {
    it('calculates the total score of all frames', () => {
      expect(scoreBoard.totalScore([frame, frame])).toEqual(10)
      expect(frame.score).toHaveBeenCalled()
    })
  })

  describe('#Scores()', () => {
    it('returns the scores of all frames', () => {
      const scores = scoreBoard.scores([frame, frame])
      expect(scores[0]).toEqual(5)
      expect(scores[1]).toEqual(5)
      expect(frame.score).toHaveBeenCalled()
    })
  })
})
