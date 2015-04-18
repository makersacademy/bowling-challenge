describe('Bowling scoresheet', function(){

  describe('can increment frame', function(){

    var bowling;
    beforeEach(function(){
      bowling = new Bowling
    });

    it('with a non-strike/non-spare', function(){
      bowling.roll(5);
      bowling.roll(2);
      expect(bowling.frame()).toBe(2);
    });

    it('with a strike', function(){
      bowling.roll(10);
      expect(bowling.frame()).toBe(2);
    });

    it('with a spare', function(){
      bowling.roll(5);
      bowling.roll(5);
      expect(bowling.frame()).toBe(2);
    });
  });

  describe('knows the cumulative score', function(){

    var bowling;
    beforeEach(function(){
      bowling = new Bowling
    });

    it('from a single roll', function(){
      bowling.roll(5);
      expect(bowling.cumulativeScore()).toBe(5);
    });

    it('from two non-spare/non-strike rolls', function(){
      bowling.roll(5);
      bowling.roll(2);
      expect(bowling.cumulativeScore()).toBe(7);
    });

    it('from a strike and a spare', function(){
      bowling.roll(10);
      bowling.roll(5);
      bowling.roll(5);
      expect(bowling.cumulativeScore()).toBe(30);
    });
  });

  describe('rejects', function(){

    var bowling;
    beforeEach(function(){
      bowling = new Bowling
    });

    it('an illegal score', function(){
      expect(function(){bowling.roll(11)}).toThrow('Illegal score');
    });
  });

  // describe('knows the frame score', function(){
  //
  //   var bowling;
  //   beforeEach(function(){
  //     bowling = new Bowling
  //   });
  //
  //   it('from a single roll', function(){
  //     bowling.roll(5);
  //     expect(bowling.frameScore(1)).toBe(5);
  //   });
  //
  //   it('from two non-spare/non-strike rolls', function(){
  //     bowling.roll(5);
  //     bowling.roll(2);
  //     expect()
  //   });
  // });
});
