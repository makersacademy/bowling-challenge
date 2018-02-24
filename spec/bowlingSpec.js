describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('.firstRoll', function() {
    it('Generates a random number from 1 to 10', function() {
      spyOn(Math, 'random').and.returnValue(0.6);
      expect(bowling.firstRoll()).toBe(7);
    });
  });
});
