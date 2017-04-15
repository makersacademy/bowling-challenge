describe('Throw',function(){
  var ballThrow;
  beforeEach(function(){
    ballThrow = new BallThrow();
  });

  describe('Initalize',function(){
    it('defaults to full frame unless specified',function(){
      expect(ballThrow.pinsLeft).toEqual(10);
      ballThrow = new BallThrow(2);
      expect(ballThrow.pinsLeft).toEqual(2);
    });
  });

  describe('#rollBall', function(){
    it('uses Math.random to return a number between 1 and 10', function(){
      spyOn(Math,'random');
      ballThrow.rollBall();
      expect(Math.random).toHaveBeenCalled();
    });
  });
});
