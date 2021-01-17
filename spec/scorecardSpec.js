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
})