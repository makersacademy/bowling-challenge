describe('Roll', function() {
  var roll;
  beforeEach(function() {
    roll = new Roll(5);
  });

  describe('#score', function() {
    it('has a score for its roll', function() {
      expect(roll.score).toEqual(5);
    });
  });

  describe('setScore', function() {
    it('sets the score', function() {
      roll.setScore(7);
      expect(roll.score).toEqual(7);
    });
  });

  describe('getScore', function() {
    it('returns the score', function() {
      expect(roll.getScore()).toEqual(5);
    });
  })
});