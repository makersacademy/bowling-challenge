describe('Bowling', function(){

  beforeEach(function(){
    bowling = new Bowling()
    spyOn(Math,'random').and.returnValue(0.5);
  })

  describe('randomBowl', function(){
    it('produces a number from 0 to 10', function(){
      expect(_randomBowl()).toEqual(5)
    });
  });

  describe('Bowling', function(){
    it('it is initiated with a an array of bowls', function(){
      expect(bowling.bowlCount).toEqual([])
    });
  });

  describe('#frame', function(){
    it('inputs a bowl into the array', function(){
      bowling.frame()
      expect(bowling.bowlCount).toContain(5)
    });
  });
});
