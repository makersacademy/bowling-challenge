describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should return true for isStrike if rollOne is 10", function() {
    frame.rollOne = 10;
    expect(frame.isStrike()).toBe(true);
  });

  it("should return true for isSpare if rollOne + rollTwo is 10", function() {
    frame.rollOne = 5;
    frame.rollTwo = 5;
    expect(frame.isSpare()).toBe(true);
  });

  it("should return its score as the sum of rollOne and rollTwo (no spare/strike)", function() {
    frame.rollOne = 3;
    frame.rollTwo = 5;
    expect(frame.score()).toEqual(8);
  })

  it("should, if a spare, have a bonus of the next roll", function() {
    frame.rollOne = 3;
    frame.rollTwo = 7;
    nextFrame = new Frame();
    frame.next = nextFrame;
    nextFrame.rollOne = 4
    expect(frame.score()).toEqual(14);
  })

  it("should, if a strike, have a bonus of the next two rolls", function() {
    frame.rollOne = 10;
    frame.rollTwo = null;
    nextFrame = new Frame();
    frame.next = nextFrame;
    nextFrame.rollOne = 4
    nextFrame.rollTwo = 4
    expect(frame.score()).toEqual(18);
  })
})
