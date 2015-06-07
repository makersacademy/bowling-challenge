describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("Registers a gutterball", function() {
    frame.registerScore(0);
    expect(frame.pinsLeft()).toEqual(10);
  });

  it("Registers a score", function() {
    frame.registerScore(2)
    expect(frame.pinsLeft()).toEqual(8);
  });

  it("Registers 2 scores", function() {
    frame.registerScore(4)
    frame.registerScore(4)
    expect(frame.pinsLeft()).toEqual(2);
  });

  it("Knows when it's over", function() {
    frame.registerScore(4)
    frame.registerScore(4)
    expect(frame.isOver()).toEqual(true);
  });

  it("Knows when there is another turn", function() {
    expect(frame.isOver()).toEqual(false);
  })

  it("Understands when there are no pins left standing", function() {
    frame.registerScore(10)
    expect(frame.isOver()).toEqual(true);
  });

  // it("cannot score more than 10")
  //   frame.register
  // });
});