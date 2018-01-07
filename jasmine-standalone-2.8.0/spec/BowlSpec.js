describe("Bowl", function() {
  var bowl;

  beforeEach(function() {
    bowl = new Bowl();
  })

  it("should allow a bowl", function() {
    bowl.roll(5);
    expect(bowl.pinsBowled).toEqual(5);
  })
})
