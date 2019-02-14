describe ('Feature Tests', function() {

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('a gutter game', function() {
    it('has a score of 0', function() {
      for (var i = 0; i < 10; i++) {
        scorecard.rollOne(0)
        scorecard.rollTwo(0)
      }
      expect(scorecard.totalScore).toEqual(0)
    })
  })
})
