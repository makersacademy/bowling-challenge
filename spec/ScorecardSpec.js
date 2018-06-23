describe('Scorecard', function(){
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('.currentScore', function(){
    it('has an initial score of 0', function(){
      expect(scorecard.showScore()).toEqual(0)
    });
  });

  describe('When First Frame', function(){
    it('it will not update total score if strike', function(){
      scorecard.addFrameScore(10, 0)
      expect(scorecard.showScore()).toBe(0)
    });
    it('it will not update total score if spare', function(){
      scorecard.addFrameScore(6, 4)
      expect(scorecard.showScore()).toBe(0)
    });
    it('it will update total score if framescore is under 10', function(){
      scorecard.addFrameScore(6, 4)
      expect(scorecard.showScore()).toBe(0)
    });
  });

  describe('When Second Frame', function(){
    describe('is under 10', function(){
      describe('When the first frame score is under 10', function(){
        it('adds current frame score to total', function(){
          scorecard.addFrameScore(4, 2)
          scorecard.addFrameScore(6, 3)
          expect(scorecard.showScore()).toBe(15)
        });
      });
      describe('When the first frame score is a strike', function(){
        it('adds the strike + bonus and current framescore to total', function(){
          scorecard.addFrameScore(10, 0)
          scorecard.addFrameScore(6, 3)
          expect(scorecard.showScore()).toBe(28)
        });
      });
      describe('When the first frame is a spare', function(){
        it('adds the strike + bonus and first ball bonus to total', function(){
          scorecard.addFrameScore(3, 7)
          scorecard.addFrameScore(6, 3)
          expect(scorecard.showScore()).toBe(25)
        });
      });
    });

    describe('is a strike', function(){
      describe('When the first frame is a spare', function(){
        it('adds the strike + bonus to total', function(){
          scorecard.addFrameScore(3, 7)
          scorecard.addFrameScore(10, 0)
          expect(scorecard.showScore()).toBe(20)
        });
      });
    });

    describe('is a spare', function(){
      describe('When the first frame score is a strike', function(){
        it('adds the strike + 2 ball bonus to total', function(){
          scorecard.addFrameScore(10, 0)
          scorecard.addFrameScore(7, 3)
          expect(scorecard.showScore()).toBe(20)
        });
      });
      describe('When the first frame score is a spare', function(){
        it('adds the strike + first ball bonus to total', function(){
          scorecard.addFrameScore(5, 5)
          scorecard.addFrameScore(7, 3)
          expect(scorecard.showScore()).toBe(17)
        });
      });
    });
  });
});
