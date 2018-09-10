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
      console.log(bowling)
      bowling.roll(10);
      bowling.roll(2);
      bowling.roll(3);
      // console.log(bowling);
      expect(bowling.score()).toEqual(20);
      bowling.roll(1);
      bowling.roll(1);
      expect(bowling.score()).toEqual(22);
    });

    it('calculates the score of a spare', function(){
      bowling.roll(7);
      bowling.roll(3);
      bowling.roll(3);
      bowling.roll(4);
      bowling.roll(4);
      bowling.roll(4);
      expect(bowling.score()).toEqual(28);
    });

    // it('calculates next two pins after strike', function(){
    //   bowling.roll(10);
    //   bowling.roll(2);
    //   bowling.roll(3);
    //   expect(bowling._calc_strike()).toEqual(5);
    // });

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
