describe("Roll", function() {
  var roll;

  beforeEach(function() {
    roll = new Roll();
  });

  it("exists", function() {
    expect(function(){new Roll()}).not.toThrow();
  });

  xdescribe("getKnockedDownPins(pins)", function() {
    it("starts at 0", function() {
      expect(roll.getKnockedDownPins()).toEqual(0);
    });
  });
});
