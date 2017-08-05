describe("Frame", function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  it("contains values for two rolls", function() {
    expect(frame).toEqual(jasmine.objectContaining({
      roll1: 0,
      roll2: 0
    }));
  });
});
