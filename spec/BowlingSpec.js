describe('Bowling scoresheet', function(){

  describe('knows the cumulative score for', function(){

    var bowling;
    beforeEach(function(){
      bowling = new Bowling
    });

    function helper(rolls, pinsEachRoll){
      for (var i = 0; i < rolls; i ++){
        bowling.roll(pinsEachRoll);
      };
    };

    it('a typical game', function(){
      helper(20, 4);
      expect(bowling.cumulativeScore()).toBe(80);
    });

    it('a gutter game', function(){
      helper(20, 0);
      expect(bowling.cumulativeScore()).toBe(0);
    });

    it('a perfect game', function(){
      helper(21, 10);
      expect(bowling.cumulativeScore()).toBe(300);
    });

    // it('from a single roll', function(){
    //   bowling.roll(5);
    //   expect(bowling.cumulativeScore()).toBe(5);
    // });

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
});
