describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("starts with a bowl index of 1", function() {
    expect(frame.bowlIndex).toEqual(1);
  });

});
