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

  describe('When calculating the first frame', function(){
    it('it will not update total score if strike', function(){
      scorecard.addFrameScore(10)
      expect(scorecard.showScore()).toBe(0)
    });
    it('it will not update total score if spare', function(){
      scorecard.addFrameScore(6, 4)
      expect(scorecard.showScore()).toBe(0)
    });
    it('it will update total score if framescore is under 10', function(){
      scorecard.addFrameScore(7, 2)
      expect(scorecard.showScore()).toBe(9)
    });
  });

  describe('When calculating the second frame', function(){
    describe('When the second frame is under 10', function(){
      describe('When the first frame score is under 10', function(){
        it('adds current frame score to total', function(){
          scorecard.addFrameScore(4, 2)
          scorecard.addFrameScore(6, 3)
          expect(scorecard.showScore()).toBe(15)
        });
      });
      describe('When the first frame score is a strike', function(){
        it('adds the strike + bonus and current framescore to total', function(){
          scorecard.addFrameScore(10)
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

    describe('When the second frame is a strike', function(){
      describe('When the first frame is a spare', function(){
        it('adds the strike + bonus to total', function(){
          scorecard.addFrameScore(3, 7)
          scorecard.addFrameScore(10)
          expect(scorecard.showScore()).toBe(20)
        });
      });
    });

    describe('When the second frame is a spare', function(){
      describe('When the first frame score is a strike', function(){
        it('adds the strike + 2 ball bonus to total', function(){
          scorecard.addFrameScore(10)
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

  describe('When calculating the 3rd to 9th frames', function(){
    describe('When the current frame is under 10', function(){
      describe('When previous frame is under 10', function(){
        it('adds the current frame score to total', function(){
          scorecard.addFrameScore(10)
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
              scorecard.addFrameScore(10)
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
              scorecard.addFrameScore(10)
              scorecard.addFrameScore(10)
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
              scorecard.addFrameScore(10)
              scorecard.addFrameScore(4, 3)
              expect(scorecard.showScore()).toBe(71)
            });
          });
        });
        describe('When previous frame is a spare', function(){
          it('adds spare, bonus and current framescore', function(){
            scorecard.addFrameScore(3, 0)
            scorecard.addFrameScore(7, 3)
            scorecard.addFrameScore(8, 2)
            scorecard.addFrameScore(4, 3)
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
            scorecard.addFrameScore(10)
            expect(scorecard.showScore()).toBe(31)
          });
        });
        describe('When previous frame is a strike', function(){
          describe('When frame before that is a strike', function(){
            it('add strike and bonus', function(){
              scorecard.addFrameScore(3, 0)
              scorecard.addFrameScore(6, 2)
              scorecard.addFrameScore(9, 1)
              scorecard.addFrameScore(10)
              scorecard.addFrameScore(10)
              scorecard.addFrameScore(10)
              expect(scorecard.showScore()).toBe(61)
            });
          });
        });
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
        describe('When previous frame is a strike', function(){
          describe('When frame before that was under 10', function(){
            it('adds the strike and bonus', function(){
              scorecard.addFrameScore(3, 1)
              scorecard.addFrameScore(4, 1)
              scorecard.addFrameScore(10)
              scorecard.addFrameScore(4, 6)
              expect(scorecard.showScore()).toBe(29)
            });
          });
          describe('When the frame before that was a strike', function(){
            it('add the strikes and bonuses', function(){
              scorecard.addFrameScore(3, 1)
              scorecard.addFrameScore(10)
              scorecard.addFrameScore(10)
              scorecard.addFrameScore(4, 6)
              expect(scorecard.showScore()).toBe(48)
            });
          });
          describe('When the frame before that was a spare', function(){
            it('adds the spare and bonus', function(){
              scorecard.addFrameScore(3, 1)
              scorecard.addFrameScore(6, 4)
              scorecard.addFrameScore(10)
              scorecard.addFrameScore(4, 6)
              expect(scorecard.showScore()).toBe(44)
            });
          });
        });
      });
    });
  });
  describe('When calculating the 10th frame', function(){
    describe('When a spare', function(){
      it('adds the final frame and bonus', function(){
        scorecard.addFrameScore(2, 1)
        scorecard.addFrameScore(1, 9)
        scorecard.addFrameScore(10)
        scorecard.addFrameScore(10)
        scorecard.addFrameScore(3, 1)
        scorecard.addFrameScore(6, 4)
        scorecard.addFrameScore(10)
        scorecard.addFrameScore(4, 6)
        scorecard.addFrameScore(10)
        scorecard.addFrameScore(5, 5, 7)
        expect(scorecard.showScore()).toBe(161)
      })
    });
    describe('When a strike', function(){
      describe('When the second ball is a strike', function(){
        it('adds the final frame and bonus', function(){
          scorecard.addFrameScore(2, 1)
          scorecard.addFrameScore(1, 9)
          scorecard.addFrameScore(10)
          scorecard.addFrameScore(10)
          scorecard.addFrameScore(3, 1)
          scorecard.addFrameScore(6, 4)
          scorecard.addFrameScore(10)
          scorecard.addFrameScore(4, 6)
          scorecard.addFrameScore(10)
          scorecard.addFrameScore(10, 10, 10)
          expect(scorecard.showScore()).toBe(184)
        });
      });
      describe('When the second ball is under 10', function(){
        describe('when the last 2 balls add to 10', function(){
          it('calculates the correct score', function(){
            scorecard.addFrameScore(2, 1)
            scorecard.addFrameScore(1, 9)
            scorecard.addFrameScore(10)
            scorecard.addFrameScore(10)
            scorecard.addFrameScore(3, 1)
            scorecard.addFrameScore(6, 4)
            scorecard.addFrameScore(10)
            scorecard.addFrameScore(4, 6)
            scorecard.addFrameScore(10)
            scorecard.addFrameScore(10, 6, 4)
            expect(scorecard.showScore()).toBe(170)
          });
        });
        describe('When the last 2 balls dont add to 10', function(){
          it('calculates the correct score', function(){
            scorecard.addFrameScore(10);
            scorecard.addFrameScore(4, 6);
            scorecard.addFrameScore(6, 2);
            scorecard.addFrameScore(10);
            scorecard.addFrameScore(10);
            scorecard.addFrameScore(10);
            scorecard.addFrameScore(10);
            scorecard.addFrameScore(10);
            scorecard.addFrameScore(10);
            scorecard.addFrameScore(10, 6, 3);
            expect(scorecard.showScore()).toEqual(239);
          });
        });
      });
    });
    describe('When under 10', function(){
      it('calculates the final score', function(){
        scorecard.addFrameScore(3, 1)
        scorecard.addFrameScore(6, 4)
        scorecard.addFrameScore(10)
        scorecard.addFrameScore(4, 6)
        scorecard.addFrameScore(3, 1)
        scorecard.addFrameScore(6, 4)
        scorecard.addFrameScore(10)
        scorecard.addFrameScore(4, 6)
        scorecard.addFrameScore(10)
        scorecard.addFrameScore(4, 5)
        expect(scorecard.showScore()).toBe(149)
      });
    });
  });
});
