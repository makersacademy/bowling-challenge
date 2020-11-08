describe('Scoresheet', () => {
  var strike
  var scoresheet
  var frame
  var spare

  beforeEach(() => {
    strike = {'First Throw': 10, 'Second Throw': 0, bonus: 'strike'}
    frame = {'First Throw': 5, 'Second Throw': 4, bonus: 'null'}
    spare = {'First Throw': 7, 'Second Throw': 3, bonus: 'spare'}
    scoresheet = new Scoresheet()

  })

  describe('scoreTotal', () => {
    it('totals the scores from all of the frames without any strike or spare bonuses', () => {
      for (let step = 0; step < 10; step++) {
        scoresheet.addFrame(frame)
      }
      scoresheet.addBonus();
      // scoresheet.totalPlusBonus();
      expect(scoresheet.scoreTotal()).toEqual(90)
    });

    it('totals the scores from all of the frames with strike bonuses', () => {
      scoresheet.addFrame(strike)
      scoresheet.addFrame(strike)
      scoresheet.addFrame(spare)
      for (let step = 0; step < 7; step++) {
        scoresheet.addFrame(frame)
      }
      scoresheet.addBonus();
      // scoresheet.totalPlusBonus();
      expect(scoresheet.scoreTotal()).toEqual(125)
    });
  });

  describe('addFrame', () => {
    it('adds a frame to the game array', () => {
      expect(scoresheet.game).toEqual([])
      scoresheet.addFrame(frame)
      expect(scoresheet.game).toContain(frame)
    });
  });

  describe('addBonus', () => {
    it('changes the frame[bonus] to be the number of pins knocked down by the next two throws if there was a strike bonus', () => {
      scoresheet.addFrame(strike)
      for (let step = 0; step < 9; step++) {
        scoresheet.addFrame(frame)
      }
      scoresheet.addBonus()
      expect(scoresheet.game[0].bonusScore).toEqual(9)
    });

    it('changes the frame[bonus] to be the number of pins knocked down by the next two throws if the there was two consecutive strikes', () => {
      scoresheet.addFrame(strike)
      scoresheet.addFrame(strike)

      for (let step = 0; step < 8; step++) {
        scoresheet.addFrame(frame)
      }
      scoresheet.addBonus()
      expect(scoresheet.game[0].bonusScore).toEqual(15)
      expect(scoresheet.game[1].bonusScore).toEqual(9)
    
    });

    it('changes the frame[bonus] to be the number of pins knocked down by the next throw if there is a spare bonus', () => {
      scoresheet.addFrame(spare)
      for (let step = 0; step < 9; step++) {
        scoresheet.addFrame(frame)
      }
      scoresheet.addBonus()
      expect(scoresheet.game[0].bonusScore).toEqual(5)
    });
  });
  

})