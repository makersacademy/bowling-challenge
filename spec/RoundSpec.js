describe('Round', function(){
  var round;

  beforeEach(function(){
    round = new Round();
  });

  describe('when a new rounds starts', function(){
      it('has up to two balls', function(){
        expect(round.balls).toEqual(2);
      });

      it('has ten pins', function(){
        expect(round.PINS).toEqual(10);
      });
  });

  describe('',function(){


  });
});