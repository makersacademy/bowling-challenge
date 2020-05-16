describe('Roll', function() {
  var roll;
  beforeEach(function() {
    roll = new Roll(-1);
  });

  describe('#setScore', function() {
    it('sets the score', function() {
      roll.setScore(7);
      expect(roll.getScore()).toEqual(7);
    });
  });

  describe('#getScore', function() {
    it('returns the score', function() {
      expect(roll.getScore()).toEqual(-1);
    });
  });

  describe('#isScored', function() {
    it('returns false if a valid score has NOT been entered', function() {
      expect(roll.isScored()).toBe(false);
    })
    it('returns true if a valid score has been entered', function() {
      roll.setScore(7);
      expect(roll.isScored()).toBe(true);
    });
  });
});