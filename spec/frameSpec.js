describe("frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("shows us the score of the frame", function() {
    expect(frame.viewScore()).toEqual(0);
  });
});
