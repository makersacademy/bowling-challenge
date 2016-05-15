describe('bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('entering scores - both under 10', function(){
    it('roll 1 adds score to frame score', function(){
      bowling.addScore(5);
      expect(bowling.frameScore).toContain(5);
    });

    it('bowl 2 adds total to frame', function(){
      bowling.addScore(3);
      bowling.addScore(5);
      expect(bowling.total[1]).toBe(8);
    });

    it('incrementally adds score to total', function(){
      bowling.addScore(3);
      bowling.addScore(5);
      bowling.addScore(3);
      bowling.addScore(5);
      expect(bowling.total[2]).toBe(16)
    })
  });

  describe('spare & strike', function(){
    it('spare adds 10 and sum of first score to total', function(){
      bowling.addScore(7);
      bowling.addScore(3);
      bowling.addScore(5);
      expect(bowling.total[1]).toBe(15);
    });

    // it('strike adds 10 and sum of both following scores', function(){
    //   bowling.addScore(10);
    //   bowling.addScore(5);
    //   bowling.addScore(4);
    //   expect(bowling.total[1]).toBe(19)
    // });
  });

  describe('error raised', function() {
    it('on first throw, if over 10', function(){
      expect(function(){bowling.addScore(11);}).toThrowError("Too many pins - try again")
    });

    it('on second bowl, if total over 10', function(){
      bowling.addScore(9);
      expect(function(){bowling.addScore(2);}).toThrowError("Too many pins - try again")
    });
  });
});
