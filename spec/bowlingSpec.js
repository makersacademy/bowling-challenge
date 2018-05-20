describe('Bowling', function(){
  var bowling;
  beforeEach(function(){
    bowling = new Bowling();

  });

  describe('#roll', function(){
    it('saves the roll scores in a variable', function(){
      bowling.roll(2,5)
      expect(bowling.roll1).toEqual(2)
      expect(bowling.roll2).toEqual(5)
    });
  });
});
