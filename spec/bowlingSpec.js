describe('Roll', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('bowling score', function(){
    it('keeps track of bowling score', function(){
      bowling.roll(10);
      expect(bowling.frame).toContain(10);
    });

    it('adds up the bowling score', function(){
      bowling.roll(2);
      bowling.roll(5);
      bowling.score();
      bowling.roll(5);
      bowling.roll(4);
      expect(bowling.score()).toEqual(16);
    });
  });

  it('throws error if more than 2 rolls in a frame', function(){
    bowling.roll(2);
    bowling.roll(5);
    expect(function(){ bowling.roll(); }).toThrowError('already had 2 rolls');
  });

  describe('is strike or spare', function(){
    it('returns false if not a strike', function(){
      bowling.roll(7);
      expect(bowling.isStrike()).toBe(false);
    });

    it('returns true if strike', function(){
      bowling.roll(10);
      expect(bowling.isStrike()).toBe(true);
    });
  });
});
