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

  describe('when a round is played',function(){
    it('uses a ball when rolled', function(){
    round.roll();
    expect(round.balls).toEqual(1);
    });
    it('can roll a second ball', function(){
       round.roll();
      round.roll();
      expect(round.balls).toEqual(0);
    });
    //stub this test
    it('a ball can knock down pins', function(){
      spyOn(Math, 'random').and.returnValue(.1);
     round.roll();
     expect(round.PINS).toEqual(9);
    });
    it('has zero balls if a strike occurs', function(){
      spyOn(Math, 'random').and.returnValue(.99);
      round.roll();
      expect(round.PINS).toEqual(0);
      expect(round.balls).toEqual(0);
    });

  });
});