const Frame = require("../lib/frame");

describe("Frame", () => {
  it("sets and gets roll one", () => {
    const frame = new Frame(1);
    frame.setRollOne(5);
    expect(frame.getRollOne()).toEqual(5);
  });

  it("sets and gets roll two", () => {
    const frame = new Frame(1);
    frame.setRollTwo(5);
    expect(frame.getRollTwo()).toEqual(5);
  });

  it("automatically sets strike to true if roll one is 10 pinns", () => {
    const frame = new Frame(1);
    frame.setRollOne(5);
    expect(frame.isStrike()).toEqual(false);
    expect(frame.isSpare()).toEqual(false);
    frame.setRollOne(10);
    expect(frame.isStrike()).toEqual(true);
    expect(frame.isSpare()).toEqual(false);
  });

  it("automatically sets spare to true if both rolls are 10 pinns", () => {
    const frame = new Frame(1);
    frame.setRollOne(5);
    frame.setRollTwo(4);
    expect(frame.isSpare()).toEqual(false);
    expect(frame.isStrike()).toEqual(false);
    frame.setRollOne(5);
    frame.setRollTwo(5);
    expect(frame.isSpare()).toEqual(true);
    expect(frame.isStrike()).toEqual(false);
  });

  it("adds bonus", () => {
    const frame = new Frame(1);
    frame.addBonus(5);
    expect(frame.getTotalScore()).toEqual(5);
  });

  it("gets total score", () => {
    const frame = new Frame(1);
    frame.setRollOne(5);
    frame.setRollTwo(5);
    frame.addBonus(5);
    expect(frame.getTotalScore()).toEqual(15);
  });

  it("gets frame number", () => {
    const frame = new Frame(1);
    expect(frame.getNumber()).toEqual(1);
  });
});
