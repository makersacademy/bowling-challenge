describe('ScoreCard', function(){

  describe('A new game has a', function(){
    it('empty scorecard', function(){
      var scoreCard = new ScoreCard();
      expect(scoreCard.show).toEqual({}); 
    }); 
  });
};
