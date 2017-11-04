describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should return true for isStrike if rollOne is 10", function() {
    frame.rollOne = 10;
    expect(frame.isStrike()).toBe(true);
  });

})
