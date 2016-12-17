describe("Frame", function() {
  var frame;
});

  beforeEach(function() {
    frame = new Frame();
  });

  it("should have a starting firstRoll score of 0", function() {
    expect(frame.firstRoll).toEqual(0)
  });
  it("should have a starting secondRoll score of 0", function() {
    expect(frame.secondRoll).toEqual(0)
  });
