describe("Roll", function() {

  beforeEach(function() {
    roll = new Roll(5)
  });

  describe("#new", function() {
    it("creates a new roll object", function() {
      expect(roll).toEqual(jasmine.any(Roll));
    });
    it("includes a property rolls",function() {
      expect(roll.getKnockedPins()).toEqual(5);
    })
  });

});
