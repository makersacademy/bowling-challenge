
describe('Game',function(){
  beforeEach(function() {
    game = new Game();
  });

  describe('#updateThrowsLeft',function(){
    beforeEach(function(){
      changeFromUpdateThrowsLeft = function(){
        startingNumber = game.throwsLeft;
        game.updateThrowsLeft();
        endingNumber = game.throwsLeft;
        return endingNumber - startingNumber;
      }
    });
    it('Reduces throws by 1', function(){
      change = changeFromUpdateThrowsLeft();
      expect(change).toEqual(-1);
    });
    it('Reduces throws by 2 on 20th throw', function(){
      game.throwsLeft = 2;
      change = changeFromUpdateThrowsLeft();
      expect(change).toEqual(-2);
    });
    it("Doesn't reduce throws after 0", function(){
      game.throwsLeft=0;
      change = changeFromUpdateThrowsLeft();
      expect(change).toEqual(0);
    });


  });

  describe('#isFrameOver',function(){
    it('returns true for the end of a regular round',function(){

      for (i = 20; i >=2 ; i-=2) {
        game.throwsLeft=i
        expect(game.isFrameOver()).toEqual(true);
      }
    });
    it('returns false during the middle of a regular round',function(){
      expect(game.isFrameOver()).toEqual(false);
    });
  });


  describe('throwball',function(){

    describe('Context: Regular Frame',function(){

      it('it decreases the roll number',function(){
        game.throwBall(4);
        expect(game.throwsLeft).toEqual(20);
      });


      it("doesn't update score after a bonus frame",function(){
        game.throwBall(5);
        game.throwBall(5);
        expect(game.totalScore).toEqual(0);
      });
      it('appends the throw scores to the results array after a frame',function(){
        game.throwBall(5);
        game.throwBall(4);
        expect(game.results[0]).toEqual({throw1:5, throw2:4, throw3:0, bonus:0})
      });
      it('adds the bonus score to the previous frame 1 throw after a spare',function(){
        game.throwBall(5);
        game.throwBall(5);
        game.throwBall(4);
        expect(game.results[0]).toEqual({throw1:5, throw2:5, throw3: 0, bonus:4})
      });
      it('removes the bonus score instance after the bonus has been fully applied',function(){
        game.throwBall(5);
        game.throwBall(5);
        game.throwBall(4);
        expect(game.bonusArray.length).toEqual(0)
      });

      it('updates the current total after a bonus has been finished',function(){
        game.throwBall(5);
        game.throwBall(5);
        game.throwBall(4);
        expect(game.totalScore).toEqual(14)
      });

      it('updates the score after a regular frame',function(){
        game.throwBall(4);
        game.throwBall(4);
        expect(game.totalScore).toEqual(8);
      });
      it('resets the current frame results after they have been logged',function(){
        game.throwBall(4);
        game.throwBall(4);
        expect(game.currentFrameScores.length).toEqual(0)
      });
      it('resets the current frame results on a bonus frame too',function(){
        game.throwBall(5);
        game.throwBall(5);
        expect(game.currentFrameScores.length).toEqual(0)

      });

      it('ends the current frame after a strike',function(){
        game.throwBall(10);
        expect(game.framesPlayed).toEqual(1);
      });

      it('updates the throws left by two after a strike',function(){
        game.throwBall(10);
        expect(game.throwsLeft).toEqual(19)
      });
      it('results are in the right format after a strike',function(){
        game.throwBall(10);
        expect(game.results[0].throw1).toEqual(10);
      });



      it('updates the bonus points of the correct frame after 1 throw',function(){
        game.throwBall(10);
        game.throwBall(5);
        expect(game.results[0].bonus).toEqual(5);
      });
      it('updates the bonus points of the correct frame after 2 throws',function(){
        game.throwBall(10);
        game.throwBall(4);
        game.throwBall(4);
        expect(game.results[0].bonus).toEqual(8);
      });

    });

    describe('Context: Final Frame',function(){
      beforeEach(function(){
        for (i = 0; i < 18; i++) {
          game.throwBall(0);
        }

      });
      it('ends frame at the end of a normal round',function(){
        game.throwBall(0);
        game.throwBall(0);
        expect(game.framesPlayed).toEqual(10);
      });
      it('ends the frame at the end of the third throw',function(){
        game.throwBall(10);
        game.throwBall(10);
        expect(game.framesPlayed).toEqual(9);
        game.throwBall(5);
        expect(game.framesPlayed).toEqual(10);
      });

      it('increments throw number by two if a regular throw frame',function(){
        expect(game.throwsLeft).toEqual(3);
        game.throwBall(0);
        expect(game.throwsLeft).toEqual(2);
        game.throwBall(0);
        expect(game.throwsLeft).toEqual(0);
      });

      it('increments throw number by 1 after strikes in final Frame',function(){
        expect(game.throwsLeft).toEqual(3);
        game.throwBall(10);
        expect(game.throwsLeft).toEqual(2);
        game.throwBall(10);
        expect(game.throwsLeft).toEqual(1);
        game.throwBall(10);
        expect(game.throwsLeft).toEqual(0);
      });


    });

    describe('#isFrameOver',function(){
      describe('Context: Normal Roundš',function(){
        it('ends after a strike',function(){
          game.score = 10;
          expect(game.isFrameOver()).toEqual(true)
        });

        it('ends after throw 2', function(){
          game.score = 0;
          game.throwsLeft = 20;
          expect(game.isFrameOver()).toEqual(true)
        });

        describe('Context: Frame 10',function(){
          it('ends after throw 2 if no bonus activated',function(){
            game.throwsLeft = 2;
            game.framesPlayed = 9;
            spyOn(game, 'isBonus').and.returnValue(false)
            expect(game.isFrameOver()).toEqual(true)
          });

          // it('ends after throw 3',function(){
          //   game.throwsLeft=1;
          //   game.framesPlayer=9;
          //   spyOn(game, 'isBonus').and.returnValue(false)
          //   expect(game.isFrameOver()).toEqual(true)
          // });
        });
      });
    });





  });
  // describe('#updateFramesPlayed',function(){
  //   beforeEach(function(){
  //     changeFromUpdateFramesPlayed = function(){
  //       startingNumber = game.framesPlayed;
  //       game.updateFramesPlayed();
  //       endingNumber = game.framesPlayed;
  //       return endingNumber - startingNumber;
  //     }
  //   })
  //   it("Doesn't increase after the first throw",function(){
  //     change = changeFromUpdateFramesPlayed()
  //     expect(change).toEqual(0);
  //   });
  //   it("Decreases after the 2nd throw",function(){
  //     game.throwsLeft=19
  //     change = changeFromUpdateFramesPlayed()
  //     expect(change).toEqual(1);
  //   });
  //   it("Doesn't increase past 10 frames",function(){
  //     game.throwsLeft=0
  //     change = changeFromUpdateFramesPlayed()
  //     expect(change).toEqual(0);
  //   });
  //   it("Does increase on the final throw",function(){
  //
  //   });
  // });
});
