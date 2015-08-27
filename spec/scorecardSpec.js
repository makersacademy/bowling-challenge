describe('Scorecard', function(){
  var scorecard;

  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  describe('scorecard', function(){

    it('roll score should be zero at the begining', function(){
      expect(scorecard.indRoll).toBe(0);
    });

    it('sum of rolls should be zero at the begining', function(){
      expect(scorecard.frameTotal).toBe(0);
    });

    it('sum of all frames should be zero at the begining', function(){
      expect(scorecard.sumTotal).toBe(0);
    });
  });
});
