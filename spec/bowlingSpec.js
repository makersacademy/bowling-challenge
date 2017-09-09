describe ('Bowling', function() {
  var bowling;

  beforeEach(function () {
    bowling = new Bowling();
  });

  describe('shows a starting score', function() {
    it('shows a default starting score of 0', function() {
      expect(bowling.score).toEqual(0);
    });
  });

  describe('#firstRoll', function() {
    it('shows the players score from their first roll', function() {
      expect(bowling.firstRoll()).toBeLessThan(11);
    });
  });
  //
  describe('#secondRoll', function() {
    it('shows the players score from their second roll', function() {
      bowling.firstRoll()
      expect(bowling.secondRoll()).toBeLessThan(11);
    });
  });
  //
  describe('#frameScore', function() {
    it('returns players total score for the current frame', function() {
      expect(bowling.frameScore()).toBeLessThan(11);
    });
  });
});
