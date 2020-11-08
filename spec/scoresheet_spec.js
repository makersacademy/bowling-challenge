describe('Scoresheet', () => {

  var scoresheet
  var frame

  beforeEach(() => {

    frame = {'First Throw': 5, 'Second Throw': 4}
    scoresheet = new Scoresheet()

  })

  describe('scoreTotal', () => {
    it('totals the scores from all of the frames without bonuses', () => {
      for (let step = 0; step < 10; step++) {
        scoresheet.addFrame(frame)
      }
      expect(scoresheet.scoreTotal()).toEqual(90)
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