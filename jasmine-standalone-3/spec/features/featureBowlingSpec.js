describe('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('roll', function(){
    it('allows yoy to roll', function(){
      bowling.roll(5);
      bowling.roll(3);
      expect(bowling.frame).toContain(5);
      expect(bowling.frame).toContain(3);
    });
  });
});