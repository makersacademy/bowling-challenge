const Frame = require("./frame");

describe('Frame', () => {
  it('checks if frame is strike or spare', () => {
    const frame = new Frame;
    frame.firstRoll = 10;
    expect(frame.isAStrike()).toBe(true);
    expect(frame.isASpare()).toBe(false);
  });
  it('checks if frame is strike or spare', () => {
    const frame = new Frame;
    frame.firstRoll = 5;
    frame.secondRoll = 5;
    expect(frame.isAStrike()).toBe(false);
    expect(frame.isASpare()).toBe(true);
  });
  it('checks if frame is strike or spare', () => {
    const frame = new Frame;
    frame.firstRoll = 2;
    frame.secondRoll = 3;
    expect(frame.isAStrike()).toBe(false);
    expect(frame.isASpare()).toBe(false);
  });
  it('returns total score', () => {
    const frame = new Frame;
    frame.firstRoll = 2;
    frame.secondRoll = 3;
    frame.getTotal();
    expect(frame.total).toBe(5);
  });
  it('returns total score', () => {
    const frame = new Frame;
    frame.firstRoll = 10;
    frame.getTotal();
    expect(frame.total).toBe(10);
  });
});

