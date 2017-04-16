describe("Game",function(){

  frameResultBuilder = function (score1=4, score2=4){
    return ({
      throw1: score1,
      throw2: score2
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
    normalFrameResult = frameResultBuilder(3,3);

  })
  describe("#logResult",function(){
    it('takes the result from a completed frame and logs it',function(){
      game.frameHandler.result = normalFrameResult;
      game.logResult();
      expect(game.results).toContain(normalFrameResult);
    });

    it('changes the total score by the correct amount', function(){
      game.score = 20;
      startScore = game.score;
      game.frameHandler.result = normalFrameResult;
      expectedDifference = normalFrameResult.throw1 + normalFrameResult.throw2;
      game.logResult();
      endScore = game.score;
      expect(endScore-startScore).toEqual(expectedDifference)
    });



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
      it('it does not log the result',function(){
        spyOn(game, 'logResult');
        game.playBowling();
        expect(game.logResult).not.toHaveBeenCalled();
      });
    })
  });



});
