
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

  // describe('#isBonus',function(){
  //   it('returns false for regular game',function(){
  //     game.throwBall(5);
  //     debugger;
  //     game.throwBall(4);
  //     expect(game.isBonus()).toEqual(false)
  //
  //   })
  //   it('returns true for a spare game',function(){
  //     game.throwBall(5);
  //     game.throwBall(5);
  //     expect(game.isBonus()).toEqual(true);
  //   })
  //
  // })

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
      expect(game.results[0]).toEqual({throw1:5, throw2:4, bonus:0})
    });
    it('adds the bonus score to the previous frame 1 throw after a spare',function(){
      game.throwBall(5);
      game.throwBall(5);
      game.throwBall(4);
      expect(game.results[0]).toEqual({throw1:5, throw2:5, bonus:4})
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
