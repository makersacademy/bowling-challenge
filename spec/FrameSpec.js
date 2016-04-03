describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should record the players score", function() {
    frame.record(5);
    expect(frame.total()).toContain(5);
  });
});
