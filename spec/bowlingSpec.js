describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('Initialized stage contains', function() {
    it('the number of pins', function() {
      expect(bowling.pins).toEqual(10);
    })

    it('the first roll score', function() {
      expect(bowling.firstRollScore).toEqual(0);
    });
  });

  describe('Methods', function() {
    it('counts the first roll score', function() {
      bowling.firstRoll(6);
      expect(bowling.firstRollScore).toEqual(6);
    });

    it('automatically updates the number of pins', function() {
      bowling.firstRoll(6);
      expect(bowling.pins).toEqual(4);
    });
  });
});