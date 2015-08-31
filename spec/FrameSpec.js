describe("Frame", function() {
  var frame;

  it("begins with ten pins", function() {
    frame = new Frame();
    expect(frame.pinCount).toEqual(10);
  });
});