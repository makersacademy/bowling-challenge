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

  it("provides the score of 2 rolles within a frame without a strike or spare", () => {
    const frame = new Frame();

    frame.knocked_down_pins(1);
    frame.knocked_down_pins(1);

    expect(frame.addScore()).toEqual(2);
  });

  it("frame declares whether it is complete (e.g. user completes 2 rolls)", () => {
    const frame = new Frame();

    frame.knocked_down_pins(1);
    frame.knocked_down_pins(1);

    expect(frame.isComplete()).toBeTruthy();
  });

  it("allocates 2 bonus rolls (points) if the user scores a strike", () => {
    const frame = new Frame();

    frame.knocked_down_pins(10);

    expect(frame.bonusRolls()).toEqual(2);
  });

  it("allocates 1 bonus roll (points) if the user scores a spare", () => {
    const frame = new Frame();

    frame.knocked_down_pins(5);
    frame.knocked_down_pins(5);

    expect(frame.bonusRolls()).toEqual(1);
  });
});
