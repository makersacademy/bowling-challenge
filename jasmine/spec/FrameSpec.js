describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('starts with 10 pins', function() {
    expect(frame.pins).toBe(10)
  });

  it('starts with 2 bowls', function() {
    expect(frame.bowls).toBe(2)
  });
});
