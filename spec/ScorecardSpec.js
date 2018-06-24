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

  describe('When 3rd to 9th Frame', function(){
    describe('When current frame is under 10', function(){
      describe('When previous frame is under 10', function(){
        it('adds the current frame score to total', function(){
          scorecard.addFrameScore(10, 0)
          scorecard.addFrameScore(8, 1)
          scorecard.addFrameScore(4, 3)
          expect(scorecard.showScore()).toBe(35)
        });
        describe('When the previous frame is a strike', function(){
          describe('When the frame before that is under 10', function(){
            it('adds the strike, bonus & current framescore to total', function(){
              scorecard.addFrameScore(7, 0)
              scorecard.addFrameScore(8, 1)
              scorecard.addFrameScore(4, 4)
              scorecard.addFrameScore(10, 0)
              scorecard.addFrameScore(4, 3)
              expect(scorecard.showScore()).toBe(48)
            });
          });
          describe('When the frame before that is a strike', function(){
            it('add both strikes, bonuses & current framescore', function(){
              scorecard.addFrameScore(7, 0)
              scorecard.addFrameScore(8, 1)
              scorecard.addFrameScore(4, 4)
              scorecard.addFrameScore(3, 0)
              scorecard.addFrameScore(10, 0)
              scorecard.addFrameScore(10, 0)
              scorecard.addFrameScore(4, 3)
              expect(scorecard.showScore()).toBe(75)
            });
          });
          describe('When the frame before that is a spare', function(){
            it('add strike, bonus & current framescore', function(){
              scorecard.addFrameScore(7, 0)
              scorecard.addFrameScore(8, 1)
              scorecard.addFrameScore(4, 4)
              scorecard.addFrameScore(3, 0)
              scorecard.addFrameScore(7, 3)
              scorecard.addFrameScore(10, 0)
              scorecard.addFrameScore(4, 3)
              expect(scorecard.showScore()).toBe(71)
            });
          });
        });
        describe('When previous frame is a spare', function(){
          it('adds spare, bonus and current framescore', function(){
            scorecard.addFrameScore(3, 0)
            console.log("1. current score =", scorecard._currentScore)
            scorecard.addFrameScore(7, 3)
            console.log("2. current score =", scorecard._currentScore)
            scorecard.addFrameScore(8, 2)
            console.log("3. current score =", scorecard._currentScore)
            scorecard.addFrameScore(4, 3)
            console.log("4. current score =", scorecard._currentScore)
            expect(scorecard.showScore()).toBe(42)
          });
        });
      // end of when current frame is under 10
      });
      describe('When current frame is a strike', function(){
        describe('When previous frame is a spare', function(){
          it('adds spare and bonus', function(){
            scorecard.addFrameScore(3, 0)
            scorecard.addFrameScore(6, 2)
            scorecard.addFrameScore(9, 1)
            scorecard.addFrameScore(10, 0)
            expect(scorecard.showScore()).toBe(31)
          });
        });
      // end of when current frame is a strike
      });
      describe('When current frame is a spare', function(){
        describe('When previous frame is a spare', function(){
          it('adds spare and bonus', function(){
            scorecard.addFrameScore(3, 1)
            scorecard.addFrameScore(4, 1)
            scorecard.addFrameScore(7, 3)
            scorecard.addFrameScore(4, 6)
            expect(scorecard.showScore()).toBe(23)
          });
        });
      });
    //end of 3rd-9th frame
    });

  });


});
