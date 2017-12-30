describe("Frame", function() {
  var frame

  beforeEach(function() {
  frame = new Frame;
  });

  it('initiliazes new frames with a score of 0', function() {
    expect(frame.score).toEqual(0)
  });


  it('records the score of the first attempt', function() {
    frame.roll1(6)
    expect(frame.score).toEqual(6)
  });

  it('increases the roll count after the first roll', function() {
    frame.roll1(5)
    expect(frame.rollCount).toEqual(1)
  });

  it('records the score after second attempt', function() {
    frame.roll1(3)
    frame.roll2(4)
    expect(frame.score).toEqual(7)
  });

  it("Raises error if pinCount drops below 0", function() {
    frame.roll1(6)
    expect(function() {frame.roll2(5)}).toThrowError("There aren't that many pins left!!")
  });

  it("Scores a strike", function() {
    frame.roll1(10)
    expect(frame.isAStrike()).toBe(true)
  })

  it("Scores a spare", function() {
    frame.roll1(5)
    frame.roll2(5)
    expect(frame.isASpare()).toBe(true)
  })

  it("Calculates the score for the frame", function() {
    frame.roll1(4)
    frame.roll2(5)
    expect(frame.calculateFrameScore()).toEqual(9)
  })

})
