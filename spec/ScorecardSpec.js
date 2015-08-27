describe('Scorecard', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('can see scores', function(){

    it('running total starts at zero', function(){
        expect(scorecard.runningTotal).toBe(0);
    });

    it('frame total starts at zero', function(){
        expect(scorecard.frameTotal).toBe(0);
    });

    it('frame total can be modified', function(){
        scorecard.registerScore(1)
        expect(scorecard.frameTotal).toBe(1);
    });
  });
});
