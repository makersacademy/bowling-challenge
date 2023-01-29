const Frame = require('./frame');

describe("Frame", () => {

  beforeEach(() => {
    frame = new Frame;
  })

  it("Adds a frame and returns true when it's a strike", () => {
    frame.add(10);
    expect(frame.isStrike()).toEqual(true);
  });

  it("Adds a frame and returns true when it's a spare", () => {
    frame.add(8);
    frame.add(2);
    expect(frame.isSpare()).toEqual(true);
  });

  it("Adds a spare as a frame and returns false when asked if it's a strike", () => {
    frame.add(8);
    frame.add(2);
    expect(frame.isStrike()).toEqual(false);
  });

  it("Adds a strike as a frame and returns false when asked if it's a spare", () => {
    frame.add(10);
    expect(frame.isSpare()).toEqual(false);
  });

  it("Returns the empty array in the frame when nothing has been added", () => {
    expect(frame.printFrame()).toEqual([]);
  });

  it("Returns the array in the frame when rolls have been added", () => {
    frame.add(7);
    frame.add(3);
    expect(frame.printFrame()).toEqual([7, 3]);
  });
})