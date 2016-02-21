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
      scoreCard.addFrame1(8);
      scoreCard.addFrame2(1);
      //expect(scoreCard.show).toEqual({[8, 1]}); 
    }); 
  });

  describe('#isFinished', function(){
    it('returns true when game is finished', function(){
      var scoreCard = new ScoreCard();
      scoreCard.frameNumber = 11;
      expect(scoreCard.isFinished()).toEqual(true); 
    });  
  });

  describe('#spareBonus', function(){
    it('toggles spare and calculates bonus', function(){
      var scoreCard = new ScoreCard();
      scoreCard.addFrame1(5);
      scoreCard.addFrame2(5);
      expect(scoreCard.spare).toEqual(true)
      scoreCard.addFrame1(5);
      expect(scoreCard.bonus).toEqual(5);
    });
  });
  describe('#strikeBonus', function(){
    it('toggles strike and calculates bonus', function(){
      var scoreCard = new ScoreCard();
      scoreCard.addFrame1(10);
      expect(scoreCard.strike).toEqual(true)
      scoreCard.addFrame1(5);
      scoreCard.addFrame2(3);
      //expect(scoreCard.).toEqual(8);
    });
  });
});


