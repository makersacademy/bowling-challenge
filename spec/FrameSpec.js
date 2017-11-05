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
})
