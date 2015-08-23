describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('Initialized stage', function() {
    it('contains the number of pins', function() {
      expect(bowling.pins).toEqual(10);
    })
  });
});