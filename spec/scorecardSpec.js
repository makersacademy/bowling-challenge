describe('Scorecard', function(){
  var scorecard
  beforeEach(function(){
    scorecard = new Scorecard();
  })
  describe('inputRoll', function(){
    it('adds the first roll result to the pinsKnocked array', function(){
      scorecard.inputRoll(1);
      expect(scorecard.pinsKnocked()).toEqual([1])
    })
  })
})