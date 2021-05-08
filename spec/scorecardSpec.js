describe('Scorecard', function() {
  let scorecard

  beforeEach(function() {
    scorecard = new Scorecard
  })

  describe('#addScore', function() {
    describe('first roll', function() {
      it('adds score to scorecard', function() {
        scorecard.addScore(7)
        expect(scorecard.scorecard[0][0]).toEqual(7)
      })

      it('sets this.roll to 2 after it is called', function() {
        scorecard.addScore(2)
        expect(scorecard.roll).toEqual(2)
      }) 

      it('if score is 10 (strike) begin next frame', function() {
        scorecard.addScore(10)
        expect(scorecard.frame).toEqual(2)
      })

      it('if score is 10 (strike) next frame starts with @roll = 1', function() {
        scorecard.addScore(10)
        expect(scorecard.roll).toEqual(1)
      })
    })

    describe('second roll', function() {
      it('next frame after second roll', function() {
        scorecard.addScore(2)
        scorecard.addScore(2)
        expect(scorecard.frame).toEqual(2)
      })

      it('adds score to sub-array based on the frame', function() {
        for(i=0; i<3; i++) {
          scorecard.addScore(0)
        }
        scorecard.addScore(4)
        expect(scorecard.scorecard[1][1]).toEqual(4)
      })

      it('raises error if score for frame > 10', function() {
        scorecard.addScore(7)
        expect(function() { scorecard.addScore(7) }).toThrowError(Error, "Error: Score for frame is greater than 10")
      })
    })
  })

  describe('#calculateScore', function() {
    it('can calculate a simple score with no bonuses', function() {
      scorecard.addScore(7)
      scorecard.addScore(1)
      scorecard.addScore(8)
      scorecard.addScore(0)
      expect(scorecard.calculateScore()).toEqual(16)
    })

    it('takes into account a strike and gives bonus', function() {
      scorecard.addScore(10)
      scorecard.addScore(1)
      scorecard.addScore(8)
      scorecard.addScore(0)
      scorecard.addScore(5)
      expect(scorecard.calculateScore()).toEqual(33)
    })
  })
})