describe("Roll", function() {

  var roll;

  beforeEach(function() {
    roll = new Roll(5)
  });

  describe("#new", function() {
    it("creates a new roll object", function() {
      expect(roll).toEqual(jasmine.any(Roll));
    });
    it("includes a property rolls",function() {
      expect(roll.getKnockedPins()).toEqual(5);
    });
    it("ensures knocked pins is between 0 and 10", function() {
      expect(function() {new Roll(11)}).toThrow("This is not a valid roll.");
      expect(function() {new Roll(-4)}).toThrow("This is not a valid roll.");
      expect(function() {new Roll("pins")}).toThrow("This is not a valid roll.");
    });
  });

});
