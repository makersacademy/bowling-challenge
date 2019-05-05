describe('Bowling',function(){
  var bowling;
  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('Rolling',function(){
    it('allows you to roll a ball.', function(){
      bowling.roll(0);
      expect(bowling.frame).toContain(0)
    });
  });

  describe('Score', function(){
    it('Adds the score in a frame', function(){
      bowling.roll(4)
      bowling.roll(2)
      bowling.calScore()
      expect(bowling.score).toEqual(6)
    });
  });

  describe('isTwoRows', function(){
    it('true if frame length is > than 2', function(){
      bowling.roll(2);
      bowling.roll(4);
      expect(bowling.isTwoRows()).toBe(true)
    });
  });
});