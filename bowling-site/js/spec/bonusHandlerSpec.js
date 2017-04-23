describe('Bonus Handler',function(){
  beforeEach(function(){
    bonusHandler=new BonusHandler();
  });
  //
  describe('#updatePlayState',function(){
    //
    beforeEach(function(){
      inputs ={
        score: 2,
        results:[],
        framesPlayed:3,
        isStrikeRound:true
      }
      bonusHandler.score='Fo';
      bonusHandler.framesPlayed='Sho';
      bonusHandler.results='Bro';
      bonusHandler.updatePlayState(inputs);
    });
    //
    it('updates the frame Results',function(){
      expect(bonusHandler.results).toEqual([])
    });

    it('updates the currentScore',function(){
      expect(bonusHandler.score).toEqual(2)
    });

    it('updates the framesPlayed',function(){
      expect(bonusHandler.framesPlayed).toEqual(3)
    });
    it('updates the isStrikeRound',function(){
      expect(bonusHandler.isStrikeRound).toEqual(true)
    });
  });

  //EXTRACTED TESTS
  // it('activates a bonus on a spare',function(){
  //   game.throwBall(5);
  //   game.throwBall(5);
  //   expect(game.bonusArray[0]).toEqual({ frameIndex: 0, updatesLeft: 1 });
  // });
  // it('activates a strike bonus after a strike',function(){
  //   game.throwBall(10);
  //   expect(game.bonusArray[0]).toEqual({ frameIndex: 0, updatesLeft: 2 });
  // });
  // it('updates the bonus array after the first throw after a strike',function(){
  //   game.throwBall(10);
  //   game.throwBall(5);
  //   expect(game.bonusArray[0]).toEqual({ frameIndex: 0, updatesLeft: 1 });
  // });

});
