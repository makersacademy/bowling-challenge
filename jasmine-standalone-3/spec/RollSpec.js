describe('Roll', function() {

  var roll;

  beforeEach(function() {
    roll = new Roll(6);
  });

  it('returns a roll', function() {
      expect(roll.rollvalue).toBe(6);
  });
});
