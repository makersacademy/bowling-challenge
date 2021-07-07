describe('Roll', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('bowling score', function(){
    it('keeps track of bowling score', function(){
      bowling.roll(8);
      expect(bowling.frame).toContain(8);
    });

    it('adds up the bowling score', function(){
      bowling.roll(2);
      bowling.roll(5);
      bowling.roll(5);
      bowling.roll(4);
      expect(bowling.score()).toEqual(16);
    });

    it('calculates the score of a strike', function(){
      bowling.roll(10);
      bowling.roll(5);
      bowling.roll(3);
      expect(bowling.score()).toEqual(26);
      bowling.roll(1);
      bowling.roll(1);
      expect(bowling.score()).toEqual(28);
    });

    it('calculates the score of a spare', function(){
      console.log(bowling)
      bowling.roll(6);
      bowling.roll(3);
      expect(bowling.score()).toEqual(9);
      bowling.roll(6);
      bowling.roll(4);
      expect(bowling.score()).toEqual(19);
      bowling.roll(4);
      bowling.roll(3);
      expect(bowling.score()).toEqual(30);
    });

    it('returns true if strike', function(){
      bowling.frame = [10];
      expect(bowling.strike()).toBe(true);
    })

    it('returns true if spare', function(){
      bowling.frame = [7, 3];
      expect(bowling.spare()).toBe(true);
    });

  });

});
