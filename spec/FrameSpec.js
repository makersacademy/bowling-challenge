describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should be able to return the score", function() {
    expect(frame.getScore()).toEqual(0);
  });

  it("should be able to accept roll and return score", function() {
    expect(frame.getScore()).toEqual(0);
    frame.roll(3)
    expect(frame.getScore()).toEqual(3);
  })

});
