describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should be able to return the score", function() {
    expect(frame.getScore()).toEqual(0);
  });

});
