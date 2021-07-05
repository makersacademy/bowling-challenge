const Frame = require("../frame.js")

describe('Frame Constructor', function() {
  it("constructs a frame", function() {
    const frame = new Frame(1, 2, 7, 0);
    expect(frame.number).toEqual(1);
    expect(frame.rollOneScore).toEqual(2);
    expect(frame.rollTwoScore).toEqual(7);
    expect(frame.bonusScore).toEqual(0);
  });
});