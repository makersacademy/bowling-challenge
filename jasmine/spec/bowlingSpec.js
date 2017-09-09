describe('Bowling', function(){

  beforeEach(function(){
    bowling = new Bowling()
    spyOn(Math,'random').and.returnValue(0.4);
  })

  describe('Bowling functionality', function(){
    it('it is initiated with 10 cones', function(){
      expect(bowling.remainingCones).toEqual(10)
    });
  });

  describe('randomBowl', function(){
    it('produces a number from 0 to remainingCones', function(){
      expect(bowling.randomBowl()).toEqual(5)
    });
    it('subtracts cones taken out from remainingCones', function(){
      bowling.randomBowl()
      expect(bowling.remainingCones).not.toEqual(10)
    });
  });


  describe('#throwBowl', function(){
    it('inputs a bowl into the array', function(){
      var bowls = []
      bowling.throwBowl(bowls)
      expect(bowls).toContain(5)
    });
  });
});
