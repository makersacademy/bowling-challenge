
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
