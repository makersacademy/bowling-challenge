const Frame = require("./frame");

describe(Frame, () => {
  it("logs the knocked down pins in a frame", () => {
    const frame = new Frame();

    frame.knocked_down_pins(1);
    frame.knocked_down_pins(2);
    expect(frame.pinsLog).toEqual([1, 2]);
  });

  it("returns a true value if a strike is scored", () => {
    const frame = new Frame();

    frame.knocked_down_pins(10);
    expect(frame.isAStrike()).toBeTruthy();
  });

  it("returns a true value if a spare is scored", () => {
    const frame = new Frame();

    frame.knocked_down_pins(5);
    frame.knocked_down_pins(5);

    expect(frame.isASpare()).toBeTruthy();
  });
});
