describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("registers a score", function() {
    frame.registerScore(3);
    expect(frame.pinsLeft()).toEqual(7);
  });

  it("registers a second score", function() {
    frame.registerScore(2)
    expect(frame.pinsLeft()).toEqual(1);
  });
});