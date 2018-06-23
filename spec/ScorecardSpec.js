describe('Scorecard', function(){

  describe('.currentScore', function(){
    it('has an initial score of 0', function(){
      scorecard = new Scorecard();
      expect(scorecard.showScore()).toEqual(0)
    });
  });

  // describe('.addFrameScore', function(){
  //   describe('When user enters score below 10', function(){
  //     it('adds score to the current score', function(){
  //       scorecard = new Scorecard();
  //       scorecard.addFrameScore(2, 2)
  //       scorecard.addFrameScore(3, 5)
  //       expect(scorecard.showScore()).toEqual(12)
  //     });
  //   });

    // describe('When user enters a strike', function(){
    //   it('it adds the bonus of next frames score', function(){
    //     scorecard = new Scorecard();
    //     scorecard.addFrameScore(10, 0)
    //     scorecard.addFrameScore(3, 5)
    //     expect(scorecard.showScore()).toBe(26)
    //   });
    // });

    // describe('When user enters a spare', function(){
    //   it('it adds the bonus of the first pin of next game', function(){
    //     scorecard = new Scorecard();
    //     scorecard.addFrameScore(5, 5)
    //     scorecard.addFrameScore(3, 5)
    //     expect(scorecard.showScore()).toBe(21)
    //   });
    // });
    //
    // describe('When user gets multiple strikes', function(){
    //   it('calculates correct score for 2 strikes', function(){
    //     scorecard = new Scorecard();
    //     scorecard.addFrameScore(10, 0)
    //     scorecard.addFrameScore(10, 0)
    //     scorecard.addFrameScore(5, 0)
    //     expect(scorecard.showScore()).toBe(45)
    //   });
    //   xit('calculates correct score for 3 strikes', function(){
    //     scorecard = new Scorecard();
    //     scorecard.addFrameScore(10, 0)
    //     scorecard.addFrameScore(10, 0)
    //     scorecard.addFrameScore(10, 0)
    //     scorecard.addFrameScore(5, 0)
    //     expect(scorecard.showScore()).toBe(75)
    //   });
    // });

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

      // scorecard = new Scorecard();
      // scorecard.addFrameScore(, )
      // expect(scorecard.showScore()).toBe()

      describe('When second frame scores are entered', function(){
        describe('When current frame score is under 10', function(){
          describe('When the first frame score is under 10', function(){
            it('adds current frame score to total', function(){
              scorecard = new Scorecard();
              scorecard.addFrameScore(4, 2)
              scorecard.addFrameScore(6, 3)
              expect(scorecard.showScore()).toBe(15)
            });
          });
        });

        describe('when current frame score is a strike', function(){

        });

        describe('when current frame score is a spare', function(){

        });

      });




  // });

});
