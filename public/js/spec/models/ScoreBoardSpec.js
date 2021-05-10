describe('ScoreBoard', () => {
  let scoreBoard
  let frame

  beforeEach(() => {
    scoreBoard = new ScoreBoard()
    frame1 = jasmine.createSpyObj('frame', ['score'])
    frame2 = jasmine.createSpyObj('frame', ['score'])
  })

  describe('#totalScore()', () => {
    it('calculates the total score of all frames', () => {
      scoreBoard.totalScore([frame1])
      expect(frame1.score).toHaveBeenCalled()
    })
  })

  describe('#Scores()', () => {
    it('returns the scores of all frames', () => {
      scoreBoard.scores([frame1, frame2])
      expect(frame1.score).toHaveBeenCalled()
      expect(frame2.score).toHaveBeenCalled()
    })
  })
})
