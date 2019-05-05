describe("Roll", function() {
  var roll;

  beforeEach(function() {
    roll = new Roll;
  });

  describe("getRoll", function() {
    it("gets the roll that the user entered", function() {
      expect(roll.getRoll(5)).toBe(5)
    });
  });
});
