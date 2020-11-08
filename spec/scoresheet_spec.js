describe('Scoresheet', () => {

  var scoresheet
  var frame

  beforeEach(() => {

    frame = {'First Throw': 5, 'Second Throw': 4}
    scoresheet = new Scoresheet()

  })

  describe('scoreTotal', () => {
    it('totals the scores from all of the frames without bonuses', () => {
      expect(completeNormalGame.scoreTotal()).toEqual(90)
    });
  });

  describe('addFrame', () => {
    it('adds a frame to the game array', () => {
      expect(scoresheet.game).toEqual([])
      scoresheet.addFrame(frame)
      expect(scoresheet.game).toContain(frame)
    });
  });
  

})