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

    it('the second roll score', function() {
      expect(bowling.secondRollScore).toEqual(0);
    });
  });

  describe('Methods', function() {
    it('displays the first roll score', function() {
      bowling.firstRoll(6);
      expect(bowling.firstRollScore).toEqual(6);
    });

    it('automatically updates the number of pins', function() {
      bowling.firstRoll(6);
      expect(bowling.pins).toEqual(4);
    });

    it('displays the second roll score', function() {
      bowling.secondRoll(2);
      expect(bowling.secondRollScore).toEqual(2);
    });

    it('also updates the number of pins', function() {
      bowling.firstRoll(6);
      bowling.secondRoll(2);
      expect(bowling.pins).toEqual(2);
    });
  });
});