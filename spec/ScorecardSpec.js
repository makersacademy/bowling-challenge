describe('Scorecard', function(){

  describe('.currentScore', function(){
    it('has an initial score of 0', function(){
      scorecard = new Scorecard();
      expect(scorecard.showScore()).toEqual(0)
    });
  });

  describe('.addFrameScore', function(){
    describe('When user enters score below 10', function(){
      it('adds score to the current score', function(){
        scorecard = new Scorecard();
        scorecard.addFrameScore(2, 2)
        scorecard.addFrameScore(3, 5)
        expect(scorecard.showScore()).toEqual(12)
      });
    });

    describe('When user enters a strike', function(){
      it('it adds the bonus of next frames score', function(){
        scorecard = new Scorecard();
        scorecard.addFrameScore(10, 0)
        scorecard.addFrameScore(3, 5)
        expect(scorecard.showScore()).toBe(26)
      });
    });

    describe('When user enters a spare', function(){
      it('it adds the bonus of the first pin of next game', function(){
        scorecard = new Scorecard();
        scorecard.addFrameScore(5, 5)
        scorecard.addFrameScore(3, 5)
        expect(scorecard.showScore()).toBe(21)
      });
    });
  });

});
