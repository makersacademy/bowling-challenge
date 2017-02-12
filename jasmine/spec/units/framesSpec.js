describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("exists", function() {
    expect(function(){new Frame()}).not.toThrow();
  });

  it("has 10 pins on new frame ", function() {
    expect(frame.pins).toEqual(10);
  });
});
