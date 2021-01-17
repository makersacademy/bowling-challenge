describe('Scorecard', function(){
  var scorecard
  beforeEach(function(){
    scorecard = new Scorecard();
  })
  describe('inputRoll', function(){
    it('adds the first roll result to the pinsKnocked array', function(){
      scorecard.inputRoll(1)
      expect(scorecard.pinsKnocked()[0]).toEqual([1])
    })

    it('adds the second roll result to the pinsKnocked array', function(){
      scorecard.inputRoll(1)
      scorecard.inputRoll(1)
      expect(scorecard.pinsKnocked()[0]).toEqual([1, 1])
    })

    it('adds new frame tuples to the pinsKnocked array when previous frame complete', function(){
      scorecard.inputRoll(1)
      scorecard.inputRoll(1)
      scorecard.inputRoll(1)
      expect(scorecard.pinsKnocked()[1]).toEqual([1])
    })

    it('correctly handles the 10th frame with all strikes', function(){
      for (let i = 0; i < 12; i++) {
        scorecard.inputRoll(10);
      }
      expect(scorecard.sum(scorecard.frameScores())).toEqual(300)
    })

  })

  describe('calculateFrame', function(){
    it('adds the total score from knocked pins to the frameScores array', function(){
      scorecard.inputRoll(1)
      scorecard.inputRoll(1)
      expect(scorecard.frameScores()[0]).toEqual(2)
    })
  })

  describe('addStrike', function(){
    it('adds a strike flag to the relevant frame in the strikesSpares hash', function(){
      scorecard.inputRoll(10)
      expect(scorecard.strikesSpares()[0]).toEqual('strike')
    })
  })

  describe('addSpare', function(){
    it('adds a spare flag to the relevant frame in the strikesSpares hash', function(){
      scorecard.inputRoll(9)
      scorecard.inputRoll(1)
      expect(scorecard.strikesSpares()[0]).toEqual('spare')
    })
  })

  describe('applyBonus', function(){
    it('adds the correct bonus points to a strike frame', function(){
      scorecard.inputRoll(10)
      scorecard.inputRoll(1)
      scorecard.inputRoll(1)
      expect(scorecard.frameScores()[0]).toEqual(12)
    })

    it('adds the correct bonus points to a spare frame', function(){
      scorecard.inputRoll(9)
      scorecard.inputRoll(1)
      scorecard.inputRoll(1)
      scorecard.inputRoll(1)
      expect(scorecard.frameScores()[0]).toEqual(11)
    })

    it('accounts for doubles', function(){
      scorecard.inputRoll(10)
      scorecard.inputRoll(10)
      scorecard.inputRoll(9)
      scorecard.inputRoll(0)
      expect(scorecard.frameScores()[0]).toEqual(29)
      expect(scorecard.frameScores()[1]).toEqual(19)
      expect(scorecard.frameScores()[2]).toEqual(9)
    })

    it('accounts for turkeys', function(){
      scorecard.inputRoll(10)
      scorecard.inputRoll(10)
      scorecard.inputRoll(10)
      scorecard.inputRoll(9)
      scorecard.inputRoll(0)
      expect(scorecard.frameScores()[0]).toEqual(30)
      expect(scorecard.frameScores()[1]).toEqual(29)
      expect(scorecard.frameScores()[2]).toEqual(19)
      expect(scorecard.frameScores()[3]).toEqual(9)
    })
  })
})