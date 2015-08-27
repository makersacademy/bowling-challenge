describe('Scorecard', function(){
  var scorecard;

  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  describe('scorecard', function(){

    it('roll score is zero at the begining', function(){
      expect(scorecard.indRoll).toBe(0);
    });

    it('sum of rolls is zero at the begining', function(){
      expect(scorecard.frameTotal).toBe(0);
    });

    it('sum of all frames is zero at the begining', function(){
      expect(scorecard.sumTotal).toBe(0);
    });

    it('can reqister rolls', function(){
      scorecard.regRolls(1, 1)
      expect(scorecard.frameTotal).toBe(2);
    });
  });
});
