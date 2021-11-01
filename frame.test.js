const Frame = require('./frame');

let frame = new Frame()
let strike = new Frame()

describe("addRoll", () => {
  it("adds some pins to the frame", () => {
    frame.addRoll(6);
    expect(frame.rolls).toContain(6);
  })
})

describe("isStrike", () => {
  it("returns true when the first roll is a 10", () => {
    strike.addRoll(10);
    expect(strike.isStrike()).toBe(true);
  })

  it("returns false when first roll is not a 10", () =>{
    expect(frame.isStrike()).toBe(false);
  })
})

describe("isSpare", () => {
  it("returns true when the first 2 rolls are ten", () => {
    frame.addRoll(4);
    expect(frame.isSpare()).toBe(true);
  })

  it("returns false when the sum of the rolls is a 10 but not a strike", () =>{
    expect(strike.isSpare()).toBe(false);
  })
})