describe('Scorecard', function(){

  describe('.currentScore', function(){
    it('has an initial score of 0', function(){
      scorecard = new Scorecard();
      expect(scorecard.showScore()).toEqual(0)
    });
  });

  describe('When first frame scores are entered', function(){
    it('will not update total score if strike', function(){
      scorecard = new Scorecard();
      scorecard.addFrameScore(10, 0)
      expect(scorecard.showScore()).toBe(0)
    });
    it('will not update total score if spare', function(){
      scorecard = new Scorecard();
      scorecard.addFrameScore(6, 4)
      expect(scorecard.showScore()).toBe(0)
    });
    it('will update total score if framescore is under 10', function(){
      scorecard = new Scorecard();
      scorecard.addFrameScore(6, 4)
      expect(scorecard.showScore()).toBe(0)
    });
  });

  describe('When second frame scores are entered', function(){
    describe('When second frame score is under 10', function(){
      describe('When the first frame score is under 10', function(){
        it('adds current frame score to total', function(){
          scorecard = new Scorecard();
          scorecard.addFrameScore(4, 2)
          scorecard.addFrameScore(6, 3)
          expect(scorecard.showScore()).toBe(15)
        });
      });
      describe('When the first frame score is a strike', function(){
        it('adds the strike + bonus and current framescore to total', function(){
          scorecard = new Scorecard();
          scorecard.addFrameScore(10, 0)
          scorecard.addFrameScore(6, 3)
          expect(scorecard.showScore()).toBe(28)
        });
      });
      describe('When the first frame score is a spare', function(){
        it('adds the strike + bonus and first ball bonus to total', function(){
          scorecard = new Scorecard();
          scorecard.addFrameScore(3, 7)
          scorecard.addFrameScore(6, 3)
          expect(scorecard.showScore()).toBe(25)
        });
      });
    });

    describe('When second frame score is a strike', function(){
      describe('When the first frame score is a spare', function(){
        it('adds the strike + bonus to total', function(){
          scorecard = new Scorecard();
          scorecard.addFrameScore(3, 7)
          scorecard.addFrameScore(10, 0)
          expect(scorecard.showScore()).toBe(20)
        });
      });
    });


  });
});

// scorecard = new Scorecard();
// scorecard.addFrameScore(, )
// expect(scorecard.showScore()).toBe()A
