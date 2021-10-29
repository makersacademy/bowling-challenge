const Frame = require('./frame');

let frame = new Frame()

describe("addRoll", () => {
  it("adds some pins to the frame", () => {
    frame.addRoll(6);
    expect(frame.rolls).toContain(6);
  })
})

describe("isStrike", () => {
  it("returns true when the first roll is a 10", () => {
    frame.addRoll(10);
    expect(frame.isStrike()).toBe(true);
  })
})