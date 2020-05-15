describe('Roll', function() {
  var roll;
  beforeEach(function() {
    roll = new Roll(5);
  });

  describe('score', function() {
    it('has a score for its roll', function() {
      expect(roll.score).toEqual(5);
    });
  });
});