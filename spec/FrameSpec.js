describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("registers a gutterball", function() {
    frame.registerScore(0);
    expect(frame.pinsLeft()).toEqual(10);
  });

  it("registers a score", function() {
    frame.registerScore(2)
    expect(frame.pinsLeft()).toEqual(8);
  });

  it("registers 2 scores", function() {
    frame.registerScore(4)
    frame.registerScore(4)
    expect(frame.pinsLeft()).toEqual(2);
  });

  it("knows when it's over", function() {
    frame.registerScore(4)
    frame.registerScore(4)
    expect(frame.isOver()).toEqual(true);
  });

  it("knows when there is another turn", function() {
    expect(frame.isOver()).toEqual(false);
  })

});