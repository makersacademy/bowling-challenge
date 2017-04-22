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
        framesPlayed:3
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
  });

});
