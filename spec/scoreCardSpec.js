describe('ScoreCard', function(){
  describe('Feature - Gutter Game', function(){

    beforeEach( () => {
      scorecard = new ScoreCard();
    });

    it('Returns a total score of 0', function(){
      expect(scorecard.totalScore()).toEqual(0);
    });

    it('Game is fully completed', function(){
      expect(scorecard.isComplete()).toEqual(true);
    });
  })
})