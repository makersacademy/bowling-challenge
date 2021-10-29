const Frame = require('./frame');

let frame = new Frame()

describe("addRoll", () => {
  it("adds some pins to the frame", () => {
    frame.addRoll(6);
    expect(frame.rolls).toContain(6);
  })
})