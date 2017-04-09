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
      it('has an empty array', function(){
        expect(round.roundScore).toEqual([]);
      });
  });

  describe('when a round is played',function(){
    it('uses a ball when rolled', function(){
    round.roll();
    expect(round.balls).toEqual(1);
    });

    it('can roll a second ball', function(){
      spyOn(Math, 'random').and.returnValue(.1);
      round.roll();
      round.roll();
      expect(round.balls).toEqual(0);
    });

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
    it('cannot knockdown more than 10 pins', function(){
      spyOn(Math, 'random').and.returnValue(.6);
      round.roll();
      round.roll();
      expect(round.PINS).toEqual(0);
    });

    it('can record scores of ball rolls', function(){
      spyOn(Math, 'random').and.returnValue(.5);
      round.roll();
      expect(round.roundScore).toEqual([5]);
    });
    it('can record both rolls', function(){
      spyOn(Math, 'random').and.returnValue(.5);
      round.roll();
      round.roll();
      expect(round.roundScore).toEqual([5,5]);
    });

    it('cannot score more than 10', function(){
   spyOn(Math, 'random').and.returnValue(.6);
      round.roll();
      round.roll();
      expect(round.roundScore).toEqual([6,4])
    });



  });
});