describe("Roll", function() {
  var roll;

  beforeEach(function() {
    roll = new Roll();
  });

  it("exists", function() {
    expect(function(){new Roll()}).not.toThrow();
  });

  describe("getKnockedDownPins", function() {
    it("starts at 0", function() {
      expect(roll.getKnockedDownPins()).toEqual(0);
    });
  });
});
