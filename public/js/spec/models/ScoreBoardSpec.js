describe('ScoreBoard', () => {
  let scoreBoard
  let frame

  beforeEach(() => {
    scoreBoard = new ScoreBoard()
    frame = jasmine.createSpyObj('frame', ['score'])
  })

  describe('#totalScore()', () => {
    it('calculates the total score of all frames', () => {
      scoreBoard.totalScore([frame])
      expect(frame.score).toHaveBeenCalled()
    })
  })
})
