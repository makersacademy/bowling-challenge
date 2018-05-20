describe('Bowling', function(){
  var bowling;
  beforeEach(function(){
    bowling = new Bowling();
  });


  describe('#roll', function(){
    it('saves the roll scores in a variable', function(){
      bowling.roll(2,5)
      expect(bowling.roll1).toEqual(2)
      expect(bowling.roll2).toEqual(5)
    });
  });

  describe('#isSpare', function(){
    it('if roll1 and roll2 equals 10 return true', function(){
      bowling.roll(2,8)
      expect(bowling.isSpare()).toBe(true)
    });
    it('if roll1 is 10 return false', function(){
      bowling.roll(10,0)
      expect(bowling.isSpare()).toBe(false)
    });
    it('if roll1 is not equal to 10 return false', function(){
      bowling.roll(4,0)
      expect(bowling.isSpare()).toBe(false)
    });
  });
});
