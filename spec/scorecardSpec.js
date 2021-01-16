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
})