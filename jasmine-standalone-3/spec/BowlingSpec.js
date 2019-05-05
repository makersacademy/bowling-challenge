describe('Bowling', function(){
  var bowling 
  beforeEach(function(){
    bowling = new Bowling()
  });

  describe('roll',function(){
    it('allows player to roll a ball', function(){
      bowling.roll(4);
      expect(bowling.frame).toContain(4);
    });

    it('allows players to roll  twice per frame', function(){
      bowling.roll(3);
      bowling.roll(5);
      bowling.roll(2);
      expect(bowling.currentFrame).toEqual(2);
    });

    it('should be at the 10th frame after 20 rolls', function(){
      for(let i = 0; i < 20; i++){
        bowling.roll(3)
      };
      expect(bowling.currentFrame).toEqual(10);
    });
  });

  describe('calculate score', function(){
    it('calculates the total score', function(){
      for(let i = 0; i < 20; i++){
        bowling.roll(1)
      };
      expect(bowling.score).toEqual(20);
    });
  });
});