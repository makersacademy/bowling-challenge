describe("Frame", function() {
  var frame;
  beforeEach(function() {
    frame = new Frame;
  });

  it("exists", function() {
    expect(frame).toBeDefined();
  });

  it("has points", function() {
    expect(frame._getPoints).toBeDefined();
  });

  it("can add a gutterball", function() {
    expect(frame.roll(0)).toEqual(0);
  });

  it("can add a spare", function() {
    frame.roll(3);
    expect(frame.roll(7)).toEqual(10);  // test this properly in
  });                                   // the game spec
});
