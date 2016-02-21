describe('ScoreCard', function(){

  describe('A new game has a', function(){
    it('empty scorecard', function(){
      var scoreCard = new ScoreCard();
      expect(scoreCard.show).toEqual({}); 
    }); 
  });

  describe('#add', function(){
    it('adds score to the scoreCard', function(){
      var scoreCard = new ScoreCard();
      scoreCard.add(8);
      scoreCard.add(1);
      expect(scoreCard.show).toEqual({[8, 1]}); 
    }); 
  });

  describe('#isFinished', function(){
    it('returns true when game is finished', function(){
      var scoreCard = new ScoreCard();
      scoreCard.frameNumber = 11;
      expect(scoreCard.isFinished()).toEqual(true); 
    });  
  });
});

