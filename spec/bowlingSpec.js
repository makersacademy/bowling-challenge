describe('Roll', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('bowling score', function(){
    it('keeps track of bowling score', function(){
      bowling.roll(10);
      expect(bowling.bowling_score).toContain(10);
    });

    it('adds up the bowling score', function(){
      bowling.roll(10);
      bowling.roll(8);
      bowling.roll(5);
      expect(bowling.score()).toEqual(23);
    });
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
