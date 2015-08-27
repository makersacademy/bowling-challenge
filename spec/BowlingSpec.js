describe('BowlingScore', function(){

  beforeEach(function(){
    bowlingScore = new BowlingScore
  });

  var bowlingScore

  describe('score', function(){

    it('starts at 0', function(){
      expect(bowlingScore.score).toBe(0);
    });
  });

});