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
        expect(function() { scorecard.addScore(7) }).toThrowError(Error, "Score for frame is greater than 10")
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

    it('takes into account a spare', function() {
      scorecard.addScore(9)
      scorecard.addScore(1)
      scorecard.addScore(8)
      scorecard.addScore(0)
      scorecard.addScore(5)
      expect(scorecard.calculateScore()).toEqual(31)
    })

    it('correctly calculates for strike in 10th frame', function() {
      for(i=0; i<18; i++) { scorecard.addScore(3) }
      scorecard.addScore(10)
      scorecard.addScore(4)
      scorecard.addScore(6)
      expect(scorecard.calculateScore()).toEqual(74)
    })

    it('correctly calculates for spare in 10th frame', function() {
      for(i=0; i<18; i++) { scorecard.addScore(3) }
        scorecard.addScore(6)
        scorecard.addScore(4)
        scorecard.addScore(6)
        expect(scorecard.calculateScore()).toEqual(70)
    })

    it('perfect game', function() {
      for(i=0; i<12; i++) { scorecard.addScore(10) }
      expect(scorecard.calculateScore()).toEqual(300)
    })

    it('gutter game', function() {
      for(i=0; i<20; i++) { scorecard.addScore(0) }
      expect(scorecard.calculateScore()).toEqual(0)
    })

    it('does not break for pending strike bonus', function() {
      scorecard.addScore(10)
      expect(scorecard.calculateScore()).toEqual(10)
    })

    it('does not break for pending spare bonus', function() {
      scorecard.addScore(6)
      scorecard.addScore(4)
      expect(scorecard.calculateScore()).toEqual(10)
    })
  })

  describe('#isGameOver', function() {
    it('returns true if game is over', function() {
      for(i=0; i<20; i++) { scorecard.addScore(0) }
      expect(scorecard.isGameOver()).toEqual(true)
    })

    it('returns false if still in regular frames', function() {
      for(i=0; i<2; i++) { scorecard.addScore(0) }
      expect(scorecard.isGameOver()).toEqual(false)
    })

    it('returns false if spare in last frame', function() {
      for(i=0; i<18; i++) { scorecard.addScore(0) }
      scorecard.addScore(9)
      scorecard.addScore(1)
      expect(scorecard.isGameOver()).toEqual(false)
    })

    it('returns true if spare into strike in last frame', function() {
      for(i=0; i<18; i++) { scorecard.addScore(0) }
      scorecard.addScore(9)
      scorecard.addScore(1)
      scorecard.addScore(10)
      expect(scorecard.isGameOver()).toEqual(true)
    })

    it('returns false if strike into strike in last frame', function() {
      for(i=0; i<18; i++) { scorecard.addScore(0) }
      scorecard.addScore(10)
      scorecard.addScore(10)
      console.log(scorecard.frame)
      expect(scorecard.isGameOver()).toEqual(false)
    })
  
    it('returns true if strike into spare in last frame', function() {
      for(i=0; i<18; i++) { scorecard.addScore(0) }
      scorecard.addScore(10)
      scorecard.addScore(1)
      scorecard.addScore(9)
      expect(scorecard.isGameOver()).toEqual(true)
    })

    it('returns true if strike in last 3 balls in final frame', function() {
      for(i=0; i<18; i++) { scorecard.addScore(0) }
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(10)
      expect(scorecard.isGameOver()).toEqual(true)
    })

    it('true if strike into strike into any in final frame', function() {
      for(i=0; i<18; i++) { scorecard.addScore(0) }
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(1)
      expect(scorecard.isGameOver()).toEqual(true)
    })

    it('returns true if spare into any in last frame', function() {
      for(i=0; i<18; i++) { scorecard.addScore(0) }
      scorecard.addScore(9)
      scorecard.addScore(1)
      scorecard.addScore(1)
      expect(scorecard.isGameOver()).toEqual(true)
    })
  })
})