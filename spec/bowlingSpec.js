describe ('bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling;
  });

  describe('shows a starting score', function() {
    it('shows a default starting score of 0', function() {
      expect(bowling.score).toEqual(0);
    });
  });

  describe('returns a players roll score', function() {
    it('shows the players score from their roll', function() {
      expect(bowling.firstRoll()).toBeLessThan(10);
    });
  });

});
