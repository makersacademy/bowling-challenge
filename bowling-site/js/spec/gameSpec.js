describe("Game",function(){

  frameResultBuilder = function (score1=4, score2=4,score3=0){
    return ({
      throw1: score1,
      throw2: score2,
      throw3: score3
    })
  }
  beforeEach(function(){

    var frameHandler = {
      result: true,
      isComplete: true,
      startRound: function(){},
      startFrame: function(){}
    }
    game = new Game(frameHandler);
    normalFrameResult = frameResultBuilder(3,3,0);
    halfFinishedFrameResult = frameResultBuilder(2,0,0)

  })
  describe("#logResult",function(){
    it('takes the result from a completed frame and logs it',function(){
      game.frameHandler.isComplete = true
      game.framesPlayed = 4;
      game.frameHandler.result = normalFrameResult;
      game.logResult();
      expect(game.results[4]).toEqual(normalFrameResult);
    });

    it('takes the result from an incomplete frame and logs it the correct place', function(){
        game.frameHandler.isComplete = false
        game.framesPlayed = 7;
        game.frameHandler.result = halfFinishedFrameResult;
        game.logResult();
        expect(game.results[7]).toEqual(halfFinishedFrameResult);
    })





  });

  describe('#playBowling', function(){
    describe('Context: If the frame is over:',function(){

      beforeEach(function(){
        game.frameHandler.isComplete = true;
      });

      it('it starts a new frame',function(){
        spyOn(game.frameHandler, 'startFrame');
        game.playBowling();
        expect(game.frameHandler.startFrame).toHaveBeenCalled();

      });

      it('it logs the result',function(){
        spyOn(game, 'logResult');
        game.playBowling();
        expect(game.logResult).toHaveBeenCalled();
      });
      it('throws the next ball', function(){
        spyOn(game.frameHandler, 'startRound')
        game.playBowling();
        expect(game.frameHandler.startRound).toHaveBeenCalled();
      });

      it('increments the frame count', function(){
        startingFrameCount = game.framesPlayed;
        game.playBowling();
        endingFrameCount = game.framesPlayed;
        difference = endingFrameCount-startingFrameCount;
        expect(difference).toEqual(1);

      });

    });
    describe('Context: If the frame is in progress',function(){
      beforeEach(function(){
        game.frameHandler.isComplete = false
      });
      it('if the frame is not over it rolls a new ball',function(){
        spyOn(game.frameHandler, 'startRound');
        game.playBowling();
        expect(game.frameHandler.startRound).toHaveBeenCalled();
      });

    })

    describe('Context: after all 10 frames have been played', function(){
      it('throws error when called', function(){
        game.framesPlayed = 10;
        expect(function(){game.playBowling();}).toThrowError("Game is over, reset to play again");

      });
    });
  });



});
