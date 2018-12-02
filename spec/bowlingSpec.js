describe('Bowling', function() {
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('default ball value', function() {
    it('initializes each ball to default to zero before each throw', function() {
      expect(bowling.ball).toEqual(0);
    });
  });
});
